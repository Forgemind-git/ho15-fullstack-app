require('dotenv').config();
const express = require('express');
const path = require('path');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'frontend')));

const VALID_LEAVE_TYPES = ['Annual', 'Sick', 'Personal', 'Maternity', 'Paternity', 'Unpaid'];
const VALID_STATUSES = ['pending', 'approved', 'rejected'];

// GET /api/requests — list all leave requests, with optional status filter
app.get('/api/requests', (req, res) => {
  try {
    let requests = db.getAll();
    if (req.query.status && req.query.status !== 'all') {
      requests = requests.filter(r => r.status === req.query.status);
    }
    res.json(requests);
  } catch (err) {
    console.error('Error fetching requests:', err);
    res.status(500).json({ error: 'Failed to fetch requests' });
  }
});

// POST /api/requests — submit a leave request
app.post('/api/requests', (req, res) => {
  try {
    const { employee_name, leave_type, start_date, end_date, reason } = req.body;
    if (!employee_name || !leave_type || !start_date || !end_date || !reason) {
      return res.status(400).json({ error: 'employee_name, leave_type, start_date, end_date, and reason are required' });
    }
    if (!VALID_LEAVE_TYPES.includes(leave_type)) {
      return res.status(400).json({ error: `leave_type must be one of: ${VALID_LEAVE_TYPES.join(', ')}` });
    }
    if (new Date(end_date) < new Date(start_date)) {
      return res.status(400).json({ error: 'end_date must be on or after start_date' });
    }
    const request = db.insert({ employee_name, leave_type, start_date, end_date, reason });
    res.status(201).json(request);
  } catch (err) {
    console.error('Error creating request:', err);
    res.status(500).json({ error: 'Failed to create leave request' });
  }
});

// PATCH /api/requests/:id — approve or reject a request
app.patch('/api/requests/:id', (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    if (!VALID_STATUSES.includes(status)) {
      return res.status(400).json({ error: `status must be one of: ${VALID_STATUSES.join(', ')}` });
    }
    const existing = db.getById(id);
    if (!existing) return res.status(404).json({ error: 'Request not found' });
    if (existing.status !== 'pending') {
      return res.status(400).json({ error: 'Only pending requests can be updated' });
    }
    const updated = db.updateStatus(id, status);
    res.json(updated);
  } catch (err) {
    console.error('Error updating request:', err);
    res.status(500).json({ error: 'Failed to update request' });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Leave Request Tracker running at http://localhost:${PORT}`);
});
