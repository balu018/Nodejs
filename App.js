const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware for parsing JSON request body
app.use(bodyParser.json());

// In-memory array to store tasks (replace with a database in a production app)
const tasks = [];

// API endpoint to get all tasks
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// API endpoint to add a new task
app.post('/tasks', (req, res) => {
  const { task } = req.body;
  if (task) {
    tasks.push(task);
    res.status(201).json({ message: 'Task added successfully' });
  } else {
    res.status(400).json({ error: 'Task is required' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`To-Do List App is listening at http://localhost:${port}`);
});
