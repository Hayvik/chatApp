const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const userRoutes = require('./routes/authRoutes'); // Import your authentication routes
const chatRoutes = require('./routes/chatRoutes'); // Import your chat routes
const kanbanRoutes = require('./routes/kanbanRoutes'); // Import your Kanban board routes
const crypto = require('crypto');

const jwtSecret = crypto.randomBytes(32).toString('hex');
console.log('JWT Secret Key:', jwtSecret);

dotenv.config();

// Initialize Express app and HTTP server
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Socket.io for real-time features
io.on('connection', (socket) => {
  console.log('A user connected');
  // Handle real-time events here (e.g., chat, Kanban board updates).
});

// Define routes
app.use('/api/users', userRoutes); // Authentication routes
app.use('/api/chat', chatRoutes); // Chat routes
app.use('/api/kanban', kanbanRoutes); // Kanban board routes

// Start the server
const PORT = process.env.HTTP_PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
