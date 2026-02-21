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
- **Data Pipeline:** Exam data is static and loaded via a `<script>` tag referencing `exams_data.js`. This JS file defines a global variable `EXAMS_DATA` which is accessed by `app.js`.

## 3. Directory & File Context

- **`index.html`**: Contains the markup for all screens (Selection, Exam, Results). Navigation is handled by toggling `.active` classes on `.screen` containers.
- **`app.js`**: Contains DOM selectors, state management, event listeners, timer logic, and explanation generation.
- **`styles.css`**: Uses custom properties (CSS variables) for colors, spacing, and theming. Ensure new components reuse these variables.
- **`download_exams.py`**: Python script using standard libraries (Regex, JSON, urllib) to fetch Markdown files from a target GitHub repo, parse the questions/answers, and generate `exams_data.js`.
- **`aws_clf_02_data.js`**: Appears to be an alternative/backup data file similar to `exams_data.js`.

## 4. Development Best Practices

### Modifying the UI (HTML/CSS)
- Follow the existing class naming conventions.
- When adding new screens or modals, hide/show them utilizing the same display/active class toggling approach found in `app.js` (`showScreen` function).
- Ensure mobile responsiveness. The existing UI uses flexbox and grid layouts which adapt to smaller screens. 

### Modifying Application Logic (`app.js`)
- **State Changes:** When adding new features (e.g., a new study mode), extend the `state` object at the top of `app.js`.
- **DOM Updates:** Update the `dom` object with new selectors. Avoid inline `document.querySelector` calls deep in the logic functions; cache them in the `dom` object instead.
- **Explanations:** The `generateExplanation(question)` function relies on simple string matching (parsing AWS service names) to build explanation contextual responses. If adding new logic for explanations, keep it lightweight.

### Modifying the Data Pipeline (`download_exams.py`)
- Python 3 standard library is preferred.
- If scraping logic breaks, check the markdown regex blocks in `parse_exam()`. The remote markdown formatting governs how options and correct answers are extracted.

## 5. Typical Workflows

- **Adding a Feature:** Update `index.html` for markup, add styling in `styles.css` using existing CSS variables, update `state` and DOM bindings in `app.js`.
- **Fixing Exam Parsing:** If a question renders weirdly or is missing options, inspect `download_exams.py`, run it, and verify the resulting structure in `exams_data.js`. 
- **Testing:** Serve the directory locally (e.g., `python -m http.server`) and manually interact with the web page to ensure state updates and transitions work smoothly.
