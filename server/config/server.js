const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

// Import and use your middleware here (e.g., bodyParser, cors, authentication middleware).

// Set up WebSocket (Socket.io) for real-time features.
io.on('connection', (socket) => {
  console.log('User connected');
  // Handle real-time chat and Kanban board events here.
});

// Define and use your routes.

// Start the server.
const port = process.env.HTTP_PORT || 5000;
http.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Connect to your MongoDB database.
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
