const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  task: String,
  completed: { type: Boolean, default: false }
});

module.exports = mongoose.model('Task', taskSchema);
