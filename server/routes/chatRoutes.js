const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

// Create a new chat room
router.post('/create-room', chatController.createRoom);

// Join a chat room
router.post('/join-room/:roomId', chatController.joinRoom);

// Send a message in a chat room
router.post('/send-message/:roomId', chatController.sendMessage);

// Retrieve chat history for a room
router.get('/chat-history/:roomId', chatController.getChatHistory);

module.exports = router;
