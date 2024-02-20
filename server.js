const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

const options = {
  cert: fs.readFileSync(path.join(__dirname, 'cert.pem'), 'utf8'),
  key: fs.readFileSync(path.join(__dirname, 'key.pem'), 'utf8')
};

const server = https.createServer(options, app);

server.listen(port, function(error) {
  if (error) {
    console.log('Something went wrong', error);
  } else {
    console.log('Server is listening on port ' + port);
  }
});
