const request = require('supertest');
const app = require('../app'); // Your Express app

describe('Task API Tests', () => {
  it('should fetch all tasks', async () => {
    const res = await request(app).get('/fetchAllTasks');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveLength(0);  // Assuming no tasks initially
  });

  it('should add task via WebSocket', async (done) => {
    const io = require('socket.io-client');
    const socket = io.connect('http://localhost:4000');
    socket.emit('add', 'Test Task');

    socket.on('taskAdded', (newTask) => {
      expect(newTask).toBe('Test Task');
      done();
    });
  });
});
