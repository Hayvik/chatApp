const express = require('express');
const router = express.Router();
const kanbanController = require('../controllers/kanbanController');


router.post('/create-task', kanbanController.createTask);


router.put('/update-task/:taskId', kanbanController.updateTask);

// Delete a task
router.delete('/delete-task/:taskId', kanbanController.deleteTask);

// Get tasks for a specific Kanban board
router.get('/get-tasks/:boardId', kanbanController.getTasks);

module.exports = router;
