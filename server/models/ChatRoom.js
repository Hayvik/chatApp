const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chatRoomSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  // Add more fields as needed, e.g., participants, messages, etc.
});

module.exports = mongoose.model('ChatRoom', chatRoomSchema);
