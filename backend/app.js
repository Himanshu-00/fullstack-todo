const express = require('express');
const app = express();
const taskRoutes = require('./routes/taskRoutes');
const cors = require('cors');  // Import the CORS middleware

app.use(cors());
app.use(express.json());
app.use(taskRoutes);



module.exports = app;
