# Sample 04 — URL Shortener

Shorten long URLs into compact shareable links and track how many times each one is clicked.

## What it does

- Paste any long URL and get a short link (6-character random code)
- Redirects visitors to the original URL and increments the click count
- Automatically prepends https:// if protocol is missing
- Lists all your links with click counts and creation dates
- Copy short link to clipboard with one click

## Data stored

| Field | Type | Description |
|-------|------|-------------|
| id | INTEGER | Auto-generated primary key |
| original_url | TEXT | The full original URL |
| short_code | TEXT | Unique 6-character code |
| click_count | INTEGER | Number of times the link was visited |
| created_at | DATETIME | When the link was created |

## API Routes

| Method | Path | Description |
|--------|------|-------------|
| POST | /api/shorten | Shorten a URL, returns short_url |
| GET | /:code | Redirect to original URL (increments click count) |
| GET | /api/links | List all short links |

## Setup

```bash
npm install
cp .env.example .env
npm start
```

Open http://localhost:3000

## Docker

```bash
docker build -t url-shortener .
docker run -p 3000:3000 url-shortener
```

## Live URL

> **Deployed at:** https://your-app-url.com  ← replace after deployment
