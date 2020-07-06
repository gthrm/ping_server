// run - node --inspect app/index.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const rateLimit = require('express-rate-limit');
const http = require('http');
const uid = require('uid');
require('log-timestamp');

const PORT = '5000';
const limiter = rateLimit({
  windowMs: 2 * 60 * 1000, // 2 minutes
  max: 100, // limit each IP to 10 requests per windowMs
  message: { error: { code: 429, message: 'Too many requests from your IP. Please wait 2 Minutes' } },
});

const app = express();

const server = http.createServer(app);

app.use(bodyParser.json());
app.use(cors({ origin: '*' }));
app.use(limiter);

app.get('/get', (req, res) => {
  console.log('--- req', req.ip);
  res.status(200);
  res.send({
    id: uid(), status: '200', message: 'OK', date: new Date()
  });
});

server.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}, open`, 'chrome://inspect', 'to debug');
});
