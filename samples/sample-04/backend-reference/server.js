require('dotenv').config();
const express = require('express');
const path = require('path');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'frontend')));

// GET /api/links — list all shortened links
app.get('/api/links', (req, res) => {
  try {
    const links = db.getAll();
    res.json(links);
  } catch (err) {
    console.error('Error fetching links:', err);
    res.status(500).json({ error: 'Failed to fetch links' });
  }
});

// POST /api/shorten — shorten a URL
app.post('/api/shorten', (req, res) => {
  try {
    const { url } = req.body;
    if (!url || !url.trim()) {
      return res.status(400).json({ error: 'url is required' });
    }
    let normalized = url.trim();
    if (!normalized.startsWith('http://') && !normalized.startsWith('https://')) {
      normalized = 'https://' + normalized;
    }
    try { new URL(normalized); } catch {
      return res.status(400).json({ error: 'Invalid URL format' });
    }
    const link = db.insert(normalized);
    const baseUrl = `${req.protocol}://${req.get('host')}`;
    res.status(201).json({ ...link, short_url: `${baseUrl}/${link.short_code}` });
  } catch (err) {
    console.error('Error shortening URL:', err);
    res.status(500).json({ error: 'Failed to shorten URL' });
  }
});

// GET /:code — redirect to original URL and track click
app.get('/:code([a-zA-Z0-9]{4,10})', (req, res) => {
  try {
    const link = db.getByCode(req.params.code);
    if (!link) return res.status(404).send('Short link not found');
    db.incrementClick(req.params.code);
    res.redirect(301, link.original_url);
  } catch (err) {
    console.error('Error redirecting:', err);
    res.status(500).send('Server error');
  }
});

// Fallback: serve frontend
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`URL Shortener running at http://localhost:${PORT}`);
});
