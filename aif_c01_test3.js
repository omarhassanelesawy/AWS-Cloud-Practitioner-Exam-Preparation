const AWS_AIF_C01_TEST_3_DATA = [
  {
    "examNumber": "AIF-C01-3",
    "title": "AWS Certified AI Practitioner - Practice Test 3",
    "totalQuestions": 46,
    "source": "https://notezio.com/aws-certified-ai-practitioner/practice-test/practice-test-3/",
    "questions": [
      {
        "number": 1,
        "question": "A company is developing an ML model to make loan approvals. The company must implement a solution to detect bias in the model. The company must also be able to explain the model\u2019s predictions. Which solution will meet these requirements?",
        "options": {
          "A": "Amazon SageMaker Clarify",
          "B": "Amazon SageMaker Data Wrangler",
          "C": "Amazon SageMaker Model Cards",
          "D": "AWS AI Service Cards"
        },
        "correct": [
          "A"
        ],
        "multiple": false
      },
      {
        "number": 2,
        "question": "A company has developed a generative text summarization model by using Amazon Bedrock. The company will use Amazon Bedrock automatic model evaluation capabilities. Which metric should the company use to evaluate the accuracy of the model?",
        "options": {
          "A": "Area Under the ROC Curve (AUC) score",
          "B": "F1 score",
          "C": "BERTScore",
          "D": "Real world knowledge (RWK) score"
        },
        "correct": [
          "C"
        ],
        "multiple": false
      },
      {
        "number": 3,
        "question": "An AI practitioner wants to predict the classification of flowers based on petal length, petal width, sepal length, and sepal width. Which algorithm meets these requirements?",
        "options": {
          "A": "K-nearest neighbors (k-NN)",
          "B": "K-mean",
          "C": "Autoregressive Integrated Moving Average (ARIMA)",
          "D": "Linear regression"
        },
        "correct": [
          "A"
        ],
        "multiple": false
      },
      {
        "number": 4,
        "question": "A company is using custom models in Amazon Bedrock for a generative AI application. The company wants to use a company managed encryption key to encrypt the model artifacts that the model customization jobs create. Which AWS service meets these requirements?",
        "options": {
          "A": "AWS Key Management Service (AWS KMS)",
          "B": "Amazon Inspector",
          "C": "Amazon Macie",
          "D": "AWS Secrets Manager"
        },
        "correct": [
          "A"
        ],
        "multiple": false
      },
      {
        "number": 5,
        "question": "A company wants to use large language models (LLMs) to produce code from natural language code comments. Which LLM feature meets these requirements?",
        "options": {
          "A": "Text summarization",
          "B": "Text generation",
          "C": "Text completion",
          "D": "Text classification"
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 6,
        "question": "A company is introducing a mobile app that helps users learn foreign languages. The app makes text more coherent by calling a large language model (LLM). The company collected a diverse dataset of text and supplemented the dataset with examples of more readable versions. The company wants the LLM output to resemble the provided examples. Which metric should the company use to assess whether the LLM meets these requirements?",
        "options": {
          "A": "Value of the loss function",
          "B": "Semantic robustness",
          "C": "Recall-Oriented Understudy for Gisting Evaluation (ROUGE) score",
          "D": "Latency of the text generation"
        },
        "correct": [
          "C"
        ],
        "multiple": false
      },
      {
        "number": 7,
        "question": "A company notices that its foundation model (FM) generates images that are unrelated to the prompts. The company wants to modify the prompt techniques to decrease unrelated images. Which solution meets these requirements?",
        "options": {
          "A": "Use zero-shot prompts.",
          "B": "Use negative prompts.",
          "C": "Use positive prompts.",
          "D": "Use ambiguous prompts."
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 8,
        "question": "A company wants to use a large language model (LLM) to generate concise, feature-specific descriptions for the company\u2019s products. Which prompt engineering technique meets these requirements?",
        "options": {
          "A": "Create one prompt that covers all products. Edit the responses to make the responses more specific, concise, and tailored to each product.",
          "B": "Create prompts for each product category that highlight the key features. Include the desired output format and length for each prompt response.",
          "C": "Include a diverse range of product features in each prompt to generate creative and unique descriptions.",
          "D": "Provide detailed, product-specific prompts to ensure precise and customized descriptions."
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 9,
        "question": "A company is developing an ML model to predict customer churn. The model performs well on the training dataset but does not accurately predict churn for new data. Which solution will resolve this issue?",
        "options": {
          "A": "Decrease the regularization parameter to increase model complexity.",
          "B": "Increase the regularization parameter to decrease model complexity.",
          "C": "Add more features to the input data.",
          "D": "Train the model for more epochs."
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 10,
        "question": "A company is implementing intelligent agents to provide conversational search experiences for its customers. The company needs a database service that will support storage and queries of embeddings from a generative AI model as vectors in the database. Which AWS service will meet these requirements?",
        "options": {
          "A": "Amazon Athena",
          "B": "Amazon Aurora PostgreSQL",
          "C": "Amazon Redshift",
          "D": "Amazon EMR"
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 11,
        "question": "A financial institution is building an AI solution to make loan approval decisions by using a foundation model (FM). For security and audit purposes, the company needs the AI solution\u2019s decisions to be explainable. Which factor relates to the explainability of the AI solution\u2019s decisions?",
        "options": {
          "A": "Model complexity",
          "B": "Training time",
          "C": "Number of hyperparameters",
          "D": "Deployment time"
        },
        "correct": [
          "A"
        ],
        "multiple": false
      },
      {
        "number": 12,
        "question": "A pharmaceutical company wants to analyze user reviews of new medications and provide a concise overview for each medication. Which solution meets these requirements?",
        "options": {
          "A": "Create a time-series forecasting model to analyze the medication reviews by using Amazon Personalize.",
          "B": "Create medication review summaries by using Amazon Bedrock large language models (LLMs).",
          "C": "Create a classification model that categorizes medications into different groups by using Amazon",
          "D": "Create medication review summaries by using Amazon Rekognition."
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 13,
        "question": "A company wants to build a lead prioritization application for its employees to contact potential customers. The application must give employees the ability to view and adjust the weights assigned to different variables in the model based on domain knowledge and expertise. Which ML model type meets these requirements?",
        "options": {
          "A": "Logistic regression model",
          "B": "Deep learning model built on principal components",
          "C": "K-nearest neighbors (k-NN) model",
          "D": "Neural network"
        },
        "correct": [
          "A"
        ],
        "multiple": false
      },
      {
        "number": 14,
        "question": "Which strategy will determine if a foundation model (FM) effectively meets business objectives?",
        "options": {
          "A": "Evaluate the model\u2019s performance on benchmark datasets.",
          "B": "Analyze the model\u2019s architecture and hyperparameters.",
          "C": "Assess the model\u2019s alignment with specific use cases.",
          "D": "Measure the computational resources required for model deployment."
        },
        "correct": [
          "C"
        ],
        "multiple": false
      },
      {
        "number": 15,
        "question": "A company needs to train an ML model to classify images of different types of animals. The company has a large dataset of labeled images and will not label more data. Which type of learning should the company use to train the model?",
        "options": {
          "A": "Supervised learning",
          "B": "Unsupervised learning",
          "C": "Reinforcement learning",
          "D": "Active learning"
        },
        "correct": [
          "A"
        ],
        "multiple": false
      },
      {
        "number": 16,
        "question": "Which phase of the ML lifecycle determines compliance and regulatory requirements?",
        "options": {
          "A": "Feature engineering",
          "B": "Model training",
          "C": "Data collection",
          "D": "Business goal identification"
        },
        "correct": [
          "C"
        ],
        "multiple": false
      },
      {
        "number": 17,
        "question": "A food service company wants to develop an ML model to help decrease daily food waste and increase sales revenue. The company needs to continuously improve the model\u2019s accuracy. Which solution meets these requirements?",
        "options": {
          "A": "Use Amazon SageMaker and iterate with newer data.",
          "B": "Use Amazon Personalize and iterate with historical data.",
          "C": "Use Amazon CloudWatch to analyze customer orders.",
          "D": "Use Amazon Rekognition to optimize the model."
        },
        "correct": [
          "A"
        ],
        "multiple": false
      },
      {
        "number": 18,
        "question": "A company has developed an ML model to predict real estate sale prices. The company wants to deploy the model to make predictions without managing servers or infrastructure. Which solution meets these requirements?",
        "options": {
          "A": "Deploy the model on an Amazon EC2 instance.",
          "B": "Deploy the model on an Amazon Elastic Kubernetes Service (Amazon EKS) cluster.",
          "C": "Deploy the model by using Amazon CloudFront with an Amazon S3 integration.",
          "D": "Deploy the model by using an Amazon SageMaker endpoint."
        },
        "correct": [
          "D"
        ],
        "multiple": false
      },
      {
        "number": 19,
        "question": "A company wants to develop an AI application to help its employees check open customer claims, identify details for a specific claim, and access documents for a claim. Which solution meets these requirements?",
        "options": {
          "A": "Use Agents for Amazon Bedrock with Amazon Fraud Detector to build the application.",
          "B": "Use Agents for Amazon Bedrock with Amazon Bedrock knowledge bases to build the application.",
          "C": "Use Amazon Personalize with Amazon Bedrock knowledge bases to build the application.",
          "D": "Use Amazon SageMaker to build the application by training a new ML model."
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 20,
        "question": "A manufacturing company uses AI to inspect products and find any damages or defects. Which type of AI application is the company using?",
        "options": {
          "A": "Recommendation system",
          "B": "Natural language processing (NLP)",
          "C": "Computer vision",
          "D": "Image processing"
        },
        "correct": [
          "C"
        ],
        "multiple": false
      },
      {
        "number": 21,
        "question": "A company wants to create an ML model to predict customer satisfaction. The company needs fully automated model tuning. IT meets these requirements? Which AWS service",
        "options": {
          "A": "Amazon Personalize",
          "B": "Amazon SageMaker",
          "C": "Amazon Athena",
          "D": "Amazon Comprehend"
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 22,
        "question": "Which technique can a company use to lower bias and toxicity in generative AI applications during the postprocessing ML lifecycle?",
        "options": {
          "A": "Human-in-the-loop",
          "B": "Data augmentation",
          "C": "Feature engineering",
          "D": "Adversarial training"
        },
        "correct": [
          "A"
        ],
        "multiple": false
      },
      {
        "number": 23,
        "question": "A bank has fine-tuned a large language model (LLM) to expedite the loan approval process. During an external audit of the model, the company discovered that the model was approving loans at a faster pace for a specific demographic than for other demographics. How should the bank fix this issue MOST cost-effectively?",
        "options": {
          "A": "Include more diverse training data. Fine-tune the model again by using the new data.",
          "B": "Use Retrieval Augmented Generation (RAG) with the fine-tuned model.",
          "C": "Use AWS Trusted Advisor checks to eliminate bias.",
          "D": "Pre-train a new LLM with more diverse training data."
        },
        "correct": [
          "A"
        ],
        "multiple": false
      },
      {
        "number": 24,
        "question": "A company needs to log all requests made to its Amazon Bedrock API. The company must retain the logs securely for 5 years at the lowest possible cost. Which combination of AWS service and storage class meets these requirements? (Choose 2)",
        "options": {
          "A": "AWS CloudTrail",
          "B": "Amazon CloudWatch",
          "C": "AWS Audit Manager",
          "D": "Amazon S3 Intelligent-Tiering",
          "E": "Amazon S3 Standard"
        },
        "correct": [
          "A",
          "D"
        ],
        "multiple": true
      },
      {
        "number": 25,
        "question": "An ecommerce company wants to improve search engine recommendations by customizing the results for each user of the company\u2019s ecommerce platform. Which AWS service meets these requirements?",
        "options": {
          "A": "Amazon Personalize",
          "B": "Amazon Kendra",
          "C": "Amazon Rekognition",
          "D": "Amazon Transcribe"
        },
        "correct": [
          "A"
        ],
        "multiple": false
      },
      {
        "number": 26,
        "question": "A hospital is developing an AI system to assist doctors in diagnosing diseases based on patient records and medical images. To comply with regulations, the sensitive patient data must not leave the country the data is located in. Which data governance strategy will ensure compliance and protect patient privacy?",
        "options": {
          "A": "Data residency",
          "B": "Data quality",
          "C": "Data discoverability",
          "D": "Data enrichment"
        },
        "correct": [
          "A"
        ],
        "multiple": false
      },
      {
        "number": 27,
        "question": "A company needs to monitor the performance of its ML systems by using a highly scalable AWS service. Which AWS service meets these requirements?",
        "options": {
          "A": "Amazon CloudWatch",
          "B": "AWS CloudTrail",
          "C": "AWS Trusted Advisor",
          "D": "AWS Config"
        },
        "correct": [
          "A"
        ],
        "multiple": false
      },
      {
        "number": 28,
        "question": "An AI practitioner is developing a prompt for an Amazon Titan model. The model is hosted on Amazon Bedrock. The AI practitioner is using the model to solve numerical reasoning challenges. The AI practitioner adds the following phrase to the end of the prompt: \u201cAsk the model to show its work by explaining its reasoning step by step.\u201d Which prompt engineering technique is the AI practitioner using?",
        "options": {
          "A": "Chain-of-thought prompting",
          "B": "Prompt injection",
          "C": "Few-shot prompting",
          "D": "Prompt templating"
        },
        "correct": [
          "A"
        ],
        "multiple": false
      },
      {
        "number": 29,
        "question": "Which AWS service makes foundation models (FMs) available to help users build and scale generative AI applications?",
        "options": {
          "A": "Amazon Q Developer",
          "B": "Amazon Bedrock",
          "C": "Amazon Kendra",
          "D": "Amazon Comprehend"
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 30,
        "question": "A company is building a mobile app for users who have a visual impairment. The app must be able to hear what users say and provide voice responses. Which solution will meet these requirements?",
        "options": {
          "A": "Use a deep learning neural network to perform speech recognition.",
          "B": "Build ML models to search for patterns in numeric data.",
          "C": "Use generative AI summarization to generate human-like text.",
          "D": "Build custom models for image classification and recognition."
        },
        "correct": [
          "A"
        ],
        "multiple": false
      },
      {
        "number": 31,
        "question": "A company wants to enhance response quality for a large language model (LLM) for complex problemsolving tasks. The tasks require detailed reasoning and a step-by-step explanation process. Which prompt engineering technique meets these requirements?",
        "options": {
          "A": "Few-shot prompting",
          "B": "Zero-shot prompting",
          "C": "Directional stimulus prompting",
          "D": "Chain-of-thought prompting"
        },
        "correct": [
          "D"
        ],
        "multiple": false
      },
      {
        "number": 32,
        "question": "A company wants to keep its foundation model (FM) relevant by using the most recent data. The company wants to implement a model training strategy that includes regular updates to the FM. Which solution meets these requirements?",
        "options": {
          "A": "Batch learning",
          "B": "Continuous pre-training",
          "C": "Static training",
          "D": "Latent training"
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 33,
        "question": "Which option is a characteristic of AI governance frameworks for building trust and deploying humancentered AI technologies?",
        "options": {
          "A": "Expanding initiatives across business units to create long-term business value",
          "B": "Ensuring alignment with business standards, revenue goals, and stakeholder expectations",
          "C": "Overcoming challenges to drive business transformation and growth",
          "D": "Developing policies and guidelines for data, transparency, responsible AI, and compliance"
        },
        "correct": [
          "D"
        ],
        "multiple": false
      },
      {
        "number": 34,
        "question": "An ecommerce company is using a generative AI chatbot to respond to customer inquiries. The company wants to measure the financial effect of the chatbot on the company\u2019s operations. Which metric should the company use?",
        "options": {
          "A": "Number of customer inquiries handled",
          "B": "Cost of training AI models",
          "C": "Cost for each customer conversation",
          "D": "Average handled time (AHT)"
        },
        "correct": [
          "C"
        ],
        "multiple": false
      },
      {
        "number": 35,
        "question": "A company wants to find groups for its customers based on the customers\u2019 demographics and buying patterns. Which algorithm should the company use to meet this requirement?",
        "options": {
          "A": "K-nearest neighbors (k-NN)",
          "B": "K-means",
          "C": "Decision tree",
          "D": "Support vector machine"
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 36,
        "question": "A company\u2019s large language model (LLM) is experiencing hallucinations. How can the company decrease hallucinations?",
        "options": {
          "A": "Set up Agents for Amazon Bedrock to supervise the model training.",
          "B": "Use data pre-processing and remove any data that causes hallucinations.",
          "C": "Decrease the temperature inference parameter for the model.",
          "D": "Use a foundation model (FM) that is trained to not hallucinate."
        },
        "correct": [
          "C"
        ],
        "multiple": false
      },
      {
        "number": 37,
        "question": "A company is using a large language model (LLM) on Amazon Bedrock to build a chatbot. The chatbot processes customer support requests. To resolve a request, the customer and the chatbot must interact a few times. Which solution gives the LLM the ability to use content from previous customer messages?",
        "options": {
          "A": "Turn on model invocation logging to collect messages.",
          "B": "Add messages to the model prompt.",
          "C": "Use Amazon Personalize to save conversation history.",
          "D": "Use Provisioned Throughput for the LLM."
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 38,
        "question": "A company\u2019s employees provide product descriptions and recommendations to customers when customers call the customer service center. These recommendations are based on where the customers are located. The company wants to use foundation models (FMs) to automate this process. Which AWS service meets these requirements?",
        "options": {
          "A": "Amazon Macie",
          "B": "Amazon Transcribe",
          "C": "Amazon Bedrock",
          "D": "Amazon Textract"
        },
        "correct": [
          "C"
        ],
        "multiple": false
      },
      {
        "number": 39,
        "question": "A company wants to upload customer service email messages to Amazon S3 to develop a business analysis application. The messages sometimes contain sensitive data. The company wants to receive an alert every time sensitive information is found. Which solution fully automates the sensitive information detection process with the LEAST development effort?",
        "options": {
          "A": "Configure Amazon Macie to detect sensitive information in the documents that are uploaded to Amazon",
          "B": "Use Amazon SageMaker endpoints to deploy a large language model (LLM) to redact sensitive data.",
          "C": "Develop multiple regex patterns to detect sensitive data. Expose the regex patterns on an Amazon",
          "D": "Ask the customers to avoid sharing sensitive information in their email messages."
        },
        "correct": [
          "A"
        ],
        "multiple": false
      },
      {
        "number": 40,
        "question": "How does top-p (nucleus) sampling differ from traditional temperature-based sampling?",
        "options": {
          "A": "It samples from the smallest possible token set",
          "B": "It selectively samples from tokens that sum to probability p",
          "C": "It always produces deterministic output",
          "D": "It only works with specific model architectures"
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 41,
        "question": "Which option is a benefit of using Amazon SageMaker Model Cards to document AI models?",
        "options": {
          "A": "Providing a visually appealing summary of a model\u2019s capabilities.",
          "B": "Standardizing information about a model\u2019s purpose, performance, and limitations.",
          "C": "Reducing the overall computational requirements of a model.",
          "D": "Physically storing models for archival purposes."
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 42,
        "question": "What does an F1 score measure in the context of foundation model (FM) performance?",
        "options": {
          "A": "Model precision and recall",
          "B": "Model speed in generating responses",
          "C": "Financial cost of operating the model",
          "D": "Energy efficiency of the model\u2019s computations"
        },
        "correct": [
          "A"
        ],
        "multiple": false
      },
      {
        "number": 43,
        "question": "A company deployed an AI/ML solution to help customer service agents respond to frequently asked questions. The questions can change over time. The company wants to give customer service agents the ability to ask questions and receive automatically generated answers to common customer questions. Which strategy will meet these requirements MOST cost-effectively?",
        "options": {
          "A": "Fine-tune the model regularly.",
          "B": "Train the model by using context data.",
          "C": "Pre-train and benchmark the model by using context data.",
          "D": "Use Retrieval Augmented Generation (RAG) with prompt engineering techniques."
        },
        "correct": [
          "D"
        ],
        "multiple": false
      },
      {
        "number": 44,
        "question": "A company built an AI-powered resume screening system. The company used a large dataset to train the model. The dataset contained resumes that were not representative of all demographics. Which core dimension of responsible AI does this scenario present?",
        "options": {
          "A": "Fairness",
          "B": "Explainability",
          "C": "Privacy and security",
          "D": "Transparency"
        },
        "correct": [
          "A"
        ],
        "multiple": false
      },
      {
        "number": 45,
        "question": "A global financial company has developed an ML application to analyze stock market data and provide stock market trends. The company wants to continuously monitor the application development phases and to ensure that company policies and industry regulations are followed. Which AWS services will help the company assess compliance requirements? (Choose 2)",
        "options": {
          "A": "AWS Audit Manager",
          "B": "AWS Config",
          "C": "Amazon Inspector",
          "D": "Amazon CloudWatch",
          "E": "AWS CloudTrail"
        },
        "correct": [
          "A",
          "B"
        ],
        "multiple": true
      },
      {
        "number": 46,
        "question": "A company wants to improve the accuracy of the responses from a generative AI application. The application uses a foundation model (FM) on Amazon Bedrock. Which solution meets these requirements MOST cost-effectively?",
        "options": {
          "A": "Fine-tune the FM.",
          "B": "Retrain the FM.",
          "C": "Train a new FM.",
          "D": "Use prompt engineering."
        },
        "correct": [
          "D"
        ],
        "multiple": false
      }
    ]
  }
];
