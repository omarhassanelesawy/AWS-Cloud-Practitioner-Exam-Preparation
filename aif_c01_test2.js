const AWS_AIF_C01_TEST_2_DATA = [
  {
    "examNumber": "AIF-C01-2",
    "title": "AWS Certified AI Practitioner - Practice Test 2",
    "totalQuestions": 50,
    "source": "https://notezio.com/aws-certified-ai-practitioner/practice-test/practice-test-2/",
    "questions": [
      {
        "number": 1,
        "question": "A company needs to choose a model from Amazon Bedrock to use internally. The company must identify a model that generates responses in a style that the company\u2019s employees prefer. What should the company do to meet these requirements?",
        "options": {
          "A": "Evaluate the models by using built-in prompt datasets.",
          "B": "Evaluate the models by using a human workforce and custom prompt datasets.",
          "C": "Use public model leaderboards to identify the model.",
          "D": "Use the model InvocationLatency runtime metrics in Amazon CloudWatch when trying models."
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 2,
        "question": "A student at a university is copying content from generative AI to write essays. Which challenge of responsible generative AI does this scenario represent?",
        "options": {
          "A": "Toxicity",
          "B": "Hallucinations",
          "C": "Plagiarism",
          "D": "Privacy"
        },
        "correct": [
          "C"
        ],
        "multiple": false
      },
      {
        "number": 3,
        "question": "A company needs to build its own large language model (LLM) based on only the company\u2019s private data. The company is concerned about the environmental effect of the training process. Which Amazon EC2 instance type has the LEAST environmental effect when training LLMs?",
        "options": {
          "A": "Amazon EC2 C series",
          "B": "Amazon EC2 G series",
          "C": "Amazon EC2 P series",
          "D": "Amazon EC2 Trn series"
        },
        "correct": [
          "D"
        ],
        "multiple": false
      },
      {
        "number": 4,
        "question": "A company wants to build an interactive application for children that generates new stories based on classic stories. The company wants to use Amazon Bedrock and needs to ensure that the results and topics are appropriate for children. Which AWS service or feature will meet these requirements?",
        "options": {
          "A": "Amazon Rekognition",
          "B": "Amazon Bedrock playgrounds",
          "C": "Guardrails for Amazon Bedrock",
          "D": "Agents for Amazon Bedrock"
        },
        "correct": [
          "C"
        ],
        "multiple": false
      },
      {
        "number": 5,
        "question": "A company is building an application that needs to generate synthetic data that is based on existing data. Which type of model can the company use to meet this requirement?",
        "options": {
          "A": "Generative adversarial network (GAN)",
          "B": "XGBoost",
          "C": "Residual neural network",
          "D": "WaveNet"
        },
        "correct": [
          "A"
        ],
        "multiple": false
      },
      {
        "number": 6,
        "question": "A digital devices company wants to predict customer demand for memory hardware. The company does not have coding experience or knowledge of ML algorithms and needs to develop a data-driven predictive model. The company needs to perform analysis on internal data and external data. Which solution will meet these requirements?",
        "options": {
          "A": "Store the data in Amazon S3. Create ML models and demand forecast predictions by using Amazon",
          "B": "Import the data into Amazon SageMaker Data Wrangler. Create ML models and demand forecast",
          "C": "Import the data into Amazon SageMaker Data Wrangler. Build ML models and demand forecast",
          "D": "Import the data into Amazon SageMaker Canvas. Build ML models and demand forecast predictions by"
        },
        "correct": [
          "D"
        ],
        "multiple": false
      },
      {
        "number": 7,
        "question": "A company has installed a security camera. The company uses an ML model to evaluate the security camera footage for potential thefts. The company has discovered that the model disproportionately flags people who are members of a specific ethnic group. Which type of bias is affecting the model output?",
        "options": {
          "A": "Measurement bias",
          "B": "Sampling bias",
          "C": "Observer bias",
          "D": "Confirmation bias"
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 8,
        "question": "A company is building a customer service chatbot. The company wants the chatbot to improve its responses by learning from past interactions and online resources. Which AI learning strategy provides this self-improvement capability?",
        "options": {
          "A": "Supervised learning with a manually curated dataset of good responses and bad responses",
          "B": "Reinforcement learning with rewards for positive customer feedback",
          "C": "Unsupervised learning to find clusters of similar customer inquiries",
          "D": "Supervised learning with a continuously updated FAQ database"
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 9,
        "question": "An AI practitioner has built a deep learning model to classify the types of materials in images. The AI practitioner now wants to measure the model performance. Which metric will help the AI practitioner evaluate the performance of the model?",
        "options": {
          "A": "Confusion matrix",
          "B": "Correlation matrix",
          "C": "R2 score",
          "D": "Mean squared error (MSE)"
        },
        "correct": [
          "A"
        ],
        "multiple": false
      },
      {
        "number": 10,
        "question": "A company has built a chatbot that can respond to natural language questions with images. The company wants to ensure that the chatbot does not return inappropriate or unwanted images. Which solution will meet these requirements?",
        "options": {
          "A": "Implement moderation APIs.",
          "B": "Retrain the model with a general public dataset.",
          "C": "Perform model validation.",
          "D": "Automate user feedback integration."
        },
        "correct": [
          "A"
        ],
        "multiple": false
      },
      {
        "number": 11,
        "question": "An AI practitioner is using an Amazon Bedrock base model to summarize session chats from the customer service department. The AI practitioner wants to store invocation logs to monitor model input and output data. Which strategy should the AI practitioner use?",
        "options": {
          "A": "Configure AWS CloudTrail as the logs destination for the model.",
          "B": "Enable model invocation logging in Amazon Bedrock.",
          "C": "Configure AWS Audit Manager as the logs destination for the model.",
          "D": "Configure model invocation logging in Amazon EventBridge."
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 12,
        "question": "A company is building an ML model to analyze archived data. The company must perform inference on large datasets that are multiple GBs in size. The company does not need to access the model predictions immediately. Which Amazon SageMaker inference option will meet these requirements?",
        "options": {
          "A": "Batch transform",
          "B": "Real-time inference",
          "C": "Serverless inference",
          "D": "Asynchronous inference"
        },
        "correct": [
          "A"
        ],
        "multiple": false
      },
      {
        "number": 13,
        "question": "Which term describes the numerical representations of real-world objects and concepts that AI and natural language processing (NLP) models use to improve understanding of textual information?",
        "options": {
          "A": "Embeddings",
          "B": "Tokens",
          "C": "Models",
          "D": "Binaries"
        },
        "correct": [
          "A"
        ],
        "multiple": false
      },
      {
        "number": 14,
        "question": "A research company implemented a chatbot by using a foundation model (FM) from Amazon Bedrock. The chatbot searches for answers to questions from a large database of research papers. After multiple prompt engineering attempts, the company notices that the FM is performing poorly because of the complex scientific terms in the research papers. How can the company improve the performance of the chatbot?",
        "options": {
          "A": "Use few-shot prompting to define how the FM can answer the questions.",
          "B": "Use domain adaptation fine-tuning to adapt the FM to complex scientific terms.",
          "C": "Change the FM inference parameters.",
          "D": "Clean the research paper data to remove complex scientific terms."
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 15,
        "question": "A company wants to use a large language model (LLM) on Amazon Bedrock for sentiment analysis. The company needs the LLM to produce more consistent responses to the same input prompt. Which adjustment to an inference parameter should the company make to meet these requirements?",
        "options": {
          "A": "Decrease the temperature value.",
          "B": "Increase the temperature value.",
          "C": "Decrease the length of output tokens.",
          "D": "Increase the maximum generation length."
        },
        "correct": [
          "A"
        ],
        "multiple": false
      },
      {
        "number": 16,
        "question": "A company wants to develop a large language model (LLM) application by using Amazon Bedrock and customer data that is uploaded to Amazon S3. The company\u2019s security policy states that each team can access data for only the team\u2019s own customers. Which solution will meet these requirements?",
        "options": {
          "A": "Create an Amazon Bedrock custom service role for each team that has access to only the team\u2019s customer data.",
          "B": "Create a custom service role that has Amazon S3 access. Ask teams to specify the customer name on each Amazon Bedrock request.",
          "C": "Redact personal data in Amazon S3. Update the S3 bucket policy to allow team access to customer data.",
          "D": "Create one Amazon Bedrock role that has full Amazon S3 access. Create IAM roles for each team that have access to only each team\u2019s customer folders."
        },
        "correct": [
          "A"
        ],
        "multiple": false
      },
      {
        "number": 17,
        "question": "A medical company deployed a disease detection model on Amazon Bedrock. To comply with privacy policies, the company wants to prevent the model from including personal patient information in its responses. The company also wants to receive notification when policy violations occur. Which solution meets these requirements?",
        "options": {
          "A": "Use Amazon Macie to scan the model\u2019s output for sensitive data and set up alerts for potential",
          "B": "Configure AWS CloudTrail to monitor the model\u2019s responses and create alerts for any detected personal",
          "C": "Use Guardrails for Amazon Bedrock to filter content. Set up Amazon CloudWatch alarms for notification",
          "D": "Implement Amazon SageMaker Model Monitor to detect data drift and receive alerts when model quality"
        },
        "correct": [
          "C"
        ],
        "multiple": false
      },
      {
        "number": 18,
        "question": "A company manually reviews all submitted resumes in PDF format. As the company grows, the company expects the volume of resumes to exceed the company\u2019s review capacity. The company needs an automated system to convert the PDF resumes into plain text format for additional processing. Which AWS service meets this requirement?",
        "options": {
          "A": "Amazon Textract",
          "B": "Amazon Personalize",
          "C": "Amazon Lex",
          "D": "Amazon Transcribe"
        },
        "correct": [
          "A"
        ],
        "multiple": false
      },
      {
        "number": 19,
        "question": "An education provider is building a question and answer application that uses a generative AI model to explain complex concepts. The education provider wants to automatically change the style of the model response depending on who is asking the question. The education provider will give the model the age range of the user who has asked the question. Which solution meets these requirements with the LEAST implementation effort?",
        "options": {
          "A": "Fine-tune the model by using additional training data that is representative of the various age ranges",
          "B": "Add a role description to the prompt context that instructs the model of the age range that the response",
          "C": "Use chain-of-thought reasoning to deduce the correct style and complexity for a response suitable for",
          "D": "Summarize the response text depending on the age of the user so that younger users receive shorter"
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 20,
        "question": "Which strategy evaluates the accuracy of a foundation model (FM) that is used in image classification tasks?",
        "options": {
          "A": "Calculate the total cost of resources used by the model.",
          "B": "Measure the model\u2019s accuracy against a predefined benchmark dataset.",
          "C": "Count the number of layers in the neural network.",
          "D": "Assess the color accuracy of images processed by the model."
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 21,
        "question": "An accounting firm wants to implement a large language model (LLM) to automate document processing. The firm must proceed responsibly to avoid potential harms. What should the firm do when developing and deploying the LLM? (Choose 2)",
        "options": {
          "A": "Include fairness metrics for model evaluation.",
          "B": "Adjust the temperature parameter of the model.",
          "C": "Modify the training data to mitigate bias.",
          "D": "Avoid overfitting on the training data.",
          "E": "Apply prompt engineering techniques."
        },
        "correct": [
          "A",
          "C"
        ],
        "multiple": true
      },
      {
        "number": 22,
        "question": "A company is building an ML model. The company collected new data and analyzed the data by creating a correlation matrix, calculating statistics, and visualizing the data. Which stage of the ML pipeline is the company currently in?",
        "options": {
          "A": "Data pre-processing",
          "B": "Feature engineering",
          "C": "Exploratory data analysis",
          "D": "Hyperparameter tuning"
        },
        "correct": [
          "C"
        ],
        "multiple": false
      },
      {
        "number": 23,
        "question": "A company has documents that are missing some words because of a database error. The company wants to build an ML model that can suggest potential words to fill in the missing text. Which type of model meets this requirement?",
        "options": {
          "A": "Topic modeling",
          "B": "Clustering models",
          "C": "Prescriptive ML models",
          "D": "BERT-based models"
        },
        "correct": [
          "D"
        ],
        "multiple": false
      },
      {
        "number": 24,
        "question": "A company wants to display the total sales for its top-selling products across various retail locations in the past 12 months. Which AWS solution should the company use to automate the generation of graphs?",
        "options": {
          "A": "Amazon Q in Amazon EC2",
          "B": "Amazon Q Developer",
          "C": "Amazon Q in Amazon QuickSight",
          "D": "Amazon Q in AWS Chatbot"
        },
        "correct": [
          "C"
        ],
        "multiple": false
      },
      {
        "number": 25,
        "question": "A company is building a chatbot to improve user experience. The company is using a large language model (LLM) from Amazon Bedrock for intent detection. The company wants to use few-shot learning to improve intent detection accuracy. Which additional data does the company need to meet these requirements?",
        "options": {
          "A": "Pairs of chatbot responses and correct user intents",
          "B": "Pairs of user messages and correct chatbot responses",
          "C": "Pairs of user messages and correct user intents",
          "D": "Pairs of user intents and correct chatbot responses"
        },
        "correct": [
          "C"
        ],
        "multiple": false
      },
      {
        "number": 26,
        "question": "A company is using few-shot prompting on a base model that is hosted on Amazon Bedrock. The model currently uses 10 examples in the prompt. The model is invoked once daily and is performing well. The company wants to lower the monthly cost. Which solution will meet these requirements?",
        "options": {
          "A": "Customize the model by using fine-tuning.",
          "B": "Decrease the number of tokens in the prompt.",
          "C": "Increase the number of tokens in the prompt.",
          "D": "Use Provisioned Throughput."
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 27,
        "question": "An AI practitioner is using a large language model (LLM) to create content for marketing campaigns. The generated content sounds plausible and factual but is incorrect. Which problem is the LLM having?",
        "options": {
          "A": "Data leakage",
          "B": "Hallucination",
          "C": "Overfitting",
          "D": "Underfitting"
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 28,
        "question": "An AI practitioner trained a custom model on Amazon Bedrock by using a training dataset that contains confidential data. The AI practitioner wants to ensure that the custom model does not generate inference responses based on confidential data. How should the AI practitioner prevent responses based on confidential data?",
        "options": {
          "A": "Delete the custom model. Remove the confidential data from the training dataset. Retrain the custom",
          "B": "Mask the confidential data in the inference responses by using dynamic data masking.",
          "C": "Encrypt the confidential data in the inference responses by using Amazon SageMaker.",
          "D": "Encrypt the confidential data in the custom model by using AWS Key Management Service (AWS KMS)."
        },
        "correct": [
          "A"
        ],
        "multiple": false
      },
      {
        "number": 29,
        "question": "A company has built a solution by using generative AI. The solution uses large language models (LLMs) to translate training manuals from English into other languages. The company wants to evaluate the accuracy of the solution by examining the text generated for the manuals. Which model evaluation strategy meets these requirements?",
        "options": {
          "A": "Bilingual Evaluation Understudy (BLEU)",
          "B": "Root mean squared error (RMSE)",
          "C": "Recall-Oriented Understudy for Gisting Evaluation (ROUGE)",
          "D": "F1 score"
        },
        "correct": [
          "A"
        ],
        "multiple": false
      },
      {
        "number": 30,
        "question": "A large retailer receives thousands of customer support inquiries about products every day. The customer support inquiries need to be processed quickly. The company wants to implement Agents for Amazon Bedrock. What are the key benefits of using Amazon Bedrock agents that could help this retailer?",
        "options": {
          "A": "Generation of custom foundation models (FMs) to predict customer needs",
          "B": "Automation of repetitive tasks and orchestration of complex workflows",
          "C": "Automatically calling multiple foundation models (FMs) and consolidating the results",
          "D": "Selecting the foundation model (FM) based on predefined criteria and metrics"
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 31,
        "question": "Which option is a benefit of ongoing pre-training when fine-tuning a foundation model (FM)?",
        "options": {
          "A": "Helps decrease the model\u2019s complexity",
          "B": "Improves model performance over time",
          "C": "Decreases the training time requirement",
          "D": "Optimizes model inference time"
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 32,
        "question": "What are tokens in the context of generative AI models?",
        "options": {
          "A": "Tokens are the basic units of input and output that a generative AI model operates on, representing words, subwords, or other linguistic units.",
          "B": "Tokens are the mathematical representations of words or concepts used in generative AI models.",
          "C": "Tokens are the pre-trained weights of a generative AI model that are fine-tuned for specific tasks.",
          "D": "Tokens are the specific prompts or instructions given to a generative AI model to generate output."
        },
        "correct": [
          "A"
        ],
        "multiple": false
      },
      {
        "number": 33,
        "question": "A company wants to assess the costs that are associated with using a large language model (LLM) to generate inferences. The company wants to use Amazon Bedrock to build generative AI applications. Which factor will drive the inference costs?",
        "options": {
          "A": "Number of tokens consumed",
          "B": "Temperature value",
          "C": "Amount of data used to train the LLM",
          "D": "Total training time"
        },
        "correct": [
          "A"
        ],
        "multiple": false
      },
      {
        "number": 34,
        "question": "A company is using Amazon SageMaker Studio notebooks to build and train ML models. The company stores the data in an Amazon S3 bucket. The company needs to manage the flow of data from Amazon S3 to SageMaker Studio notebooks. Which solution will meet this requirement?",
        "options": {
          "A": "Use Amazon Inspector to monitor SageMaker Studio.",
          "B": "Use Amazon Macie to monitor SageMaker Studio.",
          "C": "Configure SageMaker to use a VPC with an S3 endpoint.",
          "D": "Configure SageMaker to use S3 Glacier Deep Archive."
        },
        "correct": [
          "C"
        ],
        "multiple": false
      },
      {
        "number": 35,
        "question": "A company has a foundation model (FM) that was customized by using Amazon Bedrock to answer customer queries about products. The company wants to validate the model\u2019s responses to new types of queries. The company needs to upload a new dataset that Amazon Bedrock can use for validation. Which AWS service meets these requirements?",
        "options": {
          "A": "Amazon S3",
          "B": "Amazon Elastic Block Store (Amazon EBS)",
          "C": "Amazon Elastic File System (Amazon EFS)",
          "D": "AWS Snowcone"
        },
        "correct": [
          "A"
        ],
        "multiple": false
      },
      {
        "number": 36,
        "question": "Which prompting attack directly exposes the configured behavior of a large language model (LLM)?",
        "options": {
          "A": "Prompted persona switches",
          "B": "Exploiting friendliness and trust",
          "C": "Ignoring the prompt template",
          "D": "Extracting the prompt template"
        },
        "correct": [
          "D"
        ],
        "multiple": false
      },
      {
        "number": 37,
        "question": "A company wants to use Amazon Bedrock. The company needs to review which security aspects the company is responsible for when using Amazon Bedrock. Which security aspect will the company be responsible for?",
        "options": {
          "A": "Patching and updating the versions of Amazon Bedrock",
          "B": "Protecting the infrastructure that hosts Amazon Bedrock",
          "C": "Securing the company\u2019s data in transit and at rest",
          "D": "Provisioning Amazon Bedrock within the company network"
        },
        "correct": [
          "C"
        ],
        "multiple": false
      },
      {
        "number": 38,
        "question": "A social media company wants to use a large language model (LLM) to summarize messages. The company has chosen a few LLMs that are available on Amazon SageMaker JumpStart. The company wants to compare the generated output toxicity of these models. Which strategy gives the company the ability to evaluate the LLMs with the LEAST operational overhead?",
        "options": {
          "A": "Crowd-sourced evaluation",
          "B": "Automatic model evaluation",
          "C": "Model evaluation with human workers",
          "D": "Reinforcement learning from human feedback (RLHF)"
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 39,
        "question": "A company is testing the security of a foundation model (FM). During testing, the company wants to get around the safety features and make harmful content. Which security technique is this an example of?",
        "options": {
          "A": "Fuzzing training data to find vulnerabilities",
          "B": "Denial of service (DoS)",
          "C": "Penetration testing with authorization",
          "D": "Jailbreak"
        },
        "correct": [
          "D"
        ],
        "multiple": false
      },
      {
        "number": 40,
        "question": "A company needs to use Amazon SageMaker for model training and inference. The company must comply with regulatory requirements to run SageMaker jobs in an isolated environment without internet access. Which solution will meet these requirements?",
        "options": {
          "A": "Run SageMaker training and inference by using SageMaker Experiments.",
          "B": "Run SageMaker training and inference by using network isolation.",
          "C": "Encrypt the data at rest by using encryption for SageMaker geospatial capabilities.",
          "D": "Associate appropriate AWS Identity and Access Management (IAM) roles with the SageMaker jobs."
        },
        "correct": [
          "B"
        ],
        "multiple": false
      },
      {
        "number": 41,
        "question": "An ML research team develops custom ML models. The model artifacts are shared with other teams for integration into products and services. The ML team retains the model training code and data. The ML team wants to build a mechanism that the ML team can use to audit models. Which solution should the ML team use when publishing the custom ML models?",
        "options": {
          "A": "Create documents with the relevant information. Store the documents in Amazon S3.",
          "B": "Use AWS AI Service Cards for transparency and understanding models.",
          "C": "Create Amazon SageMaker Model Cards with intended uses and training and inference details.",
          "D": "Create model training scripts. Commit the model training scripts to a Git repository."
        },
        "correct": [
          "C"
        ],
        "multiple": false
      },
      {
        "number": 42,
        "question": "A software company builds tools for customers. The company wants to use AI to increase software development productivity. Which solution will meet these requirements?",
        "options": {
          "A": "Use a binary classification model to generate code reviews.",
          "B": "Install code recommendation software in the company\u2019s developer tools.",
          "C": "Install a code forecasting tool to predict potential code issues.",
          "D": "Use a natural language processing (NLP) tool to generate code."
        },
        "correct": [
          "D"
        ],
        "multiple": false
      },
      {
        "number": 43,
        "question": "A retail store wants to predict the demand for a specific product for the next few weeks by using the Amazon SageMaker DeepAR forecasting algorithm. Which type of data will meet this requirement?",
        "options": {
          "A": "Text data",
          "B": "Image data",
          "C": "Time series data",
          "D": "Binary data"
        },
        "correct": [
          "C"
        ],
        "multiple": false
      },
      {
        "number": 44,
        "question": "A large retail bank wants to develop an ML system to help the risk management team decide on loan allocations for different demographics. What must the bank do to develop an unbiased ML model?",
        "options": {
          "A": "Reduce the size of the training dataset.",
          "B": "Ensure that the ML model predictions are consistent with historical results.",
          "C": "Create a different ML model for each demographic group.",
          "D": "Measure class imbalance on the training dataset. Adapt the training process accordingly."
        },
        "correct": [
          "D"
        ],
        "multiple": false
      },
      {
        "number": 45,
        "question": "Which prompting technique can protect against prompt injection attacks?",
        "options": {
          "A": "Adversarial prompting",
          "B": "Zero-shot prompting",
          "C": "Least-to-most prompting",
          "D": "Chain-of-thought prompting"
        },
        "correct": [
          "A"
        ],
        "multiple": false
      },
      {
        "number": 46,
        "question": "A company has fine-tuned a large language model (LLM) to answer questions for a help desk. The company wants to determine if the fine-tuning has enhanced the model\u2019s accuracy. Which metric should the company use for the evaluation?",
        "options": {
          "A": "Precision",
          "B": "Time to first token",
          "C": "F1 score",
          "D": "Word error rate"
        },
        "correct": [
          "C"
        ],
        "multiple": false
      },
      {
        "number": 47,
        "question": "A company is using Retrieval Augmented Generation (RAG) with Amazon Bedrock and Stable Diffusion to generate product images based on text descriptions. The results are often random and lack specific details. The company wants to increase the specificity of the generated images. Which solution meets these requirements?",
        "options": {
          "A": "Increase the number of generation steps.",
          "B": "Use the MASK_IMAGE_BLACK mask source option.",
          "C": "Increase the classifier-free guidance (CFG) scale.",
          "D": "Increase the prompt strength."
        },
        "correct": [
          "C"
        ],
        "multiple": false
      },
      {
        "number": 48,
        "question": "A company wants to implement a large language model (LLM) based chatbot to provide customer service agents with real-time contextual responses to customers\u2019 inquiries. The company will use the company\u2019s policies as the knowledge base. Which solution will meet these requirements MOST cost-effectively?",
        "options": {
          "A": "Retrain the LLM on the company policy data.",
          "B": "Fine-tune the LLM on the company policy data.",
          "C": "Implement Retrieval Augmented Generation (RAG) for in-context responses.",
          "D": "Use pre-training and data augmentation on the company policy data."
        },
        "correct": [
          "C"
        ],
        "multiple": false
      },
      {
        "number": 49,
        "question": "A company wants to create a new solution by using AWS Glue. The company has minimal programming experience with AWS Glue. Which AWS service can help the company use AWS Glue?",
        "options": {
          "A": "Amazon Q Developer",
          "B": "AWS Config",
          "C": "Amazon Personalize",
          "D": "Amazon Comprehend"
        },
        "correct": [
          "A"
        ],
        "multiple": false
      },
      {
        "number": 50,
        "question": "A company is developing a mobile ML app that uses a phone\u2019s camera to diagnose and treat insect bites. The company wants to train an image classification model by using a diverse dataset of insect bite photos from different genders, ethnicities, and geographic locations around the world. Which principle of responsible AI does the company demonstrate in this scenario?",
        "options": {
          "A": "Fairness",
          "B": "Explainability",
          "C": "Governance",
          "D": "Transparency"
        },
        "correct": [
          "A"
        ],
        "multiple": false
      }
    ]
  }
];
