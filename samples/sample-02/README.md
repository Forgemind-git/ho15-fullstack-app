# Sample 02 — Booking & Availability App

Schedule appointments and manage booking status with conflict detection.

## What it does

- Submit a booking with name, email, service, date, and time slot
- Automatically detects conflicts (same service + same slot)
- View all bookings with status badges (pending / confirmed / cancelled)
- Confirm or cancel individual bookings
- Filter bookings by status

## Data stored

| Field | Type | Description |
|-------|------|-------------|
| id | INTEGER | Auto-generated primary key |
| name | TEXT | Customer full name |
| email | TEXT | Customer email |
| service | TEXT | Service type booked |
| date | TEXT | Booking date (YYYY-MM-DD) |
| time | TEXT | Time slot (HH:MM) |
| status | TEXT | pending / confirmed / cancelled |

## API Routes

| Method | Path | Description |
|--------|------|-------------|
| GET | /api/bookings | List all bookings |
| POST | /api/bookings | Create booking (409 if slot conflict) |
| PATCH | /api/bookings/:id/status | Update booking status |

## Setup

```bash
npm install
cp .env.example .env
npm start
```

Open http://localhost:3000

## Docker

```bash
docker build -t booking-app .
docker run -p 3000:3000 booking-app
```

## Live URL

> **Deployed at:** https://your-app-url.com  ← replace after deployment
