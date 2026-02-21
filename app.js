/**
 * AWS Cloud Practitioner Practice Exam Simulator
 * Main Application Logic
 */

(function () {
    "use strict";

    // ===== State =====
    const state = {
        currentScreen: "exam-selection",  // exam-selection | exam-screen | results-screen
        currentExamIndex: null,
        currentQuestionIndex: 0,
        userAnswers: {},          // { questionIndex: [selectedLetters] }
        checkedQuestions: {},     // { questionIndex: true }  — whether user has checked the answer
        timerInterval: null,
        timerSeconds: 0,
        examResults: null,
        history: JSON.parse(localStorage.getItem("aws-exam-history") || "{}"),
    };

    // ===== DOM References =====
    const $ = (sel) => document.querySelector(sel);
    const $$ = (sel) => document.querySelectorAll(sel);

    const dom = {
        // Screens
        examSelection: $("#exam-selection"),
        examScreen: $("#exam-screen"),
        resultsScreen: $("#results-screen"),
        // Exam selection
        examGrid: $("#exam-grid"),
        totalExams: $("#total-exams"),
        totalQuestions: $("#total-questions"),
        completedExams: $("#completed-exams"),
        // Exam screen
        examTitle: $("#exam-title"),
        timerDisplay: $("#timer-display"),
        progressText: $("#progress-text"),
        progressFill: $("#progress-fill"),
        questionNavGrid: $("#question-nav-grid"),
        questionNumber: $("#question-number"),
        questionBadge: $("#question-badge"),
        questionText: $("#question-text"),
        optionsList: $("#options-list"),
        questionFeedback: $("#question-feedback"),
        feedbackIcon: $("#feedback-icon"),
        feedbackText: $("#feedback-text"),
        btnPrev: $("#btn-prev"),
        btnNext: $("#btn-next"),
        btnCheck: $("#btn-check"),
        btnBack: $("#btn-back"),
        submitSection: $("#submit-section"),
        btnSubmit: $("#btn-submit"),
        // Results
        resultsTitle: $("#results-title"),
        scorePercent: $("#score-percent"),
        scoreDetail: $("#score-detail"),
        scoreRing: $("#score-ring"),
        resultStatus: $("#result-status"),
        correctCount: $("#correct-count"),
        incorrectCount: $("#incorrect-count"),
        skippedCount: $("#skipped-count"),
        timeTaken: $("#time-taken"),
        btnReview: $("#btn-review"),
        btnRetake: $("#btn-retake"),
        btnHome: $("#btn-home"),
        reviewSection: $("#review-section"),
        reviewList: $("#review-list"),
    };

    // ===== Initialize =====
    function init() {
        renderExamGrid();
        updateStats();
        bindEvents();
    }

    // ===== Screen Management =====
    function showScreen(screenName) {
        state.currentScreen = screenName;
        [dom.examSelection, dom.examScreen, dom.resultsScreen].forEach(
            (el) => el.classList.remove("active")
        );
        const map = {
            "exam-selection": dom.examSelection,
            "exam-screen": dom.examScreen,
            "results-screen": dom.resultsScreen,
        };
        map[screenName].classList.add("active");
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // ===== Exam Grid =====
    function renderExamGrid() {
        dom.examGrid.innerHTML = "";
        EXAMS_DATA.forEach((exam, index) => {
            const card = document.createElement("div");
            card.className = "exam-card";
            card.dataset.index = index;

            const historyKey = `exam-${exam.examNumber}`;
            const pastResult = state.history[historyKey];

            let badgeHtml = "";
            let footerHtml = "";

            if (pastResult) {
                badgeHtml = `<span class="exam-card-badge completed">Completed</span>`;
                footerHtml = `
                    <div class="exam-card-footer">
                        <span class="exam-card-score">Best: <strong>${pastResult.bestScore}%</strong></span>
                        <span class="exam-card-score">Last: <strong>${pastResult.lastScore}%</strong></span>
                    </div>`;
            }

            card.innerHTML = `
                ${badgeHtml}
                <div class="exam-card-number">Exam ${exam.examNumber}</div>
                <div class="exam-card-title">${exam.title}</div>
                <div class="exam-card-info">
                    <span>
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"/></svg>
                        ${exam.totalQuestions} Questions
                    </span>
                    <span>
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
                        ~60 min
                    </span>
                </div>
                ${footerHtml}
            `;
            card.addEventListener("click", () => startExam(index));
            dom.examGrid.appendChild(card);
        });
    }

    function updateStats() {
        const total = EXAMS_DATA.length;
        const totalQ = EXAMS_DATA.reduce((sum, e) => sum + e.totalQuestions, 0);
        const completed = Object.keys(state.history).length;
        dom.totalExams.textContent = total;
        dom.totalQuestions.textContent = totalQ;
        dom.completedExams.textContent = completed;
    }

    // ===== Start Exam =====
    function startExam(examIndex) {
        state.currentExamIndex = examIndex;
        state.currentQuestionIndex = 0;
        state.userAnswers = {};
        state.checkedQuestions = {};
        state.timerSeconds = 0;
        state.examResults = null;

        const exam = EXAMS_DATA[examIndex];
        dom.examTitle.textContent = exam.title;

        buildQuestionNav(exam);
        renderQuestion();
        startTimer();
        showScreen("exam-screen");
    }

    // ===== Timer =====
    function startTimer() {
        clearInterval(state.timerInterval);
        state.timerInterval = setInterval(() => {
            state.timerSeconds++;
            dom.timerDisplay.textContent = formatTime(state.timerSeconds);
        }, 1000);
    }

    function stopTimer() {
        clearInterval(state.timerInterval);
    }

    function formatTime(totalSeconds) {
        const m = Math.floor(totalSeconds / 60);
        const s = totalSeconds % 60;
        return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
    }

    // ===== Question Navigation =====
    function buildQuestionNav(exam) {
        dom.questionNavGrid.innerHTML = "";
        exam.questions.forEach((_, i) => {
            const btn = document.createElement("button");
            btn.className = "q-nav-btn";
            btn.textContent = i + 1;
            btn.addEventListener("click", () => goToQuestion(i));
            dom.questionNavGrid.appendChild(btn);
        });
    }

    function updateQuestionNav() {
        const btns = dom.questionNavGrid.querySelectorAll(".q-nav-btn");
        btns.forEach((btn, i) => {
            btn.classList.remove("active", "answered", "correct", "incorrect");
            if (i === state.currentQuestionIndex) {
                btn.classList.add("active");
            } else if (state.checkedQuestions[i]) {
                const exam = EXAMS_DATA[state.currentExamIndex];
                const q = exam.questions[i];
                const userAns = state.userAnswers[i] || [];
                const isCorrect = arraysEqual(userAns.sort(), q.correct.sort());
                btn.classList.add(isCorrect ? "correct" : "incorrect");
            } else if (state.userAnswers[i] && state.userAnswers[i].length > 0) {
                btn.classList.add("answered");
            }
        });
    }

    function goToQuestion(index) {
        state.currentQuestionIndex = index;
        renderQuestion();
    }

    // ===== Render Question =====
    function renderQuestion() {
        const exam = EXAMS_DATA[state.currentExamIndex];
        const q = exam.questions[state.currentQuestionIndex];
        const qIndex = state.currentQuestionIndex;

        // Update header
        dom.questionNumber.textContent = `Question ${q.number}`;
        dom.questionBadge.style.display = q.multiple ? "inline-block" : "none";
        if (q.multiple) {
            dom.questionBadge.textContent = `Select ${q.correct.length}`;
        }
        dom.questionText.textContent = q.question;

        // Update progress
        const answered = Object.keys(state.userAnswers).filter(
            (k) => state.userAnswers[k].length > 0
        ).length;
        dom.progressText.textContent = `${answered} / ${exam.totalQuestions}`;
        dom.progressFill.style.width = `${(answered / exam.totalQuestions) * 100}%`;

        // Render options
        const userSelected = state.userAnswers[qIndex] || [];
        const isChecked = state.checkedQuestions[qIndex];

        dom.optionsList.innerHTML = "";
        const letters = Object.keys(q.options).sort();
        letters.forEach((letter) => {
            const optDiv = document.createElement("div");
            optDiv.className = "option-item";
            if (isChecked) optDiv.classList.add("disabled");

            const isSelected = userSelected.includes(letter);
            const isCorrectOption = q.correct.includes(letter);

            if (isChecked) {
                if (isCorrectOption) {
                    optDiv.classList.add("correct-answer");
                } else if (isSelected && !isCorrectOption) {
                    optDiv.classList.add("wrong-answer");
                }
            } else if (isSelected) {
                optDiv.classList.add("selected");
            }

            optDiv.innerHTML = `
                <span class="option-letter">${letter}</span>
                <span class="option-text">${q.options[letter]}</span>
            `;

            if (!isChecked) {
                optDiv.addEventListener("click", () => selectOption(letter, q));
            }

            dom.optionsList.appendChild(optDiv);
        });

        // Show/hide feedback
        if (isChecked) {
            showFeedback(q, userSelected);
        } else {
            dom.questionFeedback.style.display = "none";
        }

        // Navigation buttons
        dom.btnPrev.disabled = qIndex === 0;
        dom.btnNext.disabled = qIndex === exam.questions.length - 1;
        dom.btnCheck.style.display = isChecked ? "none" : "inline-flex";

        // Show submit button if all questions answered
        const allAnswered = exam.questions.every(
            (_, i) => state.userAnswers[i] && state.userAnswers[i].length > 0
        );
        dom.submitSection.style.display = allAnswered ? "block" : "none";

        updateQuestionNav();
    }

    // ===== Select Option =====
    function selectOption(letter, question) {
        const qIndex = state.currentQuestionIndex;
        if (state.checkedQuestions[qIndex]) return;

        if (!state.userAnswers[qIndex]) {
            state.userAnswers[qIndex] = [];
        }

        const answers = state.userAnswers[qIndex];

        if (question.multiple) {
            // Toggle selection for multiple-answer questions
            const idx = answers.indexOf(letter);
            if (idx > -1) {
                answers.splice(idx, 1);
            } else {
                // Limit to the expected number of answers
                if (answers.length >= question.correct.length) {
                    answers.shift(); // Remove oldest selection
                }
                answers.push(letter);
            }
        } else {
            // Single answer - replace
            state.userAnswers[qIndex] = [letter];
        }

        renderQuestion();
    }

    // ===== Check Answer =====
    function checkAnswer() {
        const qIndex = state.currentQuestionIndex;
        const userAns = state.userAnswers[qIndex] || [];

        if (userAns.length === 0) return; // Nothing selected

        state.checkedQuestions[qIndex] = true;
        renderQuestion();
    }

    function showFeedback(question, userSelected) {
        const isCorrect = arraysEqual(userSelected.sort(), question.correct.sort());
        dom.questionFeedback.style.display = "flex";
        dom.questionFeedback.className = `question-feedback ${isCorrect ? "correct" : "incorrect"}`;

        if (isCorrect) {
            dom.feedbackIcon.textContent = "✓";
            dom.feedbackText.textContent = "Correct! Well done.";
        } else {
            dom.feedbackIcon.textContent = "✗";
            const correctStr = question.correct.join(", ");
            dom.feedbackText.textContent = `Incorrect. The correct answer${question.correct.length > 1 ? "s are" : " is"}: ${correctStr}`;
        }
    }

    // ===== Submit Exam =====
    function submitExam() {
        stopTimer();

        const exam = EXAMS_DATA[state.currentExamIndex];
        let correct = 0;
        let incorrect = 0;
        let skipped = 0;

        exam.questions.forEach((q, i) => {
            const userAns = state.userAnswers[i] || [];
            if (userAns.length === 0) {
                skipped++;
            } else if (arraysEqual(userAns.sort(), q.correct.sort())) {
                correct++;
            } else {
                incorrect++;
            }
        });

        const total = exam.totalQuestions;
        const percent = Math.round((correct / total) * 100);
        const passed = percent >= 70; // AWS passing threshold

        state.examResults = { correct, incorrect, skipped, total, percent, passed };

        // Save to history
        const historyKey = `exam-${exam.examNumber}`;
        const prev = state.history[historyKey];
        state.history[historyKey] = {
            lastScore: percent,
            bestScore: prev ? Math.max(prev.bestScore, percent) : percent,
            lastAttempt: new Date().toISOString(),
        };
        localStorage.setItem("aws-exam-history", JSON.stringify(state.history));

        showResults();
    }

    // ===== Show Results =====
    function showResults() {
        const exam = EXAMS_DATA[state.currentExamIndex];
        const r = state.examResults;

        dom.resultsTitle.textContent = `${exam.title} - Results`;
        dom.scorePercent.textContent = `${r.percent}%`;
        dom.scoreDetail.textContent = `${r.correct}/${r.total}`;

        // Animate score ring
        const circumference = 2 * Math.PI * 54; // r=54
        const offset = circumference - (r.percent / 100) * circumference;
        dom.scoreRing.style.stroke = r.passed ? "var(--success)" : "var(--danger)";
        setTimeout(() => {
            dom.scoreRing.style.strokeDashoffset = offset;
        }, 100);

        // Pass/Fail
        dom.resultStatus.textContent = r.passed ? "PASSED" : "FAILED";
        dom.resultStatus.className = `result-status ${r.passed ? "pass" : "fail"}`;

        // Stats
        dom.correctCount.textContent = r.correct;
        dom.incorrectCount.textContent = r.incorrect;
        dom.skippedCount.textContent = r.skipped;
        dom.timeTaken.textContent = formatTime(state.timerSeconds);

        // Auto-show review of incorrect questions
        dom.reviewSection.style.display = "block";
        // Set "Incorrect Only" as the default filter
        $$(".filter-btn").forEach((b) => b.classList.remove("active"));
        const incorrectFilterBtn = document.querySelector('.filter-btn[data-filter="incorrect"]');
        if (incorrectFilterBtn) incorrectFilterBtn.classList.add("active");
        renderReview("incorrect");

        showScreen("results-screen");
    }

    // ===== Review =====
    function showReview() {
        const isHidden = dom.reviewSection.style.display === "none";
        dom.reviewSection.style.display = isHidden ? "block" : "none";
        dom.btnReview.textContent = isHidden ? "Hide Review" : "Show Review";

        if (isHidden) {
            renderReview("incorrect");
            // Set "Incorrect Only" as the default filter when opening
            $$(".filter-btn").forEach((b) => b.classList.remove("active"));
            const incorrectFilterBtn = document.querySelector('.filter-btn[data-filter="incorrect"]');
            if (incorrectFilterBtn) incorrectFilterBtn.classList.add("active");
        }
    }

    function renderReview(filter) {
        const exam = EXAMS_DATA[state.currentExamIndex];
        dom.reviewList.innerHTML = "";

        exam.questions.forEach((q, i) => {
            const userAns = (state.userAnswers[i] || []).sort();
            const correctAns = q.correct.sort();
            const isCorrect = arraysEqual(userAns, correctAns);
            const isSkipped = userAns.length === 0;

            let status;
            if (isSkipped) status = "skipped";
            else if (isCorrect) status = "correct";
            else status = "incorrect";

            if (filter !== "all" && filter !== status) return;

            const div = document.createElement("div");
            div.className = `review-question review-${status}`;

            const letters = Object.keys(q.options).sort();
            const optionsHtml = letters
                .map((letter) => {
                    let cls = "review-option";
                    const isUserSelected = userAns.includes(letter);
                    const isCorrectOpt = correctAns.includes(letter);

                    if (isCorrectOpt) cls += " is-correct";
                    if (isUserSelected && !isCorrectOpt) cls += " is-wrong";
                    if (isUserSelected) cls += " is-user-selected";

                    return `<div class="${cls}">
                        <span class="review-letter">${letter}.</span>
                        <span>${q.options[letter]}</span>
                    </div>`;
                })
                .join("");

            // Build explanation for incorrect/skipped questions
            let explanationHtml = "";
            if (status === "incorrect" || status === "skipped") {
                const correctOptionTexts = correctAns
                    .map((letter) => `<strong>${letter}.</strong> ${q.options[letter]}`)
                    .join("<br>");
                
                let yourAnswerHtml = "";
                if (status === "incorrect") {
                    const yourOptionTexts = userAns
                        .map((letter) => `<strong>${letter}.</strong> ${q.options[letter]}`)
                        .join("<br>");
                    yourAnswerHtml = `
                        <div class="explanation-your-answer">
                            <span class="explanation-label">Your answer:</span>
                            <div class="explanation-answer-text wrong">${yourOptionTexts}</div>
                        </div>`;
                } else {
                    yourAnswerHtml = `
                        <div class="explanation-your-answer">
                            <span class="explanation-label">Your answer:</span>
                            <div class="explanation-answer-text skipped-text">No answer selected</div>
                        </div>`;
                }

                explanationHtml = `
                    <div class="explanation-block">
                        <div class="explanation-header">
                            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                            <span>Explanation</span>
                        </div>
                        ${yourAnswerHtml}
                        <div class="explanation-correct-answer">
                            <span class="explanation-label">Correct answer${correctAns.length > 1 ? "s" : ""}:</span>
                            <div class="explanation-answer-text correct">${correctOptionTexts}</div>
                        </div>
                        <p class="explanation-rationale">${generateExplanation(q)}</p>
                    </div>`;
            }

            div.innerHTML = `
                <div class="review-question-header">
                    <span class="review-q-num">Question ${q.number}</span>
                    <span class="review-status ${status}">${status.charAt(0).toUpperCase() + status.slice(1)}</span>
                </div>
                <p class="review-question-text">${q.question}</p>
                <div class="review-options">${optionsHtml}</div>
                ${explanationHtml}
            `;

            dom.reviewList.appendChild(div);
        });

        if (dom.reviewList.children.length === 0) {
            dom.reviewList.innerHTML = `<p style="text-align:center;color:var(--text-light);padding:32px;">No questions match this filter.</p>`;
        }
    }

    // ===== Event Bindings =====
    function bindEvents() {
        dom.btnPrev.addEventListener("click", () => {
            if (state.currentQuestionIndex > 0) {
                state.currentQuestionIndex--;
                renderQuestion();
            }
        });

        dom.btnNext.addEventListener("click", () => {
            const exam = EXAMS_DATA[state.currentExamIndex];
            if (state.currentQuestionIndex < exam.questions.length - 1) {
                state.currentQuestionIndex++;
                renderQuestion();
            }
        });

        dom.btnCheck.addEventListener("click", checkAnswer);

        dom.btnSubmit.addEventListener("click", () => {
            if (confirm("Are you sure you want to submit the exam? You won't be able to change your answers.")) {
                submitExam();
            }
        });

        dom.btnBack.addEventListener("click", () => {
            if (confirm("Are you sure you want to exit? Your progress will be lost.")) {
                stopTimer();
                // Reset score ring for next time
                dom.scoreRing.style.strokeDashoffset = 2 * Math.PI * 54;
                renderExamGrid();
                updateStats();
                showScreen("exam-selection");
            }
        });

        dom.btnReview.addEventListener("click", showReview);

        dom.btnRetake.addEventListener("click", () => {
            dom.scoreRing.style.strokeDashoffset = 2 * Math.PI * 54;
            startExam(state.currentExamIndex);
        });

        dom.btnHome.addEventListener("click", () => {
            dom.scoreRing.style.strokeDashoffset = 2 * Math.PI * 54;
            renderExamGrid();
            updateStats();
            showScreen("exam-selection");
        });

        // Review filter buttons
        document.addEventListener("click", (e) => {
            if (e.target.classList.contains("filter-btn")) {
                $$(".filter-btn").forEach((b) => b.classList.remove("active"));
                e.target.classList.add("active");
                renderReview(e.target.dataset.filter);
            }
        });

        // Keyboard navigation
        document.addEventListener("keydown", (e) => {
            if (state.currentScreen !== "exam-screen") return;

            switch (e.key) {
                case "ArrowLeft":
                    dom.btnPrev.click();
                    break;
                case "ArrowRight":
                    dom.btnNext.click();
                    break;
                case "Enter":
                    if (!state.checkedQuestions[state.currentQuestionIndex]) {
                        checkAnswer();
                    }
                    break;
            }
        });
    }

    // ===== Explanation Generator =====
    function generateExplanation(question) {
        const correctLetters = question.correct;
        const correctTexts = correctLetters.map((l) => question.options[l]);
        const isMultiple = correctLetters.length > 1;

        // Build a contextual explanation from the question and correct answer(s)
        const qLower = question.question.toLowerCase();

        // Try to identify the AWS service/concept being tested
        const awsServices = [
            "EC2", "S3", "Lambda", "DynamoDB", "RDS", "CloudFront", "Route 53",
            "VPC", "IAM", "CloudWatch", "CloudTrail", "CloudFormation", "SNS", "SQS",
            "ELB", "Auto Scaling", "Elastic Beanstalk", "ECS", "EKS", "Fargate",
            "Redshift", "Aurora", "ElastiCache", "Glacier", "Snowball", "Direct Connect",
            "AWS Shield", "AWS WAF", "KMS", "Trusted Advisor", "AWS Organizations",
            "AWS Config", "AWS Artifact", "AWS Inspector", "AWS GuardDuty",
            "Cost Explorer", "AWS Budgets", "Shared Responsibility", "Well-Architected",
        ];

        let mentionedService = "";
        for (const svc of awsServices) {
            if (qLower.includes(svc.toLowerCase())) {
                mentionedService = svc;
                break;
            }
        }

        let explanation = "";

        if (isMultiple) {
            const answerList = correctLetters
                .map((l, idx) => `${l} (${correctTexts[idx].replace(/\.$/, "")})`)
                .join(" and ");
            explanation = `The correct answers are ${answerList}. `;
        } else {
            explanation = `The correct answer is ${correctLetters[0]} (${correctTexts[0].replace(/\.$/, "")}). `;
        }

        // Add context based on question patterns
        if (qLower.includes("shared responsibility")) {
            explanation += "Under the AWS Shared Responsibility Model, AWS manages security \"of\" the cloud (infrastructure, hardware, networking), while customers manage security \"in\" the cloud (data, applications, access management, OS patching).";
        } else if (qLower.includes("well-architected")) {
            explanation += "The AWS Well-Architected Framework consists of six pillars: Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, and Sustainability.";
        } else if (qLower.includes("availability zone") || qLower.includes("high availability") || qLower.includes("fault tolerant")) {
            explanation += "For high availability and fault tolerance, AWS recommends deploying across multiple Availability Zones and Regions, using services like Auto Scaling and Elastic Load Balancing.";
        } else if (qLower.includes("cost") || qLower.includes("pricing") || qLower.includes("billing") || qLower.includes("reduce") && qLower.includes("spend")) {
            explanation += "AWS offers multiple pricing models and cost management tools. Understanding Reserved Instances, Savings Plans, Spot Instances, and tools like Cost Explorer and AWS Budgets is key for cost optimization.";
        } else if (qLower.includes("security") || qLower.includes("encrypt") || qLower.includes("protect")) {
            explanation += "Security is a top priority in AWS. Services like IAM, KMS, Security Groups, NACLs, AWS Shield, and AWS WAF help protect resources at different layers.";
        } else if (qLower.includes("support plan") || qLower.includes("enterprise support") || qLower.includes("business support")) {
            explanation += "AWS offers four support plans: Basic, Developer, Business, and Enterprise. Each tier provides increasing levels of support, response times, and access to AWS experts like TAMs.";
        } else if (qLower.includes("storage") || qLower.includes("s3") || qLower.includes("ebs") || qLower.includes("glacier")) {
            explanation += "AWS provides various storage services: S3 for object storage, EBS for block storage, EFS for file storage, and S3 Glacier for long-term archival. Choosing the right storage class depends on access patterns and cost requirements.";
        } else if (qLower.includes("database") || qLower.includes("dynamo") || qLower.includes("rds") || qLower.includes("aurora")) {
            explanation += "AWS offers managed database services: RDS and Aurora for relational databases, DynamoDB for NoSQL, Redshift for data warehousing, and ElastiCache for in-memory caching.";
        } else if (qLower.includes("scaling") || qLower.includes("elastic") || qLower.includes("auto scaling")) {
            explanation += "Elasticity is a core cloud concept. Horizontal scaling adds more instances, while vertical scaling increases instance size. AWS Auto Scaling automates this process based on demand.";
        } else if (qLower.includes("migration") || qLower.includes("migrate")) {
            explanation += "AWS provides several migration services including AWS Database Migration Service (DMS), AWS Server Migration Service (SMS), AWS Snowball for large data transfers, and AWS Application Discovery Service.";
        } else if (mentionedService) {
            explanation += `This question tests your knowledge of ${mentionedService} and its use cases within the AWS ecosystem.`;
        } else {
            explanation += "Review the relevant AWS documentation to strengthen your understanding of this topic for the exam.";
        }

        return explanation;
    }

    // ===== Utility =====
    function arraysEqual(a, b) {
        if (a.length !== b.length) return false;
        return a.every((val, i) => val === b[i]);
    }

    // ===== Start =====
    document.addEventListener("DOMContentLoaded", init);
    if (document.readyState !== "loading") init();
})();
