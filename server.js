const express = require('express');
const app = express();
const https = require('https');
const fs = require('fs');
const path = require('path');

app.use(express.static('public'));
const port = 3000;

// Provide paths to your SSL certificate and private key
const options = {
  cert: fs.readFileSync('cert.pem', 'utf8'),
  key: fs.readFileSync('key.pem', 'utf8')
};

const server = https.createServer(options, function(req, res) {
  // Set the response HTTP header with HTTP status and Content type
  res.writeHead(200, {'Content-Type': 'text/html'});

  // Send the HTML content with the AR scene
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
        <script src="https://aframe.io/releases/1.3.0/aframe.min.js"></script>
        <script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"></script>
    </head>
    <body style="margin : 0px; overflow: hidden;">
        <a-scene embedded arjs>
            <a-marker preset="hiro">
                <a-entity
                position="0 0 0"
                scale="0.05 0.05 0.05"
                gltf-model="./path/to/your/model/scene.gltf"
                ></a-entity>
            </a-marker>
            <a-entity camera></a-entity>
        </a-scene>
    </body>
    </html>
  `;

  res.write(htmlContent);
  res.end();
});

server.listen(port, function(error) {
  if (error) {
    console.log('Something went wrong', error);
  } else {
    console.log('Server is listening on port ' + port);
  }
});
