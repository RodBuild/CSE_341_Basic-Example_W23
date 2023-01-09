const bodyParser = require('body-parser');
const express = require('express');
const mongodb = require('./db/connect');

const app = express();
const port = process.env.PORT || 3000;

// express.json() now replaces bodyParser.json()
app
  .use(express.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/', require('./routes'));

// Connect to MongoDB
mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});
