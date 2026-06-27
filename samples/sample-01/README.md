# Sample 01 — Expense Tracker App

Track your daily spending and get a summary by category.

## What it does

- Add expenses with description, amount, category, and date
- Filter the expense list by category
- See a summary of total spending per category
- Delete individual expenses

## Data stored

| Field | Type | Description |
|-------|------|-------------|
| id | INTEGER | Auto-generated primary key |
| description | TEXT | What the expense was for |
| amount | REAL | Amount in dollars |
| category | TEXT | One of: Food, Transport, Housing, etc. |
| date | TEXT | Date of expense (YYYY-MM-DD) |

## API Routes

| Method | Path | Description |
|--------|------|-------------|
| GET | /api/expenses | Returns all expenses + category summary |
| POST | /api/expenses | Create a new expense |
| DELETE | /api/expenses/:id | Delete an expense |

## Setup

```bash
npm install
cp .env.example .env
npm start
```

Open http://localhost:3000

## Docker

```bash
docker build -t expense-tracker .
docker run -p 3000:3000 expense-tracker
```

## Live URL

> **Deployed at:** https://your-app-url.com  ← replace after deployment
