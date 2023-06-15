# Assistance
Assistance is a small scale API that interacts with our NLP model that was build on `natural` to process user prompts and respond with a valid answer to the prompt.


It excels at question and answering.


# Try Assistance API
```bash
curl \
    -H 'Content-Type: application/json' \
    -d '{"request": "What is your name"}' \
    'https://assistance-server.onrender.com/api/chat'
```