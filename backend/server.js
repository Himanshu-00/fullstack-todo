const http = require('http');
const app = require('./app');
const socketIo = require('socket.io');
const taskController = require('./controllers/taskController');
const mongoose = require('mongoose');

// MongoDB connection
mongoose.connect('mongodb+srv://assignment_user:HCgEj5zv8Hxwa4xO@test-cluster.6f94f5o.mongodb.net/assignment', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});


const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
  console.log('New client connected');

  // Listen for 'add' event from frontend
  socket.on('add', (task) => {
    // Call the taskController to add task to Redis/MongoDB
    taskController.addTask(task);

    // Emit back the task to update the frontend in real-time
    socket.emit('taskAdded', task);  // Send the added task back to frontend immediately
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

server.listen(4000, () => console.log('Server running on port 4000'));
