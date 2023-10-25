/* 
 * Filename: sophisticated_code.js
 * Description: This code is a complex and sophisticated implementation
 * of a real-time chat application using websockets and Node.js.
 */

// Import dependencies
const express = require('express');
const http = require('http');
const WebSocket = require('ws');

// Create an Express app
const app = express();
app.use(express.static('public'));

// Create an HTTP server using the Express app
const server = http.createServer(app);

// Create a WebSocket server using the HTTP server
const wss = new WebSocket.Server({ server });

// Store connected clients
let clients = [];

// Handle WebSocket connection
wss.on('connection', (ws) => {
  // Add new client to the clients array
  clients.push(ws);

  // Handle incoming messages from clients
  ws.on('message', (message) => {
    // Broadcast the message to all connected clients
    clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  // Handle client disconnection
  ws.on('close', () => {
    // Remove client from the clients array
    clients = clients.filter((client) => client !== ws);
  });
});

// Start the server and listen on port 3000
server.listen(3000, () => {
  console.log('Server started on port 3000');
});