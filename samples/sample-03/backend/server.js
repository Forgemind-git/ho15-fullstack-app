require('dotenv').config();
const express = require('express');
const path = require('path');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'frontend')));

// Serve the form config
app.get('/api/config', (req, res) => {
  try {
    const configPath = path.join(__dirname, '..', 'config.json');
    const config = require(configPath);
    res.json(config);
  } catch (err) {
    res.status(500).json({ error: 'Failed to load form config' });
  }
});

// GET /api/submissions — list all submissions
app.get('/api/submissions', (req, res) => {
  try {
    const submissions = db.getAll();
    const total = db.count();
    res.json({ submissions, total });
  } catch (err) {
    console.error('Error fetching submissions:', err);
    res.status(500).json({ error: 'Failed to fetch submissions' });
  }
});

// POST /api/submissions — save a new submission
app.post('/api/submissions', (req, res) => {
  try {
    const data = req.body;
    if (!data || typeof data !== 'object' || Object.keys(data).length === 0) {
      return res.status(400).json({ error: 'Submission data must be a non-empty object' });
    }
    const submission = db.insert(data);
    res.status(201).json(submission);
  } catch (err) {
    console.error('Error saving submission:', err);
    res.status(500).json({ error: 'Failed to save submission' });
  }
});

// GET /api/submissions/:id — get one submission
app.get('/api/submissions/:id', (req, res) => {
  try {
    const submission = db.getById(req.params.id);
    if (!submission) return res.status(404).json({ error: 'Submission not found' });
    res.json(submission);
  } catch (err) {
    console.error('Error fetching submission:', err);
    res.status(500).json({ error: 'Failed to fetch submission' });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Form Collector running at http://localhost:${PORT}`);
});
