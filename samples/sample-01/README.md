# HO15 Sample 1 — Expense Tracker (reference)

## What you'll build
A polished expense tracker that runs entirely in your web browser. Add what you spent, pick a
category (Food, Transport, Work, Other), and the page keeps a running total per category plus a
grand total. Everything is saved in your browser (localStorage), so your data is still there
when you come back. No spreadsheet that breaks when two people open it, no server, no sign-up.

This is the **reference version** — `index.html` in this folder is the complete, working app.

## Use it with your Claude.ai subscription
No API key needed. Just your normal Claude.ai login.

1. Open **`index.html`** from this folder by double-clicking it. It opens in your browser and
   works immediately — add an expense and watch the totals update.
2. To build your own version, open **Claude.ai** and paste the **example prompt** below into a
   new chat.
3. Claude replies with one block of HTML. Click **Copy** on that code block.
4. Open a plain text editor (Notepad / TextEdit), paste the code, and save it as
   **`index.html`**.
5. Double-click your `index.html` to open and use it in the browser.
6. To put it online for free: upload `index.html` to a new GitHub repository, then turn on
   **Settings → Pages** for a shareable live link.

No API key needed.

## The example prompt
Copy this exactly into Claude.ai:

```
Build me a single-file expense tracker as one self-contained index.html (HTML, CSS and JavaScript all in one file, no external libraries).

Requirements:
- A form to add an expense with: Description (text), Amount (number), Category (a dropdown: Food, Transport, Work, Other), and Date (date picker, defaulting to today).
- Save every expense in the browser using localStorage so the data survives a page refresh.
- Show all expenses in a list or table, newest first, each with a Delete button.
- Filter buttons (All, Food, Transport, Work, Other) that show only the matching expenses.
- A summary section showing the total amount spent per category and the grand total.
- An "Export CSV" button that downloads all expenses as a .csv file.
- Clean, modern styling with a coloured header. Make it mobile-friendly.

Give me the complete file so I can copy it, save it as index.html, and open it in my browser.
```

## Make it your own
- Change the categories in the dropdown to match your life (Groceries, Rent, Subscriptions…).
- Ask Claude to add a monthly total, or a simple bar chart of spending per category.
- Add a "currency" field so it works in £, € or ₹ instead of $.

## Optional — full-stack version (advanced)
You do **not** need this for the course, and **no API key is required**. The browser version
above is complete on its own. If you later want to store data on a real server and database
(so several people share the same list), the **`backend-reference/`** folder shows a Node.js +
Express + SQLite version, with a `Dockerfile` to deploy it. This path needs a terminal and a
hosting account.

**Data stored (backend version)**

| Field | Type | Description |
|-------|------|-------------|
| id | INTEGER | Auto-generated primary key |
| description | TEXT | What the expense was for |
| amount | REAL | Amount spent |
| category | TEXT | Food / Transport / Work / Other |
| date | TEXT | Date of expense (YYYY-MM-DD) |

**API routes (backend version)**

| Method | Path | Description |
|--------|------|-------------|
| GET | /api/expenses | Returns all expenses + category summary |
| POST | /api/expenses | Create a new expense |
| DELETE | /api/expenses/:id | Delete an expense |

The files in `backend-reference/` (`server.js`, `db.js`, `package.json`) and the `Dockerfile`
are **illustrative reference code** showing how a real backend would be wired up — Express
routes, a SQLite database layer, and a container image. Treat them as a learning reference for
when you're ready to go beyond the browser; they are not part of completing this hands-on.

## Live URL

> **Deployed at:** _(paste your GitHub Pages URL here after deploying)_
