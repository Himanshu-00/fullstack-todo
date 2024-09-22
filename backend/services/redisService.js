const redis = require('redis');
const client = redis.createClient({ url: 'redis://redis:6379' });
client.connect();

// Add task to Redis
exports.addTask = (task, callback) => {
  client.lpush('tasks', JSON.stringify(task), callback);
};

// Get all tasks from Redis
exports.getTasks = async (req, res) => {
  try {
    const tasks = await client.lRange('tasks', 0, -1);  // Redis v4 uses lRange (notice the capital 'R')
    res.json(tasks);
    console.log(res.log);
  } catch (err) {
    console.error('Error fetching tasks from Redis:', err);
    res.status(500).send('Server error');
  }
};

// Get Redis task count
exports.getTaskCount = (callback) => {
  client.llen('tasks', callback);
};

// Flush tasks from Redis
exports.flushTasks = () => {
  client.del('tasks');
};
