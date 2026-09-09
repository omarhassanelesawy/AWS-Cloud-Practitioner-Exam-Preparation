const AWS_AIF_C01_TEST_4_DATA = [
  {
    "examNumber": "AIF-C01-4",
    "title": "AWS Certified AI Practitioner - Practice Test 4",
    "totalQuestions": 50,
    "source": "https://notezio.com/aws-certified-ai-practitioner/practice-test/practice-test-4/",
    "questions": [
      {
        "number": 1,
        "question": "A company wants to identify harmful language in the comments section of social media posts by using an ML model. The company will not use labeled data to train the model. Which strategy should the company use to identify harmful language?",
        "options": {
          "A": "Use Amazon Rekognition moderation.",
          "B": "Use Amazon Comprehend toxicity detection.",
          "C": "Use Amazon SageMaker built-in algorithms to train the model.",
          "D": "Use Amazon Polly to monitor comments."
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 2,
        "question": "A media company wants to analyze viewer behavior and demographics to recommend personalized content. The company wants to deploy a customized ML model in its production environment. The company also wants to observe if the model quality drifts over time. Which AWS service or feature meets these requirements?",
        "options": {
          "A": "Amazon Rekognition",
          "B": "Amazon SageMaker Clarify",
          "C": "Amazon Comprehend",
          "D": "Amazon SageMaker Model Monitor"
        },
        "correct": [
          "D"
        ],
        "multiple": false
      },
      {
        "number": 3,
        "question": "A company is deploying AI/ML models by using AWS services. The company wants to offer transparency into the models\u2019 decision-making processes and provide explanations for the model outputs. Which AWS service or feature meets these requirements?",
        "options": {
          "A": "Amazon SageMaker Model Cards",
          "B": "Amazon Rekognition",
          "C": "Amazon Comprehend",
          "D": "Amazon Lex"
        },
        "correct": [
          "A"
        ],
        "multiple": false
      },
      {
        "number": 4,
        "question": "A manufacturing company wants to create product descriptions in multiple languages. Which AWS service will automate this task?",
        "options": {
          "A": "Amazon Translate",
          "B": "Amazon Transcribe",
          "C": "Amazon Kendra",
          "D": "Amazon Polly"
        },
        "correct": [
          "A"
        ],
        "multiple": false
      },
      {
        "number": 5,
        "question": "Which AWS feature records details about ML instance data for governance and reporting?",
        "options": {
          "A": "Amazon SageMaker Model Cards",
          "B": "Amazon SageMaker Debugger",
          "C": "Amazon SageMaker Model Monitor",
          "D": "Amazon SageMaker JumpStart"
        },
        "correct": [
          "A"
        ],
        "multiple": false
      },
      {
        "number": 6,
        "question": "A financial company is using ML to help with some of the company\u2019s tasks. Which option is a use of generative AI models?",
        "options": {
          "A": "Summarizing customer complaints",
          "B": "Classifying customers based on product usage",
          "C": "Segmenting customers based on type of investments",
          "D": "Forecasting revenue for certain products"
        },
        "correct": [
          "A"
        ],
        "multiple": false
      },
      {
        "number": 7,
        "question": "A medical company wants to develop an AI application that can access structured patient records, extract relevant information, and generate concise summaries. Which solution will meet these requirements?",
        "options": {
          "A": "Use Amazon Comprehend Medical to extract relevant medical entities and relationships. Apply rulebased logic to structure and format summaries.",
          "B": "Use Amazon Personalize to analyze patient engagement patterns. Integrate the output with a general",
          "C": "Use Amazon Textract to convert scanned documents into digital text. Design a keyword extraction",
          "D": "Implement Amazon Kendra to provide a searchable index for medical records. Use a template-based"
        },
        "correct": [
          "A"
        ],
        "multiple": false
      },
      {
        "number": 8,
        "question": "Which option describes embeddings in the context of AI?",
        "options": {
          "A": "A method for compressing large datasets",
          "B": "An encryption method for securing sensitive data",
          "C": "A method for visualizing high-dimensional data",
          "D": "A numerical method for data representation in a reduced dimensionality space"
        },
        "correct": [
          "D"
        ],
        "multiple": false
      },
      {
        "number": 9,
        "question": "A company is building an AI application to summarize books of varying lengths. During testing, the application fails to summarize some books. Why does the application fail to summarize some books?",
        "options": {
          "A": "The temperature is set too high.",
          "B": "The selected model does not support fine-tuning.",
          "C": "The Top P value is too high.",
          "D": "The input tokens exceed the model\u2019s context size."
        },
        "correct": [
          "D"
        ],
        "multiple": false
      },
      {
        "number": 10,
        "question": "An airline company wants to build a conversational AI assistant to answer customer questions about flight schedules, booking, and payments. The company wants to use large language models (LLMs) and a knowledge base to create a text-based chatbot interface. Which solution will meet these requirements with the LEAST development effort?",
        "options": {
          "A": "Train models on Amazon SageMaker Autopilot.",
          "B": "Develop a Retrieval Augmented Generation (RAG) agent by using Amazon Bedrock.",
          "C": "Create a Python application by using Amazon Q Developer.",
          "D": "Fine-tune models on Amazon SageMaker Jumpstart."
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 11,
        "question": "What is tokenization used for in natural language processing (NLP)?",
        "options": {
          "A": "To encrypt text data",
          "B": "To compress text files",
          "C": "To break text into smaller units for processing",
          "D": "To translate text between languages"
        },
        "correct": [
          "C"
        ],
        "multiple": false
      },
      {
        "number": 12,
        "question": "Which option is a characteristic of transformer-based language models?",
        "options": {
          "A": "Transformer-based language models use convolutional layers to apply filters across an input to capture local patterns through filtered views.",
          "B": "Transformer-based language models can process only text data.",
          "C": "Transformer-based language models use self-attention mechanisms to capture contextual relationships.",
          "D": "Transformer-based language models process data sequences one element at a time in cyclic iterations."
        },
        "correct": [
          "C"
        ],
        "multiple": false
      },
      {
        "number": 13,
        "question": "A financial company is using AI systems to obtain customer credit scores as part of the loan application process. The company wants to expand to a new market in a different geographic area. The company must ensure that it can operate in that geographic area. Which compliance laws should the company review?",
        "options": {
          "A": "Local health data protection laws",
          "B": "Local payment card data protection laws",
          "C": "Local education privacy laws",
          "D": "Local algorithm accountability laws"
        },
        "correct": [
          "D"
        ],
        "multiple": false
      },
      {
        "number": 14,
        "question": "A company uses Amazon Bedrock for its generative AI application. The company wants to use Amazon Bedrock Guardrails to detect and filter harmful user inputs and model-generated outputs. Which content categories can the guardrails filter? (Choose two.)",
        "options": {
          "A": "Hate",
          "B": "Politics",
          "C": "Violence",
          "D": "Gambling"
        },
        "correct": [
          "A",
          "C"
        ],
        "multiple": true
      },
      {
        "number": 15,
        "question": "Which scenario describes a potential risk and limitation of prompt engineering in the context of a generative AI model?",
        "options": {
          "A": "Prompt engineering does not ensure that the model always produces consistent and deterministic outputs, eliminating the need for validation.",
          "B": "Prompt engineering could expose the model to vulnerabilities such as prompt injection attacks.",
          "C": "Properly designed prompts reduce but do not eliminate the risk of data poisoning or model hijacking.",
          "D": "Prompt engineering does not ensure that the model will consistently generate highly reliable outputs when working with real-world data."
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 16,
        "question": "A publishing company built a Retrieval Augmented Generation (RAG) based solution to give its users the ability to interact with published content. New content is published daily. The company wants to provide a near real-time experience to users. Which steps in the RAG pipeline should the company implement by using offline batch processing to meet these requirements? (Choose two.)",
        "options": {
          "A": "Generation of content embeddings",
          "B": "Generation of embeddings for user queries",
          "C": "Creation of the search index",
          "D": "Retrieval of relevant content"
        },
        "correct": [
          "A",
          "C"
        ],
        "multiple": true
      },
      {
        "number": 17,
        "question": "Which technique breaks a complex task into smaller subtasks that are sent sequentially to a large language model (LLM)?",
        "options": {
          "A": "One-shot prompting",
          "B": "Prompt chaining",
          "C": "Tree of thoughts",
          "D": "Retrieval Augmented Generation (RAG)"
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 18,
        "question": "An AI practitioner needs to improve the accuracy of a natural language generation model. The model uses rapidly changing inventory data. Which technique will improve the model\u2019s accuracy?",
        "options": {
          "A": "Transfer learning",
          "B": "Federated learning",
          "C": "Retrieval Augmented Generation (RAG)",
          "D": "One-shot prompting"
        },
        "correct": [
          "C"
        ],
        "multiple": false
      },
      {
        "number": 19,
        "question": "A company wants to collaborate with several research institutes to develop an AI model. The company needs standardized documentation of model version tracking and a record of model development. Which solution meets these requirements?",
        "options": {
          "A": "Track the model changes by using Git.",
          "B": "Track the model changes by using Amazon Fraud Detector.",
          "C": "Track the model changes by using Amazon SageMaker Model Cards.",
          "D": "Track the model changes by using Amazon Comprehend."
        },
        "correct": [
          "C"
        ],
        "multiple": false
      },
      {
        "number": 20,
        "question": "A company that uses multiple ML models wants to identify changes in original model quality so that the company can resolve any issues. Which AWS service or feature meets these requirements?",
        "options": {
          "A": "Amazon SageMaker JumpStart",
          "B": "Amazon SageMaker HyperPod",
          "C": "Amazon SageMaker Data Wrangler",
          "D": "Amazon SageMaker Model Monitor"
        },
        "correct": [
          "D"
        ],
        "multiple": false
      },
      {
        "number": 21,
        "question": "What is the purpose of chunking in Retrieval Augmented Generation (RAG)?",
        "options": {
          "A": "To avoid database storage limitations for large text documents by storing parts or chunks of the text",
          "B": "To improve efficiency by avoiding the need to convert large text into vector embeddings",
          "C": "To improve the contextual relevancy of results retrieved from the vector index",
          "D": "To decrease the cost of storage by storing parts or chunks of the text"
        },
        "correct": [
          "C"
        ],
        "multiple": false
      },
      {
        "number": 22,
        "question": "A company is developing an editorial assistant application that uses generative AI. During the pilot phase, usage is low and application performance is not a concern. The company cannot predict application usage after the application is fully deployed and wants to minimize application costs. Which solution will meet these requirements?",
        "options": {
          "A": "Use GPU-powered Amazon EC2 instances.",
          "B": "Use Amazon Bedrock with Provisioned Throughput.",
          "C": "Use Amazon Bedrock with On-Demand Throughput.",
          "D": "Use Amazon SageMaker JumpStart."
        },
        "correct": [
          "C"
        ],
        "multiple": false
      },
      {
        "number": 23,
        "question": "A company deployed a Retrieval Augmented Generation (RAG) application on Amazon Bedrock that gathers financial news to distribute in daily newsletters. Users have recently reported politically influenced ideas in the newsletters. Which Amazon Bedrock guardrail can identify and filter this content?",
        "options": {
          "A": "Word filters",
          "B": "Denied topics",
          "C": "Sensitive information filters",
          "D": "Content filters"
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 24,
        "question": "A financial company is developing a fraud detection system that flags potential fraud cases in credit card transactions. Employees will evaluate the flagged fraud cases. The company wants to minimize the amount of time the employees spend reviewing flagged fraud cases that are not actually fraudulent. Which evaluation metric meets these requirements?",
        "options": {
          "A": "Recall",
          "B": "Accuracy",
          "C": "Precision",
          "D": "Lift chart"
        },
        "correct": [
          "C"
        ],
        "multiple": false
      },
      {
        "number": 25,
        "question": "A company designed an AI-powered agent to answer customer inquiries based on product manuals. Which strategy can improve customer confidence levels in the AI-powered agent\u2019s responses?",
        "options": {
          "A": "Writing the confidence level in the response",
          "B": "Including referenced product manual links in the response",
          "C": "Designing an agent avatar that looks like a computer",
          "D": "Training the agent to respond in the company\u2019s language style"
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 26,
        "question": "A hospital developed an AI system to provide personalized treatment recommendations for patients. The AI system must provide the rationale behind the recommendations and make the insights accessible to doctors and patients. Which human-centered design principle does this scenario present?",
        "options": {
          "A": "Explainability",
          "B": "Privacy and security",
          "C": "Fairness",
          "D": "Data governance"
        },
        "correct": [
          "A"
        ],
        "multiple": false
      },
      {
        "number": 27,
        "question": "Which statement presents an advantage of using Retrieval Augmented Generation (RAG) for natural language processing (NLP) tasks?",
        "options": {
          "A": "RAG can use external knowledge sources to generate more accurate and informative responses.",
          "B": "RAG is designed to improve the speed of language model training.",
          "C": "RAG is primarily used for speech recognition tasks.",
          "D": "RAG is a technique for data augmentation in computer vision tasks."
        },
        "correct": [
          "A"
        ],
        "multiple": false
      },
      {
        "number": 28,
        "question": "A company has created a custom model by fine-tuning an existing large language model (LLM) from Amazon Bedrock. The company wants to deploy the model to production and use the model to handle a steady rate of requests each minute. Which solution meets these requirements MOST cost-effectively?",
        "options": {
          "A": "Deploy the model by using an Amazon EC2 compute optimized instance.",
          "B": "Use the model with on-demand throughput on Amazon Bedrock.",
          "C": "Store the model in Amazon S3 and host the model by using AWS Lambda.",
          "D": "Purchase Provisioned Throughput for the model on Amazon Bedrock."
        },
        "correct": [
          "D"
        ],
        "multiple": false
      },
      {
        "number": 29,
        "question": "Which technique involves training AI models on labeled datasets to adapt the models to specific industry terminology and requirements?",
        "options": {
          "A": "Data augmentation",
          "B": "Fine-tuning",
          "C": "Model quantization",
          "D": "Continuous pre-training"
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 30,
        "question": "A company is creating an agent for its application by using Amazon Bedrock Agents. The agent is performing well, but the company wants to improve the agent\u2019s accuracy by providing some specific examples. Which solution meets these requirements?",
        "options": {
          "A": "Modify the advanced prompts for the agent to include the examples.",
          "B": "Create a guardrail for the agent that includes the examples.",
          "C": "Use Amazon SageMaker Ground Truth to label the examples.",
          "D": "Run a script in AWS Lambda that adds the examples to the training dataset."
        },
        "correct": [
          "A"
        ],
        "multiple": false
      },
      {
        "number": 31,
        "question": "Which option is a benefit of using infrastructure as code (IaC) in machine learning operations (MLOps)?",
        "options": {
          "A": "IaC eliminates the need for hyperparameter tuning.",
          "B": "IaC always provisions powerful compute instances, contributing to the training of more accurate models.",
          "C": "IaC streamlines the deployment of scalable and consistent ML workloads in cloud environments.",
          "D": "IaC minimizes overall expenses by deploying only low-cost instances."
        },
        "correct": [
          "C"
        ],
        "multiple": false
      },
      {
        "number": 32,
        "question": "A company wants to fine-tune a foundation model (FM) to answer questions for a specific domain. The company wants to use instruction-based fine-tuning. How should the company prepare the training data?",
        "options": {
          "A": "Gather company internal documents and industry-specific materials. Merge the documents and",
          "B": "Collect external company reviews from various online sources. Manually label each review as either",
          "C": "Create pairs of questions and answers that specifically address topics related to the company\u2019s industry",
          "D": "Create few-shot prompts to instruct the model to answer only domain knowledge."
        },
        "correct": [
          "C"
        ],
        "multiple": false
      },
      {
        "number": 33,
        "question": "Which ML technique ensures data compliance and privacy when training AI models on AWS?",
        "options": {
          "A": "Reinforcement learning",
          "B": "Transfer learning",
          "C": "Federated learning",
          "D": "Unsupervised learning"
        },
        "correct": [
          "C"
        ],
        "multiple": false
      },
      {
        "number": 34,
        "question": "A manufacturing company has an application that ingests consumer complaints from publicly available sources. The application uses complex hard-coded logic to process the complaints. The company wants to scale this logic across markets and product lines. Which advantage do generative AI models offer for this scenario?",
        "options": {
          "A": "Predictability of outputs",
          "B": "Adaptability",
          "C": "Less sensitivity to changes in inputs",
          "D": "Explainability"
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 35,
        "question": "A financial company wants to flag all credit card activity as possibly fraudulent or non-fraudulent based on transaction data. Which type of ML model meets these requirements?",
        "options": {
          "A": "Regression",
          "B": "Diffusion",
          "C": "Binary classification",
          "D": "Multi-class classification"
        },
        "correct": [
          "C"
        ],
        "multiple": false
      },
      {
        "number": 36,
        "question": "A hospital wants to use a generative AI solution with speech-to-text functionality to help improve employee skills in dictating clinical notes. Which AWS service meets these requirements?",
        "options": {
          "A": "Amazon Q Developer",
          "B": "Amazon Polly",
          "C": "Amazon Rekognition",
          "D": "AWS HealthScribe"
        },
        "correct": [
          "D"
        ],
        "multiple": false
      },
      {
        "number": 37,
        "question": "Which type of AI model makes numeric predictions?",
        "options": {
          "A": "Diffusion",
          "B": "Regression",
          "C": "Transformer",
          "D": "Multi-modal"
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 38,
        "question": "What is the purpose of vector embeddings in a large language model (LLM)?",
        "options": {
          "A": "Splitting text into manageable pieces of data",
          "B": "Grouping a set of characters to be treated as a single unit",
          "C": "Providing the ability to mathematically compare texts",
          "D": "Providing the count of every word in the input"
        },
        "correct": [
          "C"
        ],
        "multiple": false
      },
      {
        "number": 39,
        "question": "A company wants to fine-tune a foundation model (FM) by using AWS services. The company needs to ensure that its data stays private, safe, and secure in the source AWS Region where the data is stored. Which combination of steps will meet these requirements MOST cost-effectively? (Choose two.)",
        "options": {
          "A": "Host the model on premises by using AWS Outposts.",
          "B": "Use the Amazon Bedrock API.",
          "C": "Use AWS PrivateLink and a VPC.",
          "D": "Host the Amazon Bedrock API on premises."
        },
        "correct": [
          "B",
          "C"
        ],
        "multiple": true
      },
      {
        "number": 40,
        "question": "A financial company uses AWS to host its generative AI models. The company must generate reports to show adherence to international regulations for handling sensitive customer data. Which AWS service meets these requirements?",
        "options": {
          "A": "Amazon Macie",
          "B": "AWS Artifact",
          "C": "AWS Secrets Manager",
          "D": "AWS Config"
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 41,
        "question": "A medical company wants to modernize its onsite information processing application. The company wants to use generative AI to respond to medical questions from patients. Which AWS service should the company use to ensure responsible AI for the application?",
        "options": {
          "A": "Guardrails for Amazon Bedrock",
          "B": "Amazon Inspector",
          "C": "Amazon Rekognition",
          "D": "AWS Trusted Advisor"
        },
        "correct": [
          "A"
        ],
        "multiple": false
      },
      {
        "number": 42,
        "question": "Which metric is used to evaluate the performance of foundation models (FMs) for text summarization tasks?",
        "options": {
          "A": "F1 score",
          "B": "Bilingual Evaluation Understudy (BLEU) score",
          "C": "Accuracy",
          "D": "Mean squared error (MSE)"
        },
        "correct": [
          "A"
        ],
        "multiple": false
      },
      {
        "number": 43,
        "question": "What is the benefit of fine-tuning a foundation model (FM)?",
        "options": {
          "A": "Fine-tuning reduces the FM\u2019s size and complexity and enables slower inference.",
          "B": "Fine-tuning uses specific training data to retrain the FM from scratch to adapt to a specific use case.",
          "C": "Fine-tuning keeps the FM\u2019s knowledge up to date by pre-training the FM on more recent data.",
          "D": "Fine-tuning improves the performance of the FM on a specific task by further training the FM on new"
        },
        "correct": [
          "D"
        ],
        "multiple": false
      },
      {
        "number": 44,
        "question": "A company wants to improve its chatbot\u2019s responses to match the company\u2019s desired tone. The company has 100 examples of high-quality conversations between customer service agents and customers. The company wants to use this data to incorporate company tone into the chatbot\u2019s responses. Which solution meets these requirements?",
        "options": {
          "A": "Use Amazon Personalize to generate responses.",
          "B": "Create an Amazon SageMaker HyperPod pre-training job.",
          "C": "Host the model by using Amazon SageMaker. Use TensorRT for large language model (LLM)",
          "D": "Create an Amazon Bedrock fine-tuning job."
        },
        "correct": [
          "D"
        ],
        "multiple": false
      },
      {
        "number": 45,
        "question": "An ecommerce company is using a chatbot to automate the customer order submission process. The chatbot is powered by AI and is available to customers directly from the company\u2019s website 24 hours a day, 7 days a week. Which option is an AI system input vulnerability that the company needs to resolve before the chatbot is made available?",
        "options": {
          "A": "Data leakage",
          "B": "Prompt injection",
          "C": "Large language model (LLM) hallucinations",
          "D": "Concept drift"
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 46,
        "question": "A social media company wants to prevent users from posting discriminatory content on the company\u2019s application. The company wants to use Amazon Bedrock as part of the solution. How can the company use Amazon Bedrock to meet these requirements?",
        "options": {
          "A": "Give users the ability to interact based on user preferences.",
          "B": "Block interactions related to predefined topics.",
          "C": "Restrict user conversations to predefined topics.",
          "D": "Provide a variety of responses to select from for user engagement."
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 47,
        "question": "Which statements about model latent space are correct? (Choose 2)",
        "options": {
          "A": "It represents the model\u2019s internal understanding of relationships",
          "B": "It is only used for image processing",
          "C": "It enables semantic similarities between different inputs",
          "D": "It requires human supervision to maintain",
          "E": "It must be stored in a specific database type"
        },
        "correct": [
          "A",
          "C"
        ],
        "multiple": true
      },
      {
        "number": 48,
        "question": "What are the primary use cases for storing embeddings in a vector database like Amazon OpenSearch Service? (Choose 2)",
        "options": {
          "A": "Semantic search implementation",
          "B": "Website content management",
          "C": "Similarity-based recommendations",
          "D": "Email routing",
          "E": "Network traffic analysis"
        },
        "correct": [
          "A",
          "C"
        ],
        "multiple": true
      },
      {
        "number": 49,
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
        "number": 50,
        "question": "Which features of Amazon Aurora with pgvector are most important for AI applications? (Choose 2)",
        "options": {
          "A": "Vector similarity search capabilities",
          "B": "Traditional SQL operations",
          "C": "Integration with structured data",
          "D": "Web hosting features",
          "E": "Email processing"
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
