// server.js
const express = require('express');
const WebSocket = require('ws');
const http = require('http');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(express.static(__dirname + '/public')); // tu index.html va en ./public

wss.on('connection', ws => {
  ws.on('message', message => {
    wss.clients.forEach(client => {
      if(client.readyState === WebSocket.OPEN) client.send(message);
    });
  });
});

server.listen(8080, () => console.log("Servidor HTTP+WS corriendo en puerto 8080"));
