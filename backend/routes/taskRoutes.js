const express = require('express');
const taskController = require('../controllers/taskController');

const router = express.Router();

// Fetch all tasks route
router.get('/fetchAllTasks', taskController.fetchAllTasks);

module.exports = router;
