const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, Heroku! This is test jenkins node application deploy');
});

app.listen(port, () => {
  console.log("First step completed....");
  console.log(`Server running on port ${port}`);
});