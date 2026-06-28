# HO15 Sample 2 — Booking App

## What you'll build
A small booking app that stops you double-booking. Customers' bookings are stored in your
browser (localStorage), shown in a tidy list, and the app warns you if a new booking clashes
with an existing one at the same date and time. You can mark each booking Confirmed or
Cancelled and copy a ready-made confirmation message to paste into WhatsApp. No server, no
database account, no sign-up.

This folder already contains a **finished, working app** (`index.html`). Open it and use it
right away — then follow the steps below to rebuild it yourself with Claude.ai.

## Use it with your Claude.ai subscription
No API key needed. Just your normal Claude.ai login.

1. Open **`index.html`** from this folder by double-clicking it. It works immediately — try
   adding two bookings at the same time and watch the conflict warning appear.
2. To build your own version, open **Claude.ai** and paste the **example prompt** below into
   a new chat.
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
You do **not** need this for the course. The browser version above is complete on its own.
If you later want bookings stored on a shared server and database, this project's **`main`
branch** includes a `backend-reference/` folder with a Node.js + Express + SQLite version and
a `Dockerfile`. That path needs a terminal and a hosting account — it is an optional extra,
not part of the hands-on.

## Live URL

> **Deployed at:** _(paste your GitHub Pages URL here after deploying)_
