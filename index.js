const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
  console.log("just checking if this evan works.");
  res.send("hello World!");
});

app.get("/help", (req, res, next) => {
  console.log("You need help?");
  res.send("Hello, do you need help?")
});

app.listen(8080, () => {
  console.log('Hello world server is running!');
});
