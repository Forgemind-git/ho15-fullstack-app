# HO15 Sample 2 — Booking App (reference)

## What you'll build
A booking app that stops you double-booking. Bookings are stored in your browser
(localStorage), shown in a tidy list, and the app warns you if a new booking clashes with an
existing one at the same date and time. You can mark each booking Confirmed or Cancelled and
copy a ready-made confirmation message to paste into WhatsApp. No server, no database account,
no sign-up.

This is the **reference version** — `index.html` in this folder is the complete, working app.

## Use it with your Claude.ai subscription
No API key needed. Just your normal Claude.ai login.

1. Open **`index.html`** from this folder by double-clicking it. It works immediately — try
   adding two bookings at the same time and watch the conflict warning appear.
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
Build me a single-file booking app as one self-contained index.html (HTML, CSS and JavaScript all in one file, no external libraries).

Requirements:
- A form to submit a booking with: Name, Email, Service (text), Date (date picker) and Time (time picker).
- Save every booking in the browser using localStorage so it survives a page refresh.
- Conflict detection: when I submit, if another active booking already exists for the same date AND time, block it and show a clear warning. Also show a live warning under the form when I pick a date/time that already has a booking.
- Show all bookings in a list, sorted by date and time, with a coloured status badge (Pending, Confirmed, Cancelled).
- Each booking has buttons: Confirm, Cancel, Delete, and "Copy text" which copies a friendly confirmation message like "Hi [Name], your [Service] booking on [Date] at [Time] is confirmed!" to the clipboard.
- A summary section counting Total, Pending, Confirmed and Cancelled bookings.
- Clean, modern styling with a coloured header. Make it mobile-friendly.

Give me the complete file so I can copy it, save it as index.html, and open it in my browser.
```

## Make it your own
- Replace the free-text Service field with a dropdown of the exact services you offer.
- Ask Claude to add a "duration" so a 2-hour booking blocks the slots around it too.
- Tweak the confirmation message wording to match your business's tone of voice.

## Optional — full-stack version (advanced)
You do **not** need this for the course, and **no API key is required**. The browser version
above is complete on its own. If you later want bookings stored on a shared server and
database, the **`backend-reference/`** folder shows a Node.js + Express + SQLite version, with
a `Dockerfile` to deploy it.

**Data stored (backend version)**

| Field | Type | Description |
|-------|------|-------------|
| id | INTEGER | Auto-generated primary key |
| name | TEXT | Customer full name |
| email | TEXT | Customer email |
| service | TEXT | Service type booked |
| date | TEXT | Booking date (YYYY-MM-DD) |
| time | TEXT | Time slot (HH:MM) |
| status | TEXT | pending / confirmed / cancelled |

**API routes (backend version)**

| Method | Path | Description |
|--------|------|-------------|
| GET | /api/bookings | List all bookings |
| POST | /api/bookings | Create booking (409 if slot conflict) |
| PATCH | /api/bookings/:id/status | Update booking status |

The files in `backend-reference/` and the `Dockerfile` are **illustrative reference code**
showing how a real backend would be wired up. Treat them as a learning reference for when
you're ready to go beyond the browser; they are not part of completing this hands-on.

## Live URL

> **Deployed at:** _(paste your GitHub Pages URL here after deploying)_
