# AI Agent Guidelines (`agents.md`)

This file contains guidelines, architectural context, and best practices for any AI agent (or developer) interacting with the **AWS Cloud Practitioner Practice Exam Simulator** repository. 

**Always read this document before planning any significant refactoring or feature additions.**

## 1. Project Overview

This is a **Vanilla Web Application** (HTML/CSS/JS) aimed at simulating the AWS Cloud Practitioner exam. It requires no build step (no Webpack, Vite, React, etc.) and is served via a simple static HTTP server.

## 2. Technology Stack & Architecture

- **Frontend Core:** Vanilla HTML5, CSS3, JavaScript (ES6+).
- **No Frameworks:** Do not introduce frontend frameworks (like React, Vue, or TailwindCSS) unless explicitly instructed by the user. The project relies on standard CSS variables and grid/flexbox layouts.
- **State Management:** Handled via a simple `state` object inside an IIFE (Immediately Invoked Function Expression) in `app.js`.
- **Data Persistence:** User progress (scores, completion status) is saved in the browser's `localStorage` under the key `aws-exam-history`.
- **Data Pipeline:** Exam data is static and loaded via `<script>` tags referencing `exams_data.js` and `aws_clf_02_data.js`. These JS files define global variables (e.g., `EXAMS_DATA` and `AWS_CLF_02_DATA`) which are used by `app.js`.

## 3. Directory & File Context

- **`index.html`**: Contains the markup for all screens (Selection, Exam, Results). Navigation is handled by toggling `.active` classes on `.screen` containers.
- **`app.js`**: Contains DOM selectors, state management, event listeners, timer logic, and explanation generation.
- **`styles.css`**: Uses custom properties (CSS variables) for colors, spacing, and theming. Ensure new components reuse these variables.
- **`download_exams.py`**: Python script using standard libraries (Regex, JSON, urllib) to fetch Markdown files from a target GitHub repo, parse the questions/answers, and generate `exams_data.js`.
- **`parse_pdf_to_js.py`**: Python script using `PyPDF2` and regex to parse a local PDF (`AWS-CLF-02 Questions.pdf`), extracting questions, options, and correct answers to generate `aws_clf_02_data.js`.
- **`aws_clf_02_data.js`**: Contains a large block of exam questions JSON extracted locally via the PDF parser.

## 4. Development Best Practices

### Modifying the UI (HTML/CSS)
- Follow the existing class naming conventions.
- When adding new screens or modals, hide/show them utilizing the same display/active class toggling approach found in `app.js` (`showScreen` function).
- Ensure mobile responsiveness. The existing UI uses flexbox and grid layouts which adapt to smaller screens. 

### Modifying Application Logic (`app.js`)
- **State Changes:** When adding new features (e.g., a new study mode), extend the `state` object at the top of `app.js`.
- **DOM Updates:** Update the `dom` object with new selectors. Avoid inline `document.querySelector` calls deep in the logic functions; cache them in the `dom` object instead.
- **Explanations:** The `generateExplanation(question)` function relies on simple string matching (parsing AWS service names) to build explanation contextual responses. If adding new logic for explanations, keep it lightweight.

### Modifying the Data Pipeline (`download_exams.py` & `parse_pdf_to_js.py`)
- Python 3 standard library is preferred, though `parse_pdf_to_js.py` relies on the external `PyPDF2` library.
- If scraping logic breaks natively, check the markdown regex blocks in `download_exams.py`. The remote markdown formatting governs how options and correct answers are extracted.
- If PDF parsing breaks, verify that `PyPDF2` is reading the text predictably. The regex in `parse_pdf_to_json` depends heavily on specific string delimiters (like 'Correct Answer:' or 'Question #') which may change across different PDF versions.

## 5. Typical Workflows

- **Adding a Feature:** Update `index.html` for markup, add styling in `styles.css` using existing CSS variables, update `state` and DOM bindings in `app.js`.
- **Fixing Exam Parsing:** If a question renders weirdly or is missing options, inspect `download_exams.py` or `parse_pdf_to_js.py` (depending on the source file), run it, and verify the resulting structure in the output `.js` file. 
- **Testing:** Serve the directory locally (e.g., `python -m http.server`) and manually interact with the web page to ensure state updates and transitions work smoothly.
