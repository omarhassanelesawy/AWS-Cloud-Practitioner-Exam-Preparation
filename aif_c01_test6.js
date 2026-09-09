const AWS_AIF_C01_TEST_6_DATA = [
  {
    "examNumber": "AIF-C01-6",
    "title": "AWS Certified AI Practitioner - Practice Test 6",
    "totalQuestions": 50,
    "source": "https://notezio.com/aws-certified-ai-practitioner/practice-test/practice-test-6/",
    "questions": [
      {
        "number": 1,
        "question": "A design company is using a foundation model (FM) on Amazon Bedrock to generate images for various projects. The company wants to have control over how detailed or abstract each generated image appears Which model parameter should the company modify?",
        "options": {
          "A": "Model checkpoint",
          "B": "Batch size",
          "C": "Generation step",
          "D": "Token length"
        },
        "correct": [
          "C"
        ],
        "multiple": false
      },
      {
        "number": 2,
        "question": "A financial company has offices in different countries worldwide. The company requires that all API calls between generative AI applications and foundation models (FM) must not travel across the public internet. Which AWS service should the company use?",
        "options": {
          "A": "AWS PrivateLink",
          "B": "Amazon Q",
          "C": "Amazon CloudFront",
          "D": "AWS CloudTrail"
        },
        "correct": [
          "A"
        ],
        "multiple": false
      },
      {
        "number": 3,
        "question": "An ecommerce company is deploying a chatbot. The chatbot will give users the ability to ask questions about the company\u2019s products and receive details on users\u2019 orders. The company must implement safeguards for the chatbot to filter harmful content from the input prompts and chatbot responses. Which AWS feature or resource meets these requirements?",
        "options": {
          "A": "Amazon Bedrock Guardrails",
          "B": "Amazon Bedrock Agents",
          "C": "Amazon Bedrock inference APIs",
          "D": "Amazon Bedrock custom models"
        },
        "correct": [
          "A"
        ],
        "multiple": false
      },
      {
        "number": 4,
        "question": "A company wants to learn about generative AI applications in an experimental environment. Which solution will meet this requirement MOST cost-effectively?",
        "options": {
          "A": "Amazon Q Developer",
          "B": "Amazon SageMaker JumpStart",
          "C": "Amazon Bedrock PartyRock",
          "D": "Amazon Q Business"
        },
        "correct": [
          "C"
        ],
        "multiple": false
      },
      {
        "number": 5,
        "question": "A company needs to collect a large dataset to train an AI assistant in a specific content area. Which dataset will meet this requirement?",
        "options": {
          "A": "Diverse conversations that use relevant terminology",
          "B": "Time series data of general purpose historical sales",
          "C": "Sentiment analysis of news articles",
          "D": "Unique product IDs and corresponding user IDs"
        },
        "correct": [
          "A"
        ],
        "multiple": false
      },
      {
        "number": 6,
        "question": "A financial company is developing a generative AI application for loan approval decisions. The company needs the application output to be responsible and fair. Which solution meets these requirements?",
        "options": {
          "A": "Review the training data to check for biases. Include data from all demographics in the training data.",
          "B": "Use a deep learning model with many hidden layers.",
          "C": "Keep the model\u2019s decision-making process a secret to protect proprietary algorithms.",
          "D": "Continuously monitor the model\u2019s performance on a static test dataset"
        },
        "correct": [
          "A"
        ],
        "multiple": false
      },
      {
        "number": 7,
        "question": "An AI practitioner who has minimal ML knowledge wants to predict employee attrition without writing code. Which Amazon SageMaker feature meets this requirement?",
        "options": {
          "A": "SageMaker Canvas",
          "B": "SageMaker Clarify",
          "C": "SageMaker Model Monitor",
          "D": "SageMaker Data Wrangler"
        },
        "correct": [
          "A"
        ],
        "multiple": false
      },
      {
        "number": 8,
        "question": "A company is using AI to improve its services. The company needs to ensure that the AI system is fair and explainable. The company wants to require training for members of the AI system development team. Which training will meet these requirements?",
        "options": {
          "A": "Training on advanced coding skills",
          "B": "Training on data privacy and encryption protocols",
          "C": "Training on bias awareness and responsible AI",
          "D": "Training on advanced ML algorithms"
        },
        "correct": [
          "C"
        ],
        "multiple": false
      },
      {
        "number": 9,
        "question": "A company has an ML model. The company wants to know how the model makes predictions. Which term refers to understanding model predictions?",
        "options": {
          "A": "Model interpretability",
          "B": "Model training",
          "C": "Model interoperability",
          "D": "Model performance"
        },
        "correct": [
          "A"
        ],
        "multiple": false
      },
      {
        "number": 10,
        "question": "A company wants to identify groups for its customers based on the customers\u2019 demographics and buying patterns. Which algorithm should the company use to meet this requirement?",
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
        "number": 11,
        "question": "A company is using an Amazon Nova Canvas model to generate images. The model generates images successfully. The company needs to prevent the model from including specific items in the generated images. Which solution will meet this requirement?",
        "options": {
          "A": "Use a higher temperature value.",
          "B": "Use a more detailed prompt.",
          "C": "Use a negative prompt.",
          "D": "Use another foundation model (FM)."
        },
        "correct": [
          "C"
        ],
        "multiple": false
      },
      {
        "number": 12,
        "question": "A company wants to label training datasets by using human feedback to fine-tune a foundation model (FM). The company does not want to develop labeling applications or manage a labeling workforce. Which AWS service or feature meets these requirements?",
        "options": {
          "A": "Amazon SageMaker Data Wrangler",
          "B": "Amazon SageMaker Ground Truth Plus",
          "C": "Amazon Transcribe",
          "D": "Amazon Macie"
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 13,
        "question": "An online media streaming company wants to give its customers the ability to perform natural languagebased image search and filtering. The company needs a vector database that can help with similarity searches and nearest neighbor queries. Which AWS service meets these requirements?",
        "options": {
          "A": "Amazon Comprehend",
          "B": "Amazon Personalize",
          "C": "Amazon Polly",
          "D": "Amazon OpenSearch Service"
        },
        "correct": [
          "D"
        ],
        "multiple": false
      },
      {
        "number": 14,
        "question": "A company is building a generative AI tool. The company will use internal documents to customize a foundation model (FM). Which approach will meet this requirement?",
        "options": {
          "A": "Classification",
          "B": "Continued pre-training",
          "C": "Distillation",
          "D": "Regression"
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 15,
        "question": "A company is monitoring a predictive model by using Amazon SageMaker Model Monitor. The company notices data drift beyond a defined threshold. The company wants to mitigate a potentially adverse impact on the predictive model. Which solution will meet these requirements?",
        "options": {
          "A": "Restart the SageMaker AI endpoint.",
          "B": "Adjust the monitoring sensitivity.",
          "C": "Re-train the model with fresh data.",
          "D": "Set up experiments tracking."
        },
        "correct": [
          "C"
        ],
        "multiple": false
      },
      {
        "number": 16,
        "question": "A financial company uses a generative AI model to assign credit limits to new customers. The company wants to make the decision-making process of the model more transparent to its customers. Which solution meets these requirements?",
        "options": {
          "A": "Use a rule-based system instead of an ML model.",
          "B": "Apply explainable AI techniques to show customers which factors influenced the model\u2019s decision.",
          "C": "Develop an interactive UI for customers and provide clear technical explanations about the system.",
          "D": "Increase the accuracy of the model to reduce the need for transparency."
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 17,
        "question": "A company deployed a model to production. After 4 months, the model inference quality degraded. The company wants to receive a notification if the model inference quality degrades. The company also wants to ensure that the problem does not happen again. Which solution will meet these requirements?",
        "options": {
          "A": "Retrain the model. Monitor model drift by using Amazon SageMaker Clarify.",
          "B": "Retrain the model. Monitor model drift by using Amazon SageMaker Model Monitor.",
          "C": "Build a new model. Monitor model drift by using Amazon SageMaker Feature Store.",
          "D": "Build a new model. Monitor model drift by using Amazon SageMaker JumpStart."
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 18,
        "question": "Which option is an example of unsupervised learning?",
        "options": {
          "A": "A model that groups customers based on their purchase history",
          "B": "A model that classifies images as dogs or cats",
          "C": "A model that predicts a house\u2019s price based on various features",
          "D": "A model that learns to play chess by using trial and error"
        },
        "correct": [
          "A"
        ],
        "multiple": false
      },
      {
        "number": 19,
        "question": "A company is evaluating several large language models (LLMs) for a text summarization task. The company needs to select a metric to evaluate the quality of the summaries that the LLMs generate. Which metric will meet this requirement?",
        "options": {
          "A": "Recall",
          "B": "Area under the ROC curve (AUC)",
          "C": "Recall-Oriented Understudy for Gisting Evaluation (ROUGE)",
          "D": "Mean squared error (MSE)"
        },
        "correct": [
          "C"
        ],
        "multiple": false
      },
      {
        "number": 20,
        "question": "A research group wants to test different generative AI models to create research papers. The research group has defined a prompt and needs a method to assess the models\u2019 output. The research group wants to use a team of scientists to perform the output assessments. Which solution will meet these requirements?",
        "options": {
          "A": "Use automatic evaluation on Amazon Personalize.",
          "B": "Use content moderation on Amazon Rekognition.",
          "C": "Use model evaluation on Amazon Bedrock.",
          "D": "Use sentiment analysis on Amazon Comprehend."
        },
        "correct": [
          "C"
        ],
        "multiple": false
      },
      {
        "number": 21,
        "question": "An AI practitioner wants to evaluate ML models. The AI practitioner wants to provide explanations of model predictions to customers and stakeholders. Which AWS service or feature will meet these requirements?",
        "options": {
          "A": "Amazon QuickSight",
          "B": "Amazon Comprehend",
          "C": "AWS Trusted Advisor",
          "D": "Amazon SageMaker Clarify"
        },
        "correct": [
          "D"
        ],
        "multiple": false
      },
      {
        "number": 22,
        "question": "Sentiment analysis is a subset of which broader field of AI?",
        "options": {
          "A": "Computer vision",
          "B": "Robotics",
          "C": "Natural language processing (NLP)",
          "D": "Time series forecasting"
        },
        "correct": [
          "C"
        ],
        "multiple": false
      },
      {
        "number": 23,
        "question": "A company wants to set up private access to Amazon Bedrock APIs from the company\u2019s AWS account. The company also wants to protect its data from internet exposure. Which solution meets these requirements?",
        "options": {
          "A": "Use Amazon CloudFront to restrict access to the company\u2019s private content.",
          "B": "Use AWS Glue to set up data encryption across the company\u2019s data catalog.",
          "C": "Use AWS Lake Formation to manage centralized data governance and cross-account data sharing.",
          "D": "Use AWS PrivateLink to configure a private connection between the company\u2019s VPC and Amazon"
        },
        "correct": [
          "D"
        ],
        "multiple": false
      },
      {
        "number": 24,
        "question": "A company receives a large amount of unstructured user feedback in text format. The company wants to analyze the sentiment of the user feedback. Which solution will meet these requirements?",
        "options": {
          "A": "Use a large language model (LLM) to perform natural language processing (NLP) for sentiment analysis",
          "B": "Use a regression algorithm to classify the feedback based on predefined categories. Then, analyze user sentiment",
          "C": "Use a recommendation engine algorithm to detect user sentiment.",
          "D": "Use a time series algorithm to predict user sentiment based on past feedback."
        },
        "correct": [
          "A"
        ],
        "multiple": false
      },
      {
        "number": 25,
        "question": "RAG improves LLMs by incorporating information from external data sources at query time. A company wants to create an AI solution to generate images and descriptions for a product catalog. The company needs to select a foundation model (FM) for this solution. The company must consider the output types of each FM. Which FM characteristic is the company evaluating?",
        "options": {
          "A": "Latency",
          "B": "Model size",
          "C": "Model customization",
          "D": "Modality"
        },
        "correct": [
          "D"
        ],
        "multiple": false
      },
      {
        "number": 26,
        "question": "A company wants to use an ML model to analyze customer reviews on social media. The model must determine if each review has a neutral, positive, or negative sentiment. Which model evaluation strategy will meet these requirements?",
        "options": {
          "A": "Open-ended generation",
          "B": "Text summarization",
          "C": "Machine translation",
          "D": "Classification"
        },
        "correct": [
          "D"
        ],
        "multiple": false
      },
      {
        "number": 27,
        "question": "Which option is an example of unsupervised learning?",
        "options": {
          "A": "Clustering data points into groups based on their similarity",
          "B": "Training a model to recognize images of animals",
          "C": "Predicting the price of a house based on the house\u2019s features",
          "D": "Generating human-like text based on a given prompt"
        },
        "correct": [
          "A"
        ],
        "multiple": false
      },
      {
        "number": 28,
        "question": "An online learning company with large volumes of education materials wants to use enterprise search. Which AWS service meets these requirements?",
        "options": {
          "A": "Amazon Comprehend",
          "B": "Amazon Textract",
          "C": "Amazon Kendra",
          "D": "Amazon Personalize"
        },
        "correct": [
          "C"
        ],
        "multiple": false
      },
      {
        "number": 29,
        "question": "A company creates video content. The company wants to use generative AI to generate new creative content and to reduce video creation time. Which solution will meet these requirements in the MOST operationally efficient way?",
        "options": {
          "A": "Use the Amazon Titan Image Generator model on Amazon Bedrock to generate intermediate images. Use video editing software to create videos.",
          "B": "Use the Amazon Nova Canvas model on Amazon Bedrock to generate intermediate images. Use video editing software to create videos.",
          "C": "Use the Amazon Nova Reel model on Amazon Bedrock to generate videos.",
          "D": "Use the Amazon Nova Pro model on Amazon Bedrock to generate videos."
        },
        "correct": [
          "C"
        ],
        "multiple": false
      },
      {
        "number": 30,
        "question": "A company is training ML models on datasets. The datasets contain some classes that have more examples than other classes. The company wants to measure how well the model balances detecting and labeling the classes. Which metric should the company use?",
        "options": {
          "A": "Accuracy",
          "B": "Recall",
          "C": "Precision",
          "D": "F1 score"
        },
        "correct": [
          "D"
        ],
        "multiple": false
      },
      {
        "number": 31,
        "question": "A company is analyzing financial transaction records. The company categorizes the records as either personal or business. The company inserts the categories into the transaction records. Which data preparation step does this describe?",
        "options": {
          "A": "Data encoding",
          "B": "Data labeling",
          "C": "Data normalization",
          "D": "Data balancing"
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 32,
        "question": "A company wants to extract key insights from large policy documents to increase employee efficiency. Which generative AI strategy meets this requirement?",
        "options": {
          "A": "Regression",
          "B": "Clustering",
          "C": "Summarization",
          "D": "Classification"
        },
        "correct": [
          "C"
        ],
        "multiple": false
      },
      {
        "number": 33,
        "question": "A company is using Amazon SageMaker to deploy a model that identifies if social media posts contain certain topics. The company needs to show how different input features influence model behavior. Which SageMaker feature meets these requirements?",
        "options": {
          "A": "SageMaker Canvas",
          "B": "SageMaker Clarify",
          "C": "SageMaker Feature Store",
          "D": "SageMaker Ground Truth"
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 34,
        "question": "A company wants to assess internet quality in remote areas of the world. The company needs to collect internet speed data and store the data in Amazon RDS. The company will analyze internet speed variation throughout each day. The company wants to create an AI model to predict potential internet disruptions. Which type of data should the company collect for this task?",
        "options": {
          "A": "Tabular data",
          "B": "Text data",
          "C": "Time series data",
          "D": "Audio data"
        },
        "correct": [
          "C"
        ],
        "multiple": false
      },
      {
        "number": 35,
        "question": "A company wants to build an ML model to detect abnormal patterns in sensor data. The company does not have labeled data for training. Which ML method will meet these requirements?",
        "options": {
          "A": "Linear regression",
          "B": "Classification",
          "C": "Decision tree",
          "D": "Autoencoders"
        },
        "correct": [
          "D"
        ],
        "multiple": false
      },
      {
        "number": 36,
        "question": "A company uses Amazon Bedrock to implement a generative AI assistant on a website. The AI assistant helps customers with product recommendations and purchasing decisions. The company wants to measure the direct impact of the AI assistant on sales performance. Which metric will meet these requirements?",
        "options": {
          "A": "The conversion rate of customers who purchase products after AI assistant interactions.",
          "B": "The number of customer interactions with the AI assistant",
          "C": "Sentiment analysis scores from customer feedback after AI assistant interactions",
          "D": "Natural language understanding accuracy rates"
        },
        "correct": [
          "A"
        ],
        "multiple": false
      },
      {
        "number": 37,
        "question": "Which AWS service or feature stores embeddings in a vector database for use with foundation models (FMs) and Retrieval Augmented Generation (RAG)?",
        "options": {
          "A": "Amazon SageMaker Ground Truth",
          "B": "Amazon OpenSearch Service",
          "C": "Amazon Transcribe",
          "D": "Amazon Textract"
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 38,
        "question": "Which scenario represents a practical use case for generative AI?",
        "options": {
          "A": "Using an ML model to forecast product demand",
          "B": "Employing a chatbot to provide human-like responses to customer queries in real time",
          "C": "Using an analytics dashboard to track website traffic and user behavior",
          "D": "Implementing a rule-based recommendation engine to suggest products to customers"
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 39,
        "question": "A company is using Amazon Bedrock for a generative AI solution. The solution must integrate a service with vector database storage and vector search capabilities. Which AWS service will meet these requirements?",
        "options": {
          "A": "Amazon DynamoDB",
          "B": "Amazon OpenSearch Service",
          "C": "Amazon ElastiCache",
          "D": "Amazon Redshift"
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 40,
        "question": "A media streaming platform wants to provide movie recommendations to users based on the users\u2019 account history. Which AWS service meets these requirements?",
        "options": {
          "A": "Amazon Polly",
          "B": "Amazon Comprehend",
          "C": "Amazon Transcribe",
          "D": "Amazon Personalize"
        },
        "correct": [
          "D"
        ],
        "multiple": false
      },
      {
        "number": 41,
        "question": "A company has developed an ML model to approve or reject loan applications. The model\u2019s decision-making process must be transparent and explainable to comply with regulatory requirements. The company must document the decision-making process for audit purposes. Which solution will meet these requirements?",
        "options": {
          "A": "Amazon Textract",
          "B": "Amazon SageMaker Model Card",
          "C": "AWS Cloud Formation",
          "D": "Amazon Comprehend"
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 42,
        "question": "Which considerations are important when designing prompts for generative AI? (Choose 2)",
        "options": {
          "A": "Providing clear context and instructions",
          "B": "Using as many words as possible",
          "C": "Including relevant examples when helpful",
          "D": "Always using technical jargon",
          "E": "Making prompts as vague as possible"
        },
        "correct": [
          "A",
          "C"
        ],
        "multiple": true
      },
      {
        "number": 43,
        "question": "What is the primary benefit of using Amazon SageMaker JumpStart?",
        "options": {
          "A": "To reduce inference costs",
          "B": "To access pre-trained models and solutions",
          "C": "To automatically label data",
          "D": "To monitor model performance"
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 44,
        "question": "Which factors should be considered when implementing MLOps practices? (Choose 2)",
        "options": {
          "A": "Model versioning and reproducibility",
          "B": "Automated testing and validation",
          "C": "Using only cloud-based services",
          "D": "Minimizing documentation",
          "E": "Avoiding monitoring in production"
        },
        "correct": [
          "A",
          "B"
        ],
        "multiple": true
      },
      {
        "number": 45,
        "question": "What is the purpose of embeddings in machine learning?",
        "options": {
          "A": "To compress images",
          "B": "To represent data as dense numerical vectors",
          "C": "To encrypt sensitive information",
          "D": "To reduce training time"
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 46,
        "question": "Which Amazon Bedrock features help with content filtering and safety? (Choose 2)",
        "options": {
          "A": "Guardrails for content filtering",
          "B": "Model customization options",
          "C": "Prompt management capabilities",
          "D": "Watermark detection for AI-generated content",
          "E": "Knowledge base integration"
        },
        "correct": [
          "A",
          "D"
        ],
        "multiple": true
      },
      {
        "number": 47,
        "question": "What is the difference between discriminative and generative AI models?",
        "options": {
          "A": "Discriminative models are faster than generative models",
          "B": "Discriminative models classify/predict, generative models create new content",
          "C": "Discriminative models are more accurate than generative models",
          "D": "Discriminative models require more data than generative models"
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 48,
        "question": "Which metrics are commonly used to evaluate generative AI model performance? (Choose 2)",
        "options": {
          "A": "BLEU score for translation quality",
          "B": "CPU utilization",
          "C": "ROUGE score for summarization quality",
          "D": "Network latency",
          "E": "Storage capacity"
        },
        "correct": [
          "A",
          "C"
        ],
        "multiple": true
      },
      {
        "number": 49,
        "question": "What is the primary purpose of Amazon Q for Business?",
        "options": {
          "A": "To train custom ML models",
          "B": "To provide AI-powered business intelligence and assistance",
          "C": "To store large datasets",
          "D": "To monitor infrastructure"
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 50,
        "question": "Which capabilities of Amazon OpenSearch Service are most relevant for AI/ML workloads? (Choose 2)",
        "options": {
          "A": "Vector similarity search with k-NN",
          "B": "Website hosting",
          "C": "Vector database functionality",
          "D": "Email processing",
          "E": "Log analysis"
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
