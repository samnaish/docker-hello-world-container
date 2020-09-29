const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
  console.log("just checking if this evan works.");
  res.send("hello World!");
});

app.listen(8080, () => {
  console.log('Hello world server is running!');
});
