require('dotenv').config();
const express = require('express');
const path = require('path');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'frontend')));

// GET /api/expenses — list all expenses with optional category filter
app.get('/api/expenses', (req, res) => {
  try {
    const expenses = db.getAll();
    const summary = db.sumByCategory();
    res.json({ expenses, summary });
  } catch (err) {
    console.error('Error fetching expenses:', err);
    res.status(500).json({ error: 'Failed to fetch expenses' });
  }
});

// POST /api/expenses — create a new expense
app.post('/api/expenses', (req, res) => {
  try {
    const { description, amount, category, date } = req.body;
    if (!description || amount == null || !category || !date) {
      return res.status(400).json({ error: 'description, amount, category, and date are required' });
    }
    if (isNaN(parseFloat(amount)) || parseFloat(amount) <= 0) {
      return res.status(400).json({ error: 'amount must be a positive number' });
    }
    const expense = db.insert({ description, amount: parseFloat(amount), category, date });
    res.status(201).json(expense);
  } catch (err) {
    console.error('Error creating expense:', err);
    res.status(500).json({ error: 'Failed to create expense' });
  }
});

// DELETE /api/expenses/:id — remove an expense
app.delete('/api/expenses/:id', (req, res) => {
  try {
    const { id } = req.params;
    const existing = db.getById(id);
    if (!existing) return res.status(404).json({ error: 'Expense not found' });
    db.delete(id);
    res.json({ message: 'Expense deleted successfully' });
  } catch (err) {
    console.error('Error deleting expense:', err);
    res.status(500).json({ error: 'Failed to delete expense' });
  }
});

// Catch-all: serve frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Expense Tracker running at http://localhost:${PORT}`);
});
