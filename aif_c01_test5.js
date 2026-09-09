const AWS_AIF_C01_TEST_5_DATA = [
  {
    "examNumber": "AIF-C01-5",
    "title": "AWS Certified AI Practitioner - Practice Test 5",
    "totalQuestions": 50,
    "source": "https://notezio.com/aws-certified-ai-practitioner/practice-test/practice-test-5/",
    "questions": [
      {
        "number": 1,
        "question": "An education company waftion. The application will give users the ability to enter text or provide a picture of a question. The application will respond with a written answer and an explanation of the written answer.",
        "options": {
          "A": "Computer vision model",
          "B": "Large multi-modal language model",
          "C": "Diffusion model",
          "D": "Text-to-speech model"
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 2,
        "question": "In which stage of the generative AI model lifecycle are tests performed to examine the model\u2019s accuracy?",
        "options": {
          "A": "Deployment",
          "B": "Data selection",
          "C": "Fine-tuning",
          "D": "Evaluation"
        },
        "correct": [
          "D"
        ],
        "multiple": false
      },
      {
        "number": 3,
        "question": "Which statement correctly describes embeddings in generative AI?",
        "options": {
          "A": "Embeddings represent data as high-dimensional vectors that capture semantic relationships.",
          "B": "Embeddings is a technique that searches data to find the most helpful information to answer natural language questions.",
          "C": "Embeddings reduce the hardware requirements of a model by using a less precise data type for the weights and activations.",
          "D": "Embeddings provide the ability to store and retrieve data for generative AI applications."
        },
        "correct": [
          "A"
        ],
        "multiple": false
      },
      {
        "number": 4,
        "question": "A company wants to add generative AI functionality to its application by integrating a large language model (LLM). The responses from the LLM must be as deterministic and as stable as possible. Which solution meets these requirements?",
        "options": {
          "A": "Configure the application to automatically set the temperature parameter to 0 when submitting the prompt to the LLM.",
          "B": "Configure the application to automatically add \u201cmake your response deterministic\u201d at the end of the prompt before submitting the prompt to the LLM.",
          "C": "Configure the application to automatically add \u201cmake your response deterministic\u201d at the beginning of the prompt before submitting the prompt to the LLM.",
          "D": "Configure the application to automatically set the temperature parameter to 1 when submitting the prompt to the LLM."
        },
        "correct": [
          "A"
        ],
        "multiple": false
      },
      {
        "number": 5,
        "question": "A company needs to select a generative AI model to build an application. The application must provide responses to users in real time. Which model characteristic should the company consider to meet these requirements?",
        "options": {
          "A": "Model complexity",
          "B": "Innovation speed",
          "C": "Inference speed",
          "D": "Training time"
        },
        "correct": [
          "C"
        ],
        "multiple": false
      },
      {
        "number": 6,
        "question": "Which term refers to the instructions given to foundation models (FMs) so that the FMs provide a more accurate response to a question?",
        "options": {
          "A": "Prompt",
          "B": "Direction",
          "C": "Dialog",
          "D": "Translation"
        },
        "correct": [
          "A"
        ],
        "multiple": false
      },
      {
        "number": 7,
        "question": "A retail company wants to build an ML model to recommend products to customers. The company wants to build the model based on responsible practices. Which practice should the company apply when collecting data to decrease model bias?",
        "options": {
          "A": "Use data from",
          "B": "Collect data from customers",
          "C": "Ensure that the data is",
          "D": "Ensure that the data is from a"
        },
        "correct": [
          "C"
        ],
        "multiple": false
      },
      {
        "number": 8,
        "question": "A company is developing an ML model to predict customer churn. Which evaluation metric will assess the model\u2019s performance on a binary classification task such as predicting churn?",
        "options": {
          "A": "F1 score",
          "B": "Mean squared error (MSE)",
          "C": "R-squared",
          "D": "Time used to train the model"
        },
        "correct": [
          "A"
        ],
        "multiple": false
      },
      {
        "number": 9,
        "question": "An AI practitioner is evaluating the performance of an Amazon SageMaker model. The AI practitioner must choose a performance metric. The metric must show the ratio of the number of correctly classified items to the total number of correctly and incorrectly classified items. Which metric meets these requirements?",
        "options": {
          "A": "Accuracy",
          "B": "Precision",
          "C": "F1 score",
          "D": "Recall"
        },
        "correct": [
          "A"
        ],
        "multiple": false
      },
      {
        "number": 10,
        "question": "An ecommerce company receives multiple gigabytes of customer data daily. The company uses the data to train an ML model to forecast future product demand. The company needs a solution to perform inferences once each day. Which inference type meets these requirements?",
        "options": {
          "A": "Batch inference",
          "B": "Asynchronous inference",
          "C": "Real-time inference",
          "D": "Serverless inference"
        },
        "correct": [
          "A"
        ],
        "multiple": false
      },
      {
        "number": 11,
        "question": "A company has developed a generative AI model for customer segmentation. The model has been deployed in the company\u2019s production environment for a long time. The company recently noticed some inconsistency in the model\u2019s responses. The company wants to evaluate model bias and drift. Which AWS service or feature meets these requirements?",
        "options": {
          "A": "Amazon SageMaker Model Monitor",
          "B": "Amazon SageMaker Clarify",
          "C": "Amazon SageMaker Model Cards",
          "D": "Amazon SageMaker Feature Store"
        },
        "correct": [
          "A"
        ],
        "multiple": false
      },
      {
        "number": 12,
        "question": "A company has signed up for Amazon Bedrock access to build applications. The company wants to restrict employee access to specific models available on Amazon Bedrock. Which solution meets these requirements?",
        "options": {
          "A": "Use AWS Identity and Access Management (IAM) policies to restrict model access.",
          "B": "Use AWS Security Token Service (AWS STS) to generate temporary credentials for model use.",
          "C": "Use AWS Identity and Access Management (IAM) service roles to restrict model subscription.",
          "D": "Use Amazon Inspector to monitor model access."
        },
        "correct": [
          "A"
        ],
        "multiple": false
      },
      {
        "number": 13,
        "question": "Which ML technique uses training data that is labeled with the correct output values?",
        "options": {
          "A": "Supervised learning",
          "B": "Unsupervised learning",
          "C": "Reinforcement learning",
          "D": "Transfer learning"
        },
        "correct": [
          "A"
        ],
        "multiple": false
      },
      {
        "number": 14,
        "question": "Which large language model (LLM) parameter controls the number of possible next words or tokens considered at each step of the text generation process?",
        "options": {
          "A": "Maximum tokens",
          "B": "Top K",
          "C": "Temperature",
          "D": "Batch size"
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 15,
        "question": "A company is making a chatbot. The chatbot uses Amazon Lex and Amazon OpenSearch Service. The chatbot uses the company\u2019s private data to answer questions. The company needs to convert the data into a vector representation before storing the data in a database. Which type of foundation model (FM) meets these requirements?",
        "options": {
          "A": "Text completion model",
          "B": "Instruction following model",
          "C": "Text embeddings model",
          "D": "Image generation model"
        },
        "correct": [
          "C"
        ],
        "multiple": false
      },
      {
        "number": 16,
        "question": "A company wants to use a large language model (LLM) to generate product descriptions. The company wants to give the model example descriptions that follow a format. Which prompt engineering technique will generate descriptions that match the format?",
        "options": {
          "A": "Zero-shot prompting",
          "B": "Chain-of-thought prompting",
          "C": "One-shot prompting",
          "D": "Few-shot prompting"
        },
        "correct": [
          "D"
        ],
        "multiple": false
      },
      {
        "number": 17,
        "question": "A bank is fine-tuning a large language model (LLM) on Amazon Bedrock to assist customers with questions about their loans. The bank wants to ensure that the model does not reveal any private customer data. Which solution meets these requirements?",
        "options": {
          "A": "Use Amazon Bedrock Guardrails.",
          "B": "Remove personally identifiable information (PII) from the customer data before fine-tuning the LLM.",
          "C": "Increase the Top-K parameter of the LLM.",
          "D": "Store customer data in Amazon S3. Encrypt the data before fine-tuning the LLM."
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 18,
        "question": "A grocery store wants to create a chatbot to help customers find products in the store. The chatbot must check the inventory in real time and provide the product location in the store. Which prompt engineering technique should the store use to build the chatbot?",
        "options": {
          "A": "Zero-shot prompting",
          "B": "Few-shot prompting",
          "C": "Least-to-most prompting",
          "D": "Reasoning and acting (ReAct) prompting"
        },
        "correct": [
          "D"
        ],
        "multiple": false
      },
      {
        "number": 19,
        "question": "A company uses a third-party model on Amazon Bedrock to analyze confidential documents. The company is concerned about data privacy. Which statement describes how Amazon Bedrock protects data privacy?",
        "options": {
          "A": "User inputs and model outputs are anonymized and shared with third-party model providers.",
          "B": "User inputs and model outputs are not shared with any third-party model providers.",
          "C": "User inputs are kept confidential, but model outputs are shared with third-party model providers.",
          "D": "User inputs and model outputs are redacted before the inputs and outputs are shared with third-party"
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 20,
        "question": "An animation company wants to provide subtitles for its content. Which AWS service meets this requirement?",
        "options": {
          "A": "Amazon Comprehend",
          "B": "Amazon Polly",
          "C": "Amazon Transcribe",
          "D": "Amazon Translate"
        },
        "correct": [
          "C"
        ],
        "multiple": false
      },
      {
        "number": 21,
        "question": "An ecommerce company wants to group customers based on their purchase history and preferences to personalize the user experience of the company\u2019s application. Which ML technique should the company use?",
        "options": {
          "A": "Classification",
          "B": "Clustering",
          "C": "Regression",
          "D": "Content generation"
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 22,
        "question": "A company wants to control employee access to publicly available foundation models (FMs). Which solution meets these requirements?",
        "options": {
          "A": "Analyze cost and usage reports in AWS Cost Explorer.",
          "B": "Download AWS security and compliance documents from AWS Artifact.",
          "C": "Configure Amazon SageMaker JumpStart to restrict discoverable FMs.",
          "D": "Build a hybrid search solution by using Amazon OpenSearch Service."
        },
        "correct": [
          "C"
        ],
        "multiple": false
      },
      {
        "number": 23,
        "question": "A company has set up a translation tool to help its customer service team handle issues from customers around the world. The company wants to evaluate the performance of the translation tool. The company sets up a parallel data process that compares the responses from the tool to responses from actual humans. Both sets of responses are generated on the same set of documents. Which strategy should the company use to evaluate the translation tool?",
        "options": {
          "A": "Use the Bilingual Evaluation Understudy (BLEU) score to estimate the absolute translation quality of the two methods.",
          "B": "Use the Bilingual Evaluation Understudy (BLEU) score to estimate the relative translation quality of the two methods.",
          "C": "Use the BERTScore to estimate the absolute translation quality of the two methods.",
          "D": "Use the BERTScore to estimate the relative translation quality of the two methods."
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 24,
        "question": "An AI practitioner wants to generate more diverse and more creative outputs from a large language model (LLM). How should the AI practitioner adjust the inference parameter?",
        "options": {
          "A": "Increase the temperature value.",
          "B": "Decrease the Top K value.",
          "C": "Increase the response length.",
          "D": "Decrease the prompt length."
        },
        "correct": [
          "A"
        ],
        "multiple": false
      },
      {
        "number": 25,
        "question": "A company has developed custom computer vision models. The company needs a user-friendly interface for data labeling to minimize model mistakes on new real-world data. Which AWS service, feature, or tool meets these requirements?",
        "options": {
          "A": "Amazon SageMaker Ground Truth",
          "B": "Amazon SageMaker Canvas",
          "C": "Amazon Bedrock playground",
          "D": "Amazon Bedrock Agents"
        },
        "correct": [
          "A"
        ],
        "multiple": false
      },
      {
        "number": 26,
        "question": "A company is integrating AI into its employee recruitment and hiring solution. The company wants to mitigate bias risks and ensure responsible AI practices while prioritizing equitable hiring decisions. Which core dimensions of responsible AI should the company consider? (Choose two.)",
        "options": {
          "A": "Fairness",
          "B": "Tolerance",
          "C": "Flexibility",
          "D": "Open source",
          "E": "Transparency"
        },
        "correct": [
          "A",
          "E"
        ],
        "multiple": true
      },
      {
        "number": 27,
        "question": "A financial company has deployed an ML model to predict customer churn. The model has been running in production for 1 week. The company wants to evaluate how accurately the model predicts churn compared to actual customer behavior. Which metric meets these requirements?",
        "options": {
          "A": "Root mean squared error (RMSE)",
          "B": "Return on investment (ROI)",
          "C": "F1 score",
          "D": "Bilingual Evaluation Understudy (BLEU) score"
        },
        "correct": [
          "C"
        ],
        "multiple": false
      },
      {
        "number": 28,
        "question": "A company has a generative AI application that uses a pre-trained foundation model (FM) on Amazon Bedrock. The company wants the FM to include more context by using company information. Which solution meets these requirements MOST cost-effectively?",
        "options": {
          "A": "Use Amazon Bedrock Knowledge Bases.",
          "B": "Choose a different FM on Amazon Bedrock.",
          "C": "Use Amazon Bedrock Agents.",
          "D": "Deploy a custom model on Amazon Bedrock."
        },
        "correct": [
          "A"
        ],
        "multiple": false
      },
      {
        "number": 29,
        "question": "A food service company wants to collect a dataset to predict customer food preferences. The company wants to ensure that the food preferences of all demographics are included in the data. Which dataset characteristic does this scenario present?",
        "options": {
          "A": "Accuracy",
          "B": "Diversity",
          "C": "Recency bias",
          "D": "Reliability"
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 30,
        "question": "A company wants to create a chatbot that answers questions about human resources policies. The company is using a large language model (LLM) and has a large digital documentation base. Which technique should the company use to optimize the generated responses?",
        "options": {
          "A": "Use Retrieval Augmented Generation (RAG).",
          "B": "Use few-shot prompting.",
          "C": "Set the temperature to 1.",
          "D": "Decrease the token size."
        },
        "correct": [
          "A"
        ],
        "multiple": false
      },
      {
        "number": 31,
        "question": "An education company is building a chatbot whose target audience is teenagers. The company is training a custom large language model (LLM). The company wants the chatbot to speak in the target audience\u2019s language style by using creative spelling and shortened words. Which metric will assess the LLM\u2019s performance?",
        "options": {
          "A": "F1 score",
          "B": "BERTScore",
          "C": "Recall-Oriented Understudy for Gisting Evaluation (ROUGE)",
          "D": "Bilingual Evaluation Understudy (BLEU) score"
        },
        "correct": [
          "D"
        ],
        "multiple": false
      },
      {
        "number": 32,
        "question": "A customer service team is developing an application to analyze customer feedback and automatically classify the feedback into different categories. The categories include product quality, customer service, and delivery experience. Which AI concept does this scenario present?",
        "options": {
          "A": "Computer vision",
          "B": "Natural language processing (NLP)",
          "C": "Recommendation systems",
          "D": "Fraud detection"
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 33,
        "question": "A financial services company must ensure that its generative AI-powered chatbot provides factual responses for regulatory compliance. Which solution prevents the underlying foundation model (FM) from hallucinating?",
        "options": {
          "A": "Use AWS Config to query compliance metadata by using natural language.",
          "B": "Configure Amazon Bedrock Guardrails to evaluate user inputs and model responses.",
          "C": "Use Amazon Fraud Detector to detect potentially fraudulent online activities.",
          "D": "Use AWS Audit Manager to prepare IT audit and compliance reports."
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 34,
        "question": "A company has created multiple ML models. The company needs a solution for storing, managing, and versioning the models. Which AWS service or feature meets these requirements?",
        "options": {
          "A": "AWS Audit Manager",
          "B": "Amazon SageMaker Model Monitor",
          "C": "Amazon SageMaker Model Registry",
          "D": "Amazon SageMaker Canvas"
        },
        "correct": [
          "C"
        ],
        "multiple": false
      },
      {
        "number": 35,
        "question": "An AI practitioner is building an ML model. The AI practitioner wants to provide model transparency and explainability to stakeholders. Which solution will meet these requirements?",
        "options": {
          "A": "Present the model Shapley values.",
          "B": "Provide the model accuracy measure.",
          "C": "Provide the model confusion matrix.",
          "D": "Provide a secure model inference endpoint."
        },
        "correct": [
          "A"
        ],
        "multiple": false
      },
      {
        "number": 36,
        "question": "A company is developing an ML application. The application must automatically group similar customers and products based on their characteristics. Which ML strategy should the company use to meet these requirements?",
        "options": {
          "A": "Unsupervised learning",
          "B": "Supervised learning",
          "C": "Reinforcement learning",
          "D": "Semi-supervised learning"
        },
        "correct": [
          "A"
        ],
        "multiple": false
      },
      {
        "number": 37,
        "question": "A news agency publishes articles in English. The agency wants to make articles available in other languages. Which solution meets these requirements?",
        "options": {
          "A": "Add Amazon Transcribe to the company\u2019s website.",
          "B": "Use the Amazon Translate real-time translation feature.",
          "C": "Add Amazon Personalize to the company\u2019s website.",
          "D": "Use the Amazon Textract real-time document processing feature."
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 38,
        "question": "A bank is building a chatbot to answer customer questions about opening a bank account. The chatbot will use public bank documents to generate responses. The company will use Amazon Bedrock and prompt engineering to improve the chatbot\u2019s responses. Which prompt engineering technique meets these requirements?",
        "options": {
          "A": "Complexity-based prompting",
          "B": "Zero-shot prompting",
          "C": "Few-shot prompting",
          "D": "Directional stimulus prompting"
        },
        "correct": [
          "C"
        ],
        "multiple": false
      },
      {
        "number": 39,
        "question": "A company wants to fine-tune an ML model that is hosted on Amazon Bedrock. The company wants to use its own sensitive data that is stored in private databases in a VPC. The data needs to stay within the company\u2019s private network. Which solution will meet these requirements?",
        "options": {
          "A": "Restrict access to Amazon Bedrock by using an AWS Identity and Access Management (IAM) service",
          "B": "Restrict access to Amazon Bedrock by using an AWS Identity and Access Management (IAM) resource",
          "C": "Use AWS PrivateLink to connect the VPC and Amazon Bedrock.",
          "D": "Use AWS Key Management Service (AWS KMS) keys to encrypt the data."
        },
        "correct": [
          "C"
        ],
        "multiple": false
      },
      {
        "number": 40,
        "question": "A documentary filmmaker wants to reach more viewers. The filmmaker wants to automatically add subtitles and voice-overs in multiple languages to their films. Which combination of steps will meet these requirements? (Choose two.)",
        "options": {
          "A": "Use Amazon Transcribe and Amazon Translate to generate subtitles in other languages.",
          "B": "Use Amazon Textract and Amazon Translate to generate subtitles in other languages.",
          "C": "Use Amazon Polly to generate voice-overs in other languages.",
          "D": "Use Amazon Translate to generate voice-overs in other languages."
        },
        "correct": [
          "A",
          "C"
        ],
        "multiple": true
      },
      {
        "number": 41,
        "question": "A company wants to create a chatbot to answer employee questions about company policies. Company policies are updated frequently. The chatbot must reflect the changes in near real time. The company wants to choose a large language model (LLM). Which solution meets these requirements?",
        "options": {
          "A": "Fine-tune an LLM on the company policy text by using Amazon SageMaker.",
          "B": "Select a foundation model (FM) from Amazon Bedrock to build an application.",
          "C": "Create a Retrieval Augmented Generation (RAG) workflow by using Amazon Bedrock Knowledge",
          "D": "Use Amazon Q Business to build a custom Q App."
        },
        "correct": [
          "C"
        ],
        "multiple": false
      },
      {
        "number": 42,
        "question": "A company is using supervised learning to train an AI model on a small labeled dataset that is specific to a target task. Which step of the foundation model (FM) lifecycle does this describe?",
        "options": {
          "A": "Fine-tuning",
          "B": "Data selection",
          "C": "Pre-training",
          "D": "Evaluation"
        },
        "correct": [
          "A"
        ],
        "multiple": false
      },
      {
        "number": 43,
        "question": "A company is introducing a new feature for its application. The feature will refine the style of output messages. The company will fine-tune a large language model (LLM) on Amazon Bedrock to implement the feature. Which type of data does the company need to meet these requirements?",
        "options": {
          "A": "Samples of only input messages",
          "B": "Samples of only output messages",
          "C": "Samples of pairs of input and output messages",
          "D": "Separate samples of input and output messages"
        },
        "correct": [
          "C"
        ],
        "multiple": false
      },
      {
        "number": 44,
        "question": "A healthcare company is building an AI solution to predict patient readmission within 30 days of patient discharge. The company has trained a model on historical patient data including medical history, demographics, and treatment specifications, to provide readmission predictions in real time. Which task describes AI model inference in this scenario?",
        "options": {
          "A": "Gather historical patient readmission data.",
          "B": "Use appropriate metrics and assess model performance.",
          "C": "Use data to identify patient patterns and correlations.",
          "D": "Use a trained model to predict patient readmission."
        },
        "correct": [
          "D"
        ],
        "multiple": false
      },
      {
        "number": 45,
        "question": "A financial company wants to build workflows for human review of ML predictions. The company wants to define confidence thresholds for its use case and adjust the thresholds over time. Which AWS service meets these requirements?",
        "options": {
          "A": "Amazon Personalize",
          "B": "Amazon Augmented AI (Amazon A2I)",
          "C": "Amazon Inspector",
          "D": "AWS Audit Manager"
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 46,
        "question": "A company wants to develop an AI assistant for employees to query internal data. Which AWS service will meet this requirement?",
        "options": {
          "A": "Amazon Rekognition",
          "B": "Amazon Textract",
          "C": "Amazon Lex",
          "D": "Amazon Q Business"
        },
        "correct": [
          "D"
        ],
        "multiple": false
      },
      {
        "number": 47,
        "question": "A company wants to build and deploy ML models on AWS without writing any code. Which AWS service or feature meets these requirements?",
        "options": {
          "A": "Amazon SageMaker Canvas",
          "B": "Amazon Rekognition",
          "C": "AWS DeepRacer",
          "D": "Amazon Comprehend"
        },
        "correct": [
          "A"
        ],
        "multiple": false
      },
      {
        "number": 48,
        "question": "What is the primary advantage of using Amazon Aurora with pgvector for AI applications?",
        "options": {
          "A": "It provides serverless computing capabilities",
          "B": "It enables vector similarity search within a relational database",
          "C": "It automatically generates AI models",
          "D": "It provides pre-trained language models"
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 49,
        "question": "Which features make Amazon Kendra most valuable for enterprise search applications? (Choose 2)",
        "options": {
          "A": "Natural language understanding",
          "B": "Website hosting capabilities",
          "C": "Semantic search functionality",
          "D": "Email server functionality",
          "E": "Network monitoring"
        },
        "correct": [
          "A",
          "C"
        ],
        "multiple": true
      },
      {
        "number": 50,
        "question": "Which parameters are commonly used for controlling the output diversity in generative AI models? (Choose 2)",
        "options": {
          "A": "Top-k sampling",
          "B": "Model size",
          "C": "Top-p (nucleus) sampling",
          "D": "Training dataset size",
          "E": "Hardware configuration"
        },
        "correct": [
          "A",
          "C"
        ],
        "multiple": true
      }
    ]
  }
];
