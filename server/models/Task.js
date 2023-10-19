const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['To Do', 'In Progress', 'Done'],
    default: 'To Do',
  },
  assignee: {
    type: mongoose.Schema.Types.ObjectId, // Reference to the User model
    ref: 'User',
  },
  // Add more fields as needed, e.g., due date, attachments, etc.
});

module.exports = mongoose.model('Task', taskSchema);
