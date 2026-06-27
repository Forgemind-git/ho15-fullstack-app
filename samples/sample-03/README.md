# Sample 03 — Form Submission Collector

A configurable form that renders from a JSON config file and stores all submissions as JSON in SQLite.

## What it does

- Renders a dynamic form from `config.json` (change fields without touching code)
- Stores each submission as a JSON blob in SQLite
- Lists all submissions with timestamps and a preview
- Click any submission to view the full JSON data
- Supports text, email, textarea, and select field types

## Customizing the form

Edit `config.json` to change form fields. Each field supports:
- `id` — unique field identifier
- `label` — display label
- `type` — `text`, `email`, `textarea`, or `select`
- `placeholder` — placeholder text (for input/textarea)
- `required` — true/false
- `options` — array of strings (for select fields)

## Data stored

| Field | Type | Description |
|-------|------|-------------|
| id | INTEGER | Auto-generated primary key |
| created_at | DATETIME | Timestamp of submission |
| data | TEXT | Full submission data as JSON |

## API Routes

| Method | Path | Description |
|--------|------|-------------|
| GET | /api/config | Returns the form field configuration |
| GET | /api/submissions | List all submissions |
| POST | /api/submissions | Save a new submission |
| GET | /api/submissions/:id | Get one submission by ID |

## Setup

```bash
npm install
cp .env.example .env
npm start
```

Open http://localhost:3000

## Docker

```bash
docker build -t form-collector .
docker run -p 3000:3000 form-collector
```

## Live URL

> **Deployed at:** https://your-app-url.com  ← replace after deployment
