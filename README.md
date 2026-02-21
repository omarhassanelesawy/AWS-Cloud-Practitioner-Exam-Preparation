# AWS Cloud Practitioner Practice Exam Simulator

Welcome to the **AWS Cloud Practitioner Practice Exam Simulator**! This is a simple, browser-based web application designed to help you prepare for the AWS Certified Cloud Practitioner (CLF-C02) exam.

## Features

- **Interactive Exam Interface:** Choose from various practice exams featuring 50 questions each.
- **Timer & Progress Tracking:** Timed exams with a top progress bar to simulate the real exam environment.
- **Answer Checking & Explanations:** Instantly check your answers and receive detailed explanations based on the AWS Well-Architected Framework and various AWS Services.
- **Result Summary & Review:** Get a comprehensive summary of your performance (correct, incorrect, skipped) and review only the answers you got wrong.
- **History Tracking:** Your best and latest scores are saved locally in your browser so you can track your progress over time.

## Project Structure

- `index.html`: The main user interface structure.
- `styles.css`: Styling for the application, featuring a clean, responsive, and modern design.
- `app.js`: The core logic, handling state, exam navigation, score calculation, and local storage history.
- `exams_data.js`: The exam questions and answers data loaded into the application (fetched from GitHub).
- `aws_clf_02_data.js`: Additional exam questions and answers extracted locally from a PDF.
- `download_exams.py`: A Python script that scrapes/downloads exam questions from an external GitHub repository and parses them into `exams_data.js`.
- `parse_pdf_to_js.py`: A Python script that parses a local PDF containing exam questions (`AWS-CLF-02 Questions.pdf`) and generates the `aws_clf_02_data.js` file.

## How to Run Locally

You don't need any complex build tools to run this application. It relies on vanilla HTML/CSS/JS.

1. **Clone or Download** this repository.
2. **Start a local HTTP server.** If you have Python installed, you can simply run:
   ```bash
   python -m http.server 8765
   ```
   *(Or use any local server like VS Code Live Server, Node's `http-server`, etc.)*
3. **Open your browser** and navigate to `http://localhost:8765`.

## Updating Exam Data

If you need to fetch the latest practice exams or refresh the data:

### Fetching from GitHub

1. Ensure you have Python installed.
2. Run the scraping script:
   ```bash
   python download_exams.py
   ```
3. The script will download markdown files, parse them, and generate a new `exams_data.js` file automatically.

### Parsing from PDF

1. Ensure you have Python installed along with the `PyPDF2` library.
2. Ensure `AWS-CLF-02 Questions.pdf` is present in the directory.
3. Run the PDF parsing script:
   ```bash
   python parse_pdf_to_js.py
   ```
4. The script will extract questions from the PDF and generate the `aws_clf_02_data.js` file.

## Disclaimer

This project is for educational purposes. The practice questions are sourced publicly and are not official AWS exam questions. Always refer to official [AWS Training and Certification](https://aws.amazon.com/certification/) materials for your primary study resource.
