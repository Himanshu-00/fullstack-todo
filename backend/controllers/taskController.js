const redisService = require('../services/redisService');
const Task = require('../models/taskModel');

// Fetch tasks from Redis and MongoDB
exports.fetchAllTasks = async (req, res) => {
  try {
    // Fetch tasks from Redis using async/await
    const redisTasks = await redisService.getTasks();

    // Fetch tasks from MongoDB using async/await
    const mongoTasks = await Task.find({});

    // Combine tasks from Redis and MongoDB
    const allTasks = [...redisTasks, ...mongoTasks];

    // Return the combined tasks
    res.json(allTasks);
  } catch (err) {
    console.error('Error fetching tasks:', err);
    res.status(500).send('Err');
  };

// Add task to Redis and move tasks to MongoDB if Redis exceeds 50 tasks
exports.addTask = async (task) => {
  redisService.addTask(task, async (err) => {
    if (err) throw err;

    // Emit the task back to the WebSocket client after adding it to Redis
    socket.emit('taskAdded', task);
    
    redisService.getTaskCount(async (err, count) => {
      if (err) throw err;

      if (count > 50) {
        redisService.getTasks(async (err, tasks) => {
          if (err) throw err;
          await Task.insertMany(tasks.map(task => ({ task: task.task, completed: false })));
          redisService.flushTasks();
        });
      }
    });
  });
};


