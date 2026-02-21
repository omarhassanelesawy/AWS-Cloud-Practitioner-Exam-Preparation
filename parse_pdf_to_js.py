import PyPDF2
import json
import re
import traceback

def parse_pdf_to_json(file_path):
    print(f"Reading {file_path}...")
    reader = PyPDF2.PdfReader(file_path)
    
    full_text = ""
    for page in reader.pages:
        text = page.extract_text()
        if text:
            full_text += text + "\n"
            
    # Clean up headers/footers
    lines = full_text.split('\n')
    cleaned_lines = []
    for line in lines:
        if 'ExamTopics' in line and ('2/23/24' in line or 'Page' in line):
            continue
        if 'examtopics.com' in line:
            continue
        if line.strip() == 'Topic 1 - Single Topic':
            continue
        cleaned_lines.append(line)
        
    cleaned_text = '\n'.join(cleaned_lines)
    
    # Split questions by "Topic 1 Question #..." or just "Question #..."
    # ExamTopics sometimes says "Topic 1 Question #1" or "Question #1"
    questions_raw = re.split(r'(?:Topic \d+ )?Question #\s*(\d+)', cleaned_text)
    
    # questions_raw will be: [preamble, q_num_1, q_content_1, q_num_2, q_content_2, ...]
    
    questions = []
    
    # Start at index 1 because index 0 is anything before the first Question
    for i in range(1, len(questions_raw), 2):
        if i + 1 >= len(questions_raw):
            break
            
        q_num = int(questions_raw[i])
        q_content = questions_raw[i+1].strip()
        
        # We need to find the Correct Answer first to know where the options stop
        correct_answer_match = re.search(r'Correct Answer:\s*([A-Z]+)', q_content)
        
        if not correct_answer_match:
            print(f"Skipping Q{q_num} - No correct answer found.")
            continue
            
        correct_letters = list(correct_answer_match.group(1).strip())
        
        # Find where options start
        # Options usually start with A. , B. , etc.
        # We'll split the text before "Correct Answer:" to find the question and options
        content_before_answer = q_content[:correct_answer_match.start()].strip()
        
        # Find the first option letter using a regex for start of line A. or \nA.
        options_start_match = re.search(r'(?:^|\n)([A-G])\.\s+', content_before_answer)
        if not options_start_match:
            print(f"Skipping Q{q_num} - No options found.")
            continue
            
        question_text = content_before_answer[:options_start_match.start()].strip()
        
        options_text = content_before_answer[options_start_match.start():].strip()
        
        # Now parse the options text
        # Split by [A-G]\. 
        option_matches = list(re.finditer(r'(?:^|\n)([A-G])\.\s+', options_text))
        
        parsed_options = {}
        for j, match in enumerate(option_matches):
            letter = match.group(1)
            start_idx = match.end()
            if j + 1 < len(option_matches):
                end_idx = option_matches[j+1].start()
            else:
                end_idx = len(options_text)
                
            option_val = options_text[start_idx:end_idx].replace('\n', ' ').strip()
            parsed_options[letter] = option_val
            
        # Clean up question text (remove newlines)
        question_text = question_text.replace('\n', ' ').strip()
        
        q_obj = {
            "number": q_num,
            "question": question_text,
            "options": parsed_options,
            "correct": correct_letters,
            "multiple": len(correct_letters) > 1
        }
        
        questions.append(q_obj)

    # Format into exams_data.js structure
    exam_data = {
        "examNumber": 3,  # Let's say this is exam 3 since 1 and 2 exist
        "title": "AWS CLF-C02 ExamTopics",
        "totalQuestions": len(questions),
        "questions": questions
    }
    
    js_content = f"// Auto-generated from {file_path}\n"
    js_content += f"const AWS_CLF_02_DATA = [\n"
    js_content += json.dumps(exam_data, indent=2)
    js_content += "\n];\n"
    
    out_path = 'd:/Omar/aws_clf_02_data.js'
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write(js_content)
        
    print(f"Successfully parsed {len(questions)} questions!")
    print(f"Saved to {out_path}")

if __name__ == "__main__":
    try:
        parse_pdf_to_json('d:/Omar/AWS-CLF-02 Questions.pdf')
    except Exception as e:
        traceback.print_exc()
