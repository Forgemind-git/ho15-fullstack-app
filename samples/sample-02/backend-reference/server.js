require('dotenv').config();
const express = require('express');
const path = require('path');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'frontend')));

// GET /api/bookings — list all bookings
app.get('/api/bookings', (req, res) => {
  try {
    const bookings = db.getAll();
    res.json(bookings);
  } catch (err) {
    console.error('Error fetching bookings:', err);
    res.status(500).json({ error: 'Failed to fetch bookings' });
  }
});

// POST /api/bookings — create a new booking with conflict check
app.post('/api/bookings', (req, res) => {
  try {
    const { name, email, service, date, time } = req.body;
    if (!name || !email || !service || !date || !time) {
      return res.status(400).json({ error: 'name, email, service, date, and time are required' });
    }
    const conflict = db.checkConflict(service, date, time);
    if (conflict) {
      return res.status(409).json({ error: `The ${service} slot at ${date} ${time} is already booked` });
    }
    const booking = db.insert({ name, email, service, date, time });
    res.status(201).json(booking);
  } catch (err) {
    console.error('Error creating booking:', err);
    res.status(500).json({ error: 'Failed to create booking' });
  }
});

// PATCH /api/bookings/:id/status — update booking status
app.patch('/api/bookings/:id/status', (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const validStatuses = ['pending', 'confirmed', 'cancelled'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ error: `status must be one of: ${validStatuses.join(', ')}` });
    }
    const existing = db.getById(id);
    if (!existing) return res.status(404).json({ error: 'Booking not found' });
    const updated = db.updateStatus(id, status);
    res.json(updated);
  } catch (err) {
    console.error('Error updating booking status:', err);
    res.status(500).json({ error: 'Failed to update booking status' });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Booking App running at http://localhost:${PORT}`);
});
