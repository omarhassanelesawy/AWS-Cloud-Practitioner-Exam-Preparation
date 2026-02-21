"""
Downloads AWS Certified Cloud Practitioner practice exams from GitHub
and parses them into a JSON file for the web application.
"""

import re
import json
import urllib.request
import ssl

BASE_URL = "https://raw.githubusercontent.com/kananinirav/AWS-Certified-Cloud-Practitioner-Notes/master/practice-exam/practice-exam-{}.md"
NUM_EXAMS = 23


def download_exam(exam_number: int) -> str:
    """Download a single exam markdown file."""
    url = BASE_URL.format(exam_number)
    ctx = ssl.create_default_context()
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, context=ctx) as response:
            return response.read().decode("utf-8")
    except Exception as e:
        print(f"  Error downloading exam {exam_number}: {e}")
        return ""


def parse_exam(markdown: str, exam_number: int) -> dict:
    """Parse a markdown exam into structured data."""
    questions = []

    # Split by question numbers (1. , 2. , etc.)
    # Pattern: line starts with a number followed by a period
    parts = re.split(r'\n(?=\d+[\.\)]\s)', markdown)

    sequential_num = 0  # For exams where all questions are numbered "1."

    for part in parts:
        # Check if this part starts with a question number
        match = re.match(r'^(\d+)[\.\)]\s+(.*)', part, re.DOTALL)
        if not match:
            continue

        content = match.group(2).strip()

        # Extract the answer from <details> block
        # Support both formats:
        #   "Correct answer: A, B"  (comma-separated)
        #   "Correct Answer: AB"    (joined letters)
        #   "Correct Answer: BCD"   (3+ joined letters)
        answer_match = re.search(
            r'<details.*?>.*?Correct\s+[Aa]nswer:?\s*([A-E]{2,5}|[A-E](?:\s*,\s*[A-E])+|[A-E])',
            content, re.DOTALL
        )
        if not answer_match:
            continue

        raw_answer = answer_match.group(1).strip()
        if ',' in raw_answer:
            # Comma-separated: "A, B" or "A,B"
            correct_answers = [a.strip() for a in raw_answer.split(",")]
        else:
            # Joined letters: "AB", "BCD", or single "A"
            correct_answers = list(raw_answer)

        # Remove the <details> block from content
        content_clean = re.sub(r'\s*<details.*?</details>\s*', '', content, flags=re.DOTALL).strip()

        # Remove <br/> tags
        content_clean = re.sub(r'<br\s*/?>', ' ', content_clean)

        # Extract question text (everything before the first option)
        q_text_match = re.match(r'^(.*?)(?=\n\s*-\s*[A-E][\.\)])', content_clean, re.DOTALL)
        if not q_text_match:
            continue

        question_text = q_text_match.group(1).strip()
        # Clean up any markdown formatting
        question_text = re.sub(r'\s+', ' ', question_text)

        # Extract options — support both "A." and "A)" formats
        options = {}
        option_matches = re.findall(
            r'-\s*([A-E])[\.\)]\s*(.*?)(?=\n\s*-\s*[A-E][\.\)]|$)',
            content_clean, re.DOTALL
        )
        for letter, text in option_matches:
            options[letter] = re.sub(r'\s+', ' ', text.strip())

        if not options:
            continue

        # Assign sequential number (handles exams where all questions are "1.")
        sequential_num += 1

        # Determine if multiple answers expected
        is_multiple = len(correct_answers) > 1

        questions.append({
            "number": sequential_num,
            "question": question_text,
            "options": options,
            "correct": correct_answers,
            "multiple": is_multiple
        })

    return {
        "examNumber": exam_number,
        "title": f"Practice Exam {exam_number}",
        "totalQuestions": len(questions),
        "questions": questions
    }


def main():
    all_exams = []

    for i in range(1, NUM_EXAMS + 1):
        print(f"Downloading exam {i}/{NUM_EXAMS}...")
        md = download_exam(i)
        if md:
            exam = parse_exam(md, i)
            print(f"  Parsed {exam['totalQuestions']} questions")
            all_exams.append(exam)
        else:
            print(f"  Skipped exam {i}")

    output_file = "exams_data.js"
    with open(output_file, "w", encoding="utf-8") as f:
        f.write("// Auto-generated exam data\n")
        f.write("const EXAMS_DATA = ")
        json.dump(all_exams, f, indent=2, ensure_ascii=False)
        f.write(";\n")

    print(f"\nDone! Wrote {len(all_exams)} exams to {output_file}")
    total_q = sum(e["totalQuestions"] for e in all_exams)
    print(f"Total questions: {total_q}")


if __name__ == "__main__":
    main()
