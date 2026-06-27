# Sample 05 — Leave Request Tracker

Submit and manage employee leave requests with an approval workflow.

## What it does

- Submit leave requests with employee name, leave type, date range, and reason
- Validates that end date is not before start date
- Review and approve or reject pending requests
- Filter requests by status (All / Pending / Approved / Rejected)
- See live counts on each status tab
- Automatically shows how many days each request spans

## Data stored

| Field | Type | Description |
|-------|------|-------------|
| id | INTEGER | Auto-generated primary key |
| employee_name | TEXT | Name of the employee |
| leave_type | TEXT | Annual / Sick / Personal / Maternity / Paternity / Unpaid |
| start_date | TEXT | Leave start date (YYYY-MM-DD) |
| end_date | TEXT | Leave end date (YYYY-MM-DD) |
| reason | TEXT | Reason for leave |
| status | TEXT | pending / approved / rejected |

## API Routes

| Method | Path | Description |
|--------|------|-------------|
| GET | /api/requests | List all requests (optional ?status= filter) |
| POST | /api/requests | Submit a new leave request |
| PATCH | /api/requests/:id | Approve or reject a pending request |

## Setup

```bash
npm install
cp .env.example .env
npm start
```

Open http://localhost:3000

## Docker

```bash
docker build -t leave-requests .
docker run -p 3000:3000 leave-requests
```

## Live URL

> **Deployed at:** https://your-app-url.com  ← replace after deployment
