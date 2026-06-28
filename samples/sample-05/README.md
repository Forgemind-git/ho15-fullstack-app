# HO15 Sample 5 — Leave Request Tracker (reference)

## What you'll build
A small internal tool for handling staff leave, so requests stop getting lost in email.
Employees submit a leave request (name, type, dates and a reason); the app works out how many
days that is, stores it in your browser (localStorage), and lets an approver Approve or Reject
each one. You can filter by status and see totals, including how many days have been approved.
No server, no database account, no sign-up.

This is the **reference version** — `index.html` in this folder is the complete, working app.

## Use it with your Claude.ai subscription
No API key needed. Just your normal Claude.ai login.

1. Open **`index.html`** from this folder by double-clicking it. It works immediately — submit
   a request, then approve it and watch the totals change.
2. To build your own version, open **Claude.ai** and paste the **example prompt** below into a
   new chat.
3. Claude replies with one block of HTML. Click **Copy** on that code block.
4. Open a plain text editor (Notepad / TextEdit), paste the code, and save it as
   **`index.html`**.
5. Double-click your `index.html` to open and use it in the browser.
6. To share it: upload `index.html` to a new GitHub repository and turn on **Settings → Pages**
   for a free live link.

No API key needed.

## The example prompt
Copy this exactly into Claude.ai:

```
Build me a single-file leave-request tracker as one self-contained index.html (HTML, CSS and JavaScript all in one file, no external libraries).

Requirements:
- A form to submit a leave request with: Employee Name, Leave Type (a dropdown: Annual, Sick, Other), Start Date, End Date (date pickers) and Reason (a multi-line text box).
- When submitting, work out the number of days from start to end date (inclusive) and reject the request if the end date is before the start date.
- Save every request in the browser using localStorage so it survives a page refresh.
- Show all requests in a table with: employee, type, the date range and day count, the reason, and a coloured status badge (Pending, Approved, Rejected).
- Pending requests have Approve and Reject buttons; every request has a Delete button.
- Filter buttons: All, Pending, Approved, Rejected.
- A summary section showing Total, Pending, Approved, Rejected counts and the total number of approved days.
- Clean, modern styling with a coloured header. Make it mobile-friendly.

Give me the complete file so I can copy it, save it as index.html, and open it in my browser.
```

## Make it your own
- Add a "manager" or "department" field so requests are grouped by team.
- Ask Claude to add a yearly allowance and show each employee their remaining days.
- Add an "approved by" note that records who made the decision.

## Optional — full-stack version (advanced)
You do **not** need this for the course, and **no API key is required**. The browser version
above is complete on its own. If you later want requests stored on a shared server and
database so a real approver can see them, the **`backend-reference/`** folder shows a Node.js +
Express + SQLite version, with a `Dockerfile` to deploy it.

**Data stored (backend version)**

| Field | Type | Description |
|-------|------|-------------|
| id | INTEGER | Auto-generated primary key |
| employee_name | TEXT | Name of the employee |
| leave_type | TEXT | Annual / Sick / Personal / Maternity / Paternity / Unpaid |
| start_date | TEXT | Leave start date (YYYY-MM-DD) |
| end_date | TEXT | Leave end date (YYYY-MM-DD) |
| reason | TEXT | Reason for leave |
| status | TEXT | pending / approved / rejected |

**API routes (backend version)**

| Method | Path | Description |
|--------|------|-------------|
| GET | /api/requests | List all requests (optional ?status= filter) |
| POST | /api/requests | Submit a new leave request |
| PATCH | /api/requests/:id | Approve or reject a pending request |

The files in `backend-reference/` and the `Dockerfile` are **illustrative reference code**
showing how a real backend would be wired up. Treat them as a learning reference for when
you're ready to go beyond the browser; they are not part of completing this hands-on.

## Live URL

> **Deployed at:** _(paste your GitHub Pages URL here after deploying)_
