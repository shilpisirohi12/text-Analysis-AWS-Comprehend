# Sentiment Analysis of the Text Using AWS Comprehend Service
This is an application which will analzse the text by calling AWS Lambda Endpoint URL which has the implementation of  AWS Comprehend service. 
This application is accessible at http://18.188.225.28:3300/

## STEPS TO RE-CREATE THIS PROJECT

### CREATE AWS LAMDA FUNCTIONS IN PYTHON

Below is the image of the code
![getEntities()](https://github.com/shilpisirohi12/text-Analysis-AWS-Comprehend/blob/master/images/detectEntities.JPG)
![getSentiments()](https://github.com/shilpisirohi12/text-Analysis-AWS-Comprehend/blob/master/images/detectSentiments.JPG)

### ADD HTTP TRIGGERS TO THE FUNCTIONS 

### DEPLOY NODE.JS PROJECT ON AWS EC2

- Create EC2 Ubuntu instance.
- Login into the instance via SSH.
- Install node and git
- clone this repository
- Run ```npm install``` to download the dependencies
- Run ```node server.js```

### SETTING INBOUND RULES
- Add new inbound to your EC2 instance to open the node server port to be accessible from anywhere. 
     **NOTE I put PORT 3300 as my node server is listening on this port.**
![Custom TCP](https://github.com/shilpisirohi12/text-Analysis-AWS-Comprehend/blob/master/images/customTCP.JPG)

### ACCESSING THE APPLICATION
- Go to EC2 instance and copy IPv4 Public IP.
- Go to the browser and type {IPv4 Public IP}:3300 

### START SERVER TO RUN FOREVER
- Install pm2 by running ```npm install -g pm2```
- Set up pm2 to start the server automatically on server restart by running
    ```pm2 start server.js```
    ```pm2 save```
    ```pm2 startup```
