const AWS_AIF_C01_TEST_7_DATA = [
  {
    "examNumber": "AIF-C01-7",
    "title": "AWS Certified AI Practitioner - Practice Test 7",
    "totalQuestions": 50,
    "source": "https://notezio.com/aws-certified-ai-practitioner/practice-test/practice-test-7/",
    "questions": [
      {
        "number": 1,
        "question": "A company is using large language models (LLMs) to develop online tutoring applications. The company needs to apply configurable safeguards to the LLMs. These safeguards must ensure that the LLMs follow standard safety rules when creating applications. Which solution will meet these requirements with the LEAST effort?",
        "options": {
          "A": "Amazon Bedrock playgrounds",
          "B": "Amazon SageMaker Clarify",
          "C": "Amazon Bedrock Guardrails",
          "D": "Amazon SageMaker Jumpstart"
        },
        "correct": [
          "C"
        ],
        "multiple": false
      },
      {
        "number": 2,
        "question": "A company is exploring Amazon Nova models in Amazon Bedrock. The company needs a multimodal model that supports multiple languages. Which Nova model will meet these requirements MOST cost-effectively?",
        "options": {
          "A": "Nova Lite",
          "B": "Nova Pro",
          "C": "Nova Canvas",
          "D": "Nova Reel"
        },
        "correct": [
          "A"
        ],
        "multiple": false
      },
      {
        "number": 3,
        "question": "A company is building a new generative AI chatbot. The chatbot uses an Amazon Bedrock foundation model (FM) to generate responses. During testing, the company notices that the chatbot is prone to prompt injection attacks. What can the company do to secure the chatbot with the LEAST implementation effort?",
        "options": {
          "A": "Fine-tune the FM to avoid harmful responses.",
          "B": "Use Amazon Bedrock Guardrails content filters and denied topics.",
          "C": "Change the FM to a more secure FM.",
          "D": "Use chain-of-thought prompting to produce secure responses."
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 4,
        "question": "What does inference refer to in the context of AI?",
        "options": {
          "A": "The process of creating new AI algorithms",
          "B": "The use of a trained model to make predictions or decisions on unseen data",
          "C": "The process of combining multiple AI models into one model",
          "D": "The method of collecting training data for AI systems"
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 5,
        "question": "A company wants to build an AI assistant to provide responses to user queries. The AI assistant must evaluate specific data sources, query external APIs, generate response options, and compare and prioritize response options. Which Amazon Bedrock feature or resource will meet these requirements?",
        "options": {
          "A": "Prompt Management",
          "B": "Response streaming",
          "C": "Knowledge Bases",
          "D": "Agents"
        },
        "correct": [
          "D"
        ],
        "multiple": false
      },
      {
        "number": 6,
        "question": "An AI practitioner notices a large language model (LLM) is generating different responses for the same input across multiple invocations. Which risk of AI does this describe?",
        "options": {
          "A": "Hallucinations",
          "B": "Nondeterminism",
          "C": "Accuracy",
          "D": "Multimodality"
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 7,
        "question": "A company is building a generative AI application on AWS. The application will help improve reading comprehension for students. The application must give students the ability to add illustrations to stories. Which solution will meet this requirement?",
        "options": {
          "A": "Use Amazon Bedrock Stable Diffusion 3.5 Large to generate images based on text inputs.",
          "B": "Use Amazon Polly to create an audiobook based on story texts.",
          "C": "Use Amazon Rekognition to analyze image contents and detect text attributes.",
          "D": "Create a standard prompt template. Use Amazon Q Business to illustrate stories."
        },
        "correct": [
          "A"
        ],
        "multiple": false
      },
      {
        "number": 8,
        "question": "A healthcare company wants to analyze patient data. The data was gathered over the previous year to detect patterns in disease outbreaks. The company needs to create a trend analysis report for each month to present to public health officials. The company must provide insights into patient data from the most recent month of the current year. Which inference method will meet these requirements MOST cost-effectively?",
        "options": {
          "A": "Real-time inference",
          "B": "Batch transform",
          "C": "Serverless inference",
          "D": "Asynchronous inference"
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 9,
        "question": "A company acquires International Organization for Standardization (ISO) accreditation to manage AI risks and to use AI responsibly. What does this accreditation reflect about the company?",
        "options": {
          "A": "All members of the company are ISO certified.",
          "B": "All AI systems that the company uses are ISO certified.",
          "C": "All AI application team members are ISO certified.",
          "D": "The company\u2019s development framework is ISO certified."
        },
        "correct": [
          "D"
        ],
        "multiple": false
      },
      {
        "number": 10,
        "question": "A company is developing an ML model to predict heart disease risk. The model uses patient data, such as age, cholesterol, blood pressure, smoking status, and exercise habits. The dataset includes a target value that indicates whether a patient has heart disease. Which ML technique will meet these requirements?",
        "options": {
          "A": "Unsupervised learning",
          "B": "Supervised learning",
          "C": "Reinforcement learning",
          "D": "Semi-supervised learning"
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 11,
        "question": "A company has guidelines for data storage and deletion. Which data governance strategy does this describe?",
        "options": {
          "A": "Data de-identification",
          "B": "Data quality standards",
          "C": "Data retention",
          "D": "Log storage"
        },
        "correct": [
          "C"
        ],
        "multiple": false
      },
      {
        "number": 12,
        "question": "A company needs to apply numerical transformations to a set of images to transpose and rotate the images. Which solution will meet these requirements in the MOST operationally efficient way?",
        "options": {
          "A": "Create a deep neural network by using the images as input.",
          "B": "Create an AWS Lambda function to perform the transformations.",
          "C": "Use an Amazon Bedrock large language model (LLM) with a high temperature.",
          "D": "Use AWS Glue Data Quality to make corrections to each image."
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 13,
        "question": "An AI practitioner is writing software code. The AI practitioner wants to quickly develop a test case and create documentation for the code. Which solution will meet these requirements with the LEAST effort?",
        "options": {
          "A": "Upload the code to an online coding assistant.",
          "B": "Develop an application to use foundation models (FMs).",
          "C": "Use Amazon Q Developer in an integrated development environment (IDE).",
          "D": "Research and write test cases. Then, create test cases and add documentation."
        },
        "correct": [
          "C"
        ],
        "multiple": false
      },
      {
        "number": 14,
        "question": "A company is developing a generative AI application to automatically generate product descriptions for an ecommerce website. The product descriptions must consist of paragraphs of text that are consistent in style and tone. The application must generate thousands of unique descriptions each day. Which type of generative model will meet these requirements?",
        "options": {
          "A": "A variational autoencoder (VAE) model",
          "B": "A transformer-based model",
          "C": "A diffusion model",
          "D": "A generative adversarial network (GAN) model"
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 15,
        "question": "An AI practitioner has trained a model on a training dataset. The model performs well on the training data. However, the model does not perform well on evaluation data. What is the MOST likely cause of this issue?",
        "options": {
          "A": "The model is underfit.",
          "B": "The model requires prompt engineering.",
          "C": "The model is biased.",
          "D": "The model is overfit."
        },
        "correct": [
          "D"
        ],
        "multiple": false
      },
      {
        "number": 16,
        "question": "What is the primary difference between AI and ML?",
        "options": {
          "A": "AI is a subset of ML",
          "B": "ML is a subset of AI",
          "C": "They are completely unrelated fields",
          "D": "AI and ML are the same thing"
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 17,
        "question": "Which of the following is NOT a type of machine learning?",
        "options": {
          "A": "Supervised learning",
          "B": "Unsupervised learning",
          "C": "Reinforcement learning",
          "D": "Diagnostic learning"
        },
        "correct": [
          "D"
        ],
        "multiple": false
      },
      {
        "number": 18,
        "question": "What type of data is most suitable for training a computer vision model?",
        "options": {
          "A": "Tabular data",
          "B": "Time-series data",
          "C": "Image data",
          "D": "Text data"
        },
        "correct": [
          "C"
        ],
        "multiple": false
      },
      {
        "number": 19,
        "question": "Which AWS service is best suited for natural language processing tasks?",
        "options": {
          "A": "Amazon SageMaker",
          "B": "Amazon Comprehend",
          "C": "Amazon Polly",
          "D": "Amazon Transcribe"
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 20,
        "question": "What is the primary purpose of exploratory data analysis (EDA) in the ML development lifecycle?",
        "options": {
          "A": "To train the model",
          "B": "To deploy the model",
          "C": "To understand the characteristics of the data",
          "D": "To monitor the model in production"
        },
        "correct": [
          "C"
        ],
        "multiple": false
      },
      {
        "number": 21,
        "question": "Which of the following is NOT a typical stage in an ML pipeline?",
        "options": {
          "A": "Data collection",
          "B": "Feature engineering",
          "C": "Model training",
          "D": "Customer acquisition"
        },
        "correct": [
          "D"
        ],
        "multiple": false
      },
      {
        "number": 22,
        "question": "What does AUC stand for in the context of model performance metrics?",
        "options": {
          "A": "Average User Cost",
          "B": "Area Under the Curve",
          "C": "Automated Universal Calculation",
          "D": "Augmented Use Case"
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 23,
        "question": "Which type of learning is most appropriate when you have a large dataset of labeled examples?",
        "options": {
          "A": "Unsupervised learning",
          "B": "Reinforcement learning",
          "C": "Supervised learning",
          "D": "Semi-supervised learning"
        },
        "correct": [
          "C"
        ],
        "multiple": false
      },
      {
        "number": 24,
        "question": "What is the main advantage of using pre-trained models?",
        "options": {
          "A": "They always perform better than custom models",
          "B": "They require less computational resources to train",
          "C": "They are always more accurate",
          "D": "They can be used immediately without any training data"
        },
        "correct": [
          "D"
        ],
        "multiple": false
      },
      {
        "number": 25,
        "question": "Which AWS service is best suited for automating the process of identifying the best hyperparameters for a model?",
        "options": {
          "A": "Amazon SageMaker Autopilot",
          "B": "Amazon Comprehend",
          "C": "Amazon Polly",
          "D": "Amazon Transcribe"
        },
        "correct": [
          "A"
        ],
        "multiple": false
      },
      {
        "number": 26,
        "question": "What does MLOps stand for?",
        "options": {
          "A": "Machine Learning Operations",
          "B": "Multiple Learning Optimizations",
          "C": "Model Learning Objectives",
          "D": "Managed Learning Outputs"
        },
        "correct": [
          "A"
        ],
        "multiple": false
      },
      {
        "number": 27,
        "question": "Which of the following is NOT a typical business metric for evaluating ML models?",
        "options": {
          "A": "Cost per user",
          "B": "Development costs",
          "C": "Customer feedback",
          "D": "F1 score"
        },
        "correct": [
          "D"
        ],
        "multiple": false
      },
      {
        "number": 28,
        "question": "Which of the following are considered business metrics for AI model evaluation? (Choose 2)",
        "options": {
          "A": "Precision score",
          "B": "Customer satisfaction score",
          "C": "Mean Average Precision",
          "D": "Time-to-value",
          "E": "Root Mean Square Error"
        },
        "correct": [
          "B",
          "A",
          "D",
          "D"
        ],
        "multiple": true
      },
      {
        "number": 29,
        "question": "When evaluating an AI solution\u2019s success, what types of metrics should be considered? (Choose 2)",
        "options": {
          "A": "Only technical performance metrics",
          "B": "Return on Investment (ROI)",
          "C": "Only user feedback",
          "D": "Model inference latency",
          "E": "Impact on business processes"
        },
        "correct": [
          "B",
          "A",
          "D",
          "E"
        ],
        "multiple": true
      },
      {
        "number": 30,
        "question": "What type of learning is most appropriate when you want an agent to learn from its interactions with an environment?",
        "options": {
          "A": "Supervised learning",
          "B": "Unsupervised learning",
          "C": "Reinforcement learning",
          "D": "Transfer learning"
        },
        "correct": [
          "C"
        ],
        "multiple": false
      },
      {
        "number": 31,
        "question": "Which AWS service is best suited for converting text to speech?",
        "options": {
          "A": "Amazon Comprehend",
          "B": "Amazon Translate",
          "C": "Amazon Transcribe",
          "D": "Amazon Polly"
        },
        "correct": [
          "D"
        ],
        "multiple": false
      },
      {
        "number": 32,
        "question": "What is the primary purpose of feature engineering in the ML development lifecycle?",
        "options": {
          "A": "To collect more data",
          "B": "To create new features or transform existing ones to improve model performance",
          "C": "To evaluate the model\u2019s performance",
          "D": "To deploy the model to production"
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 33,
        "question": "Which of the following is an example of unsupervised learning?",
        "options": {
          "A": "Spam detection",
          "B": "Image classification",
          "C": "Clustering customer segments",
          "D": "Predicting house prices"
        },
        "correct": [
          "C"
        ],
        "multiple": false
      },
      {
        "number": 34,
        "question": "What is the main difference between batch inferencing and real-time inferencing?",
        "options": {
          "A": "Batch inferencing is always more accurate",
          "B": "Real-time inferencing can only be done on small datasets",
          "C": "Batch inferencing processes multiple inputs at once, while real-time inferencing processes individual inputs as they arrive",
          "D": "Real-time inferencing is always faster than batch inferencing"
        },
        "correct": [
          "C"
        ],
        "multiple": false
      },
      {
        "number": 35,
        "question": "Which AWS service is best suited for managing the entire machine learning lifecycle?",
        "options": {
          "A": "Amazon Comprehend",
          "B": "Amazon SageMaker",
          "C": "Amazon Polly",
          "D": "Amazon Translate"
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 36,
        "question": "What is the primary purpose of model monitoring in production?",
        "options": {
          "A": "To train new models",
          "B": "To collect more data",
          "C": "To detect issues like model drift or data drift",
          "D": "To perform feature engineering"
        },
        "correct": [
          "C"
        ],
        "multiple": false
      },
      {
        "number": 37,
        "question": "Which of the following is NOT a typical use case for AI/ML?",
        "options": {
          "A": "Fraud detection",
          "B": "Recommendation systems",
          "C": "Manual data entry",
          "D": "Speech recognition"
        },
        "correct": [
          "C"
        ],
        "multiple": false
      },
      {
        "number": 38,
        "question": "What is a token in the context of generative AI?",
        "options": {
          "A": "A security feature",
          "B": "A unit of text processed by the model",
          "C": "A type of neural network",
          "D": "A model evaluation metric"
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 39,
        "question": "Which of the following is NOT a typical use case for generative AI models?",
        "options": {
          "A": "Image generation",
          "B": "Summarization",
          "C": "Data encryption",
          "D": "Code generation"
        },
        "correct": [
          "C"
        ],
        "multiple": false
      },
      {
        "number": 40,
        "question": "What is the primary advantage of generative AI\u2019s adaptability?",
        "options": {
          "A": "It can only work with structured data",
          "B": "It can handle a wide range of tasks and domains",
          "C": "It always produces perfect results",
          "D": "It eliminates the need for human oversight"
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 41,
        "question": "What is a hallucination in the context of generative AI?",
        "options": {
          "A": "A visual output produced by the model",
          "B": "A type of model architecture",
          "C": "An incorrect or fabricated output presented as fact",
          "D": "A method of model training"
        },
        "correct": [
          "C"
        ],
        "multiple": false
      },
      {
        "number": 42,
        "question": "Which AWS service is designed specifically for developing generative AI applications?",
        "options": {
          "A": "Amazon EC2",
          "B": "Amazon S3",
          "C": "Amazon Bedrock",
          "D": "Amazon RDS"
        },
        "correct": [
          "C"
        ],
        "multiple": false
      },
      {
        "number": 43,
        "question": "What is a foundation model in generative AI?",
        "options": {
          "A": "A model that can only generate text",
          "B": "A large, pre-trained model that can be adapted for various tasks",
          "C": "A model specifically designed for image generation",
          "D": "A model that requires no training data"
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 44,
        "question": "Which of the following is NOT a stage in the foundation model lifecycle?",
        "options": {
          "A": "Data selection",
          "B": "Pre-training",
          "C": "Deployment",
          "D": "Marketing"
        },
        "correct": [
          "D"
        ],
        "multiple": false
      },
      {
        "number": 45,
        "question": "What is the primary advantage of using AWS generative AI services for building applications?",
        "options": {
          "A": "They are always free",
          "B": "They provide a lower barrier to entry",
          "C": "They guarantee 100% accuracy",
          "D": "They eliminate the need for any coding"
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 46,
        "question": "What is prompt engineering in the context of generative AI?",
        "options": {
          "A": "A method of hardware optimization",
          "B": "A technique for designing the physical structure of AI models",
          "C": "The process of crafting effective input prompts to guide model outputs",
          "D": "A way to reduce energy consumption in AI systems"
        },
        "correct": [
          "C"
        ],
        "multiple": false
      },
      {
        "number": 47,
        "question": "Which of the following is a potential disadvantage of generative AI solutions?",
        "options": {
          "A": "Adaptability",
          "B": "Responsiveness",
          "C": "Inaccuracy",
          "D": "Simplicity"
        },
        "correct": [
          "C"
        ],
        "multiple": false
      },
      {
        "number": 48,
        "question": "What is the difference between zero-shot, one-shot, and few-shot learning in generative AI?",
        "options": {
          "A": "They refer to different model architectures",
          "B": "They refer to the number of examples provided in the prompt",
          "C": "They refer to different training datasets",
          "D": "They refer to different inference speeds"
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 49,
        "question": "Which AWS services can be used for document analysis and information extraction? (Choose 2)",
        "options": {
          "A": "Amazon Textract",
          "B": "Amazon Comprehend",
          "C": "Amazon Polly",
          "D": "Amazon Translate",
          "E": "Amazon Transcribe"
        },
        "correct": [
          "A",
          "B"
        ],
        "multiple": true
      },
      {
        "number": 50,
        "question": "What is the purpose of Amazon SageMaker Model Monitor?",
        "options": {
          "A": "To train models faster",
          "B": "To detect data drift and model performance degradation",
          "C": "To serve models for inference",
          "D": "To create training datasets"
        },
        "correct": [
          "B"
        ],
        "multiple": false
      }
    ]
  }
];
