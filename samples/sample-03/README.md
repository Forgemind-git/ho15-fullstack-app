# HO15 Sample 3 — Form Collector (reference)

## What you'll build
A feedback / sign-up collector that keeps every submission in one place instead of scattered
across messages. People enter their name, email, a message and a 1–5 star rating; the app
stores each one in your browser (localStorage), lets you search them, shows the average
rating, and exports everything to a CSV file you can open in Excel. No server, no database
account, no sign-up.

This is the **reference version** — `index.html` in this folder is the complete, working app.

## Use it with your Claude.ai subscription
No API key needed. Just your normal Claude.ai login.

1. Open **`index.html`** from this folder by double-clicking it. It works immediately — add a
   submission and try the search box.
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
Build me a single-file feedback collector as one self-contained index.html (HTML, CSS and JavaScript all in one file, no external libraries).

Requirements:
- A form with: Name, Email, Message (a multi-line text box) and Rating (a dropdown of 1 to 5).
- Save every submission in the browser using localStorage so it survives a page refresh.
- Show all submissions as cards, newest first, each showing the name, email, the message, a star rating display, the date submitted, and a Delete button.
- A search box that filters the list live as I type, matching name, email or message text.
- A summary section showing the total number of submissions and the average rating.
- An "Export CSV" button that downloads all submissions as a .csv file.
- Clean, modern styling with a coloured header. Make it mobile-friendly.

Give me the complete file so I can copy it, save it as index.html, and open it in my browser.
```

## Make it your own
- Add your own fields — e.g. "Company", "Phone", or a "How did you hear about us?" dropdown.
- Ask Claude to colour-code low ratings (1–2 stars) in red so complaints stand out.
- Change "Message" to "Suggestion" or "Bug report" to fit how you'll actually use it.

## Optional — full-stack version (advanced)
You do **not** need this for the course, and **no API key is required**. The browser version
above is complete on its own. If you later want submissions saved to a shared server and
database, the **`backend-reference/`** folder shows a Node.js + Express + SQLite version, with
a `Dockerfile` to deploy it. That backend stores each submission as a JSON blob and can render
its form fields from a `config.json` file.

**Data stored (backend version)**

| Field | Type | Description |
|-------|------|-------------|
| id | INTEGER | Auto-generated primary key |
| created_at | DATETIME | Timestamp of submission |
| data | TEXT | Full submission data as JSON |

**API routes (backend version)**

| Method | Path | Description |
|--------|------|-------------|
| GET | /api/config | Returns the form field configuration |
| GET | /api/submissions | List all submissions |
| POST | /api/submissions | Save a new submission |
| GET | /api/submissions/:id | Get one submission by ID |

The files in `backend-reference/` (plus `config.json` and the `Dockerfile`) are **illustrative
reference code** showing how a real backend would be wired up. Treat them as a learning
reference for when you're ready to go beyond the browser; they are not part of completing this
hands-on.

## Live URL

> **Deployed at:** _(paste your GitHub Pages URL here after deploying)_
