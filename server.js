const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const path = require("path");

const app = express();
const port = process.env.PORT || 3300;

// Starting the server
app.listen(port, () => {
  //console.log(path.join(__dirname, "./routes"));
  console.log(`Listening the port ${port}....`);
});

app.get("/", async (request, response) => {
  response.sendFile(path.join(__dirname + "/index.html"));
});

app.use(bodyParser.json());

app.get("/sentiment/:userInput", async (request, response) => {
  let url =
    "https://a175nz8um9.execute-api.us-east-2.amazonaws.com/v1/detectSentiments?text=" +
    request.params.userInput;
  const sentiment_response = await fetch(url, { mode: "no-cors" });
  const sentiment_data = await sentiment_response.json();
  console.log("sentiment: " + sentiment_data["body"]);
  response.json(sentiment_data["body"]);
});

app.get("/entities/:userInput", async (request, response) => {
  console.log("*************************************************");
  let url =
    "https://bz1ek86yta.execute-api.us-east-2.amazonaws.com/v1/detectEntities?text=" +
    request.params.userInput;
  console.log("url--->", url);
  const entities_response = await fetch(url, { mode: "no-cors" });
  const entities_data = await entities_response.json();
  console.log("entities: " + entities_data["body"]);

  response.json(entities_data["body"]);
});

app.use((err, request, response) => {
  response.locals.message = err.message;
  const status = err.status || 500;
  response.locals.status = status;
  response.render("error");
});
