"""Import an authorized, saved AIF-C01 HTML page into browser-ready JavaScript.

Usage:
    python import_aif_c01.py aif_c01_page.html

The importer intentionally reads a local file. It does not access ExamTopics or
attempt to bypass authentication, CAPTCHA, or other access controls.
"""

import html
import json
import re
import sys
import urllib.request
from html.parser import HTMLParser
from pathlib import Path


class PracticeTestParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.in_test = False
        self.ol_depth = 0
        self.ul_depth = 0
        self.in_details = False
        self.current_question = None
        self.current_option = None
        self.questions = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        attributes = dict(attrs)
        if tag == "h1" and str(attributes.get("id", "")).startswith("practice-test-"):
            self.in_test = True
        elif self.in_test and tag == "ol":
            self.ol_depth += 1
        elif self.in_test and tag == "ul":
            self.ul_depth += 1
        elif self.ol_depth == 1 and tag == "details":
            self.in_details = True
        elif self.ol_depth == 1 and tag == "li" and self.ul_depth == 0:
            self.current_question = {"text": [], "options": {}, "answer": []}
        elif self.current_question and tag == "li" and self.ul_depth == 1:
            self.current_option = []

    def handle_endtag(self, tag: str) -> None:
        if tag == "details":
            self.in_details = False
        elif tag == "li" and self.current_option is not None:
            option = clean_text(" ".join(self.current_option))
            match = re.match(r"([A-E])\.\s*(.+)", option, re.DOTALL)
            if match:
                self.current_question["options"][match.group(1)] = match.group(2)
            self.current_option = None
        elif tag == "li" and self.current_question and self.ul_depth == 0:
            answer = re.search(
                r"Correct\s+answer:\s*(.*?)(?=\s*Explanation:|$)",
                " ".join(self.current_question["answer"]),
                re.IGNORECASE,
            )
            if len(self.current_question["options"]) >= 2 and answer:
                correct = re.findall(r"[A-E]", answer.group(1).upper())
                self.questions.append({
                    "number": len(self.questions) + 1,
                    "question": clean_text(" ".join(self.current_question["text"])),
                    "options": self.current_question["options"],
                    "correct": correct,
                    "multiple": len(correct) > 1,
                })
            self.current_question = None
        elif self.in_test and tag == "ul":
            self.ul_depth -= 1
        elif self.in_test and tag == "ol":
            self.ol_depth -= 1

    def handle_data(self, data: str) -> None:
        if not self.current_question:
            return
        if self.current_option is not None:
            self.current_option.append(data)
        elif self.in_details:
            self.current_question["answer"].append(data)
        elif self.ul_depth == 0 and self.ol_depth == 1:
            self.current_question["text"].append(data)


def parse_page(source: str) -> list[dict]:
    parser = PracticeTestParser()
    parser.feed(source)
    return parser.questions


def clean_text(value: str) -> str:
    value = re.sub(r"<script.*?</script>|<style.*?</style>", " ", value, flags=re.DOTALL | re.IGNORECASE)
    value = re.sub(r"<br\s*/?>", " ", value, flags=re.IGNORECASE)
    value = re.sub(r"<[^>]+>", " ", value)
    value = html.unescape(value)
    return re.sub(r"\s+", " ", value).strip()


def html_to_text(value: str) -> str:
    value = re.sub(r"<script.*?</script>|<style.*?</style>", " ", value, flags=re.DOTALL | re.IGNORECASE)
    value = re.sub(r"<br\s*/?>", "\n", value, flags=re.IGNORECASE)
    value = re.sub(r"<li\b[^>]*>", "\n", value, flags=re.IGNORECASE)
    value = re.sub(r"</(?:p|li|div|h[1-6])\s*>", "\n", value, flags=re.IGNORECASE)
    value = re.sub(r"<[^>]+>", " ", value)
    value = html.unescape(value)
    return re.sub(r"[ \t]+", " ", value)


def main() -> None:
    if len(sys.argv) != 2:
        raise SystemExit("Usage: python import_aif_c01.py <saved-html-file>")

    source_name = sys.argv[1]
    if source_name.startswith(("http://", "https://")):
        request = urllib.request.Request(source_name, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(request) as response:
            source = response.read().decode("utf-8")
    else:
        source = Path(source_name).read_text(encoding="utf-8")

    questions = parse_page(source)
    if not questions:
        raise SystemExit("No questions were found in the supplied HTML file.")

    test_number = re.search(r"practice-test-(\d+)", source_name)
    test_suffix = test_number.group(1) if test_number else "imported"
    exam = {
        "examNumber": f"AIF-C01-{test_suffix}",
        "title": f"AWS Certified AI Practitioner - Practice Test {test_suffix}",
        "totalQuestions": len(questions),
        "source": source_name,
        "questions": questions,
    }
    variable_name = f"AWS_AIF_C01_TEST_{test_suffix}_DATA" if test_number else "AWS_AIF_C01_IMPORTED_DATA"
    print(f"const {variable_name} = " + json.dumps([exam], indent=2) + ";")


if __name__ == "__main__":
    main()
