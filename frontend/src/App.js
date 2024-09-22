import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';
import axios from 'axios';
import './index.css';

const socket = socketIOClient('http://localhost:4000');

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch all tasks
    fetchTasks();

    // Listen for added tasks
    socket.on('taskAdded', (newTask) => {
      setTasks((prevTasks) => [...prevTasks, newTask]);
    });

    return () => socket.disconnect();
  }, []);

  const fetchTasks = () => {
    axios.get('http://localhost:4000/fetchAllTasks')
      .then((res) => setTasks(res.data))
      .catch((err) => console.error(err));
  };

  const addTask = () => {
    if (task.trim()) {
      socket.emit('add', { task, completed: false });
      setTask('');
    }
  };

  const toggleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">To-Do List</h1>
        <div className="flex mb-4">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add a task"
            className="border p-2 rounded-lg flex-grow mr-2"
          />
          <button
            onClick={addTask}
            className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600"
          >
            Add Task
          </button>
        </div>
        <ul className="space-y-2">
          {tasks.map((t, index) => (
            <li
              key={index}
              className={`p-2 rounded-lg border shadow-sm ${
                t.completed ? 'line-through text-gray-500' : 'text-gray-900'
              }`}
              onClick={() => toggleComplete(index)}
            >
              {t.task}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
