const http = require('http');
const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('First app');
});

app.listen(3000);