# HO15 Sample 4 — URL Shortener & Bookmark Manager (reference)

## What you'll build
A personal bookmark manager that turns long, ugly links into short codes and keeps them
organised with tags. You paste a URL, optionally give it a custom alias and some tags, and the
app stores it in your browser (localStorage). You can copy the short link, open it (which
counts a click), filter your bookmarks by tag, and delete ones you no longer need. No server,
no database account, no sign-up.

This is the **reference version** — `index.html` in this folder is the complete, working app.

## Use it with your Claude.ai subscription
No API key needed. Just your normal Claude.ai login.

1. Open **`index.html`** from this folder by double-clicking it. It works immediately — save a
   link with a couple of tags and watch the tag filter buttons appear.
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
Build me a single-file URL shortener and bookmark manager as one self-contained index.html (HTML, CSS and JavaScript all in one file, no external libraries).

Requirements:
- A form to save a link with: Original URL (required), Custom Alias (optional) and Tags (optional, comma-separated).
- If the URL doesn't start with http, add https:// automatically.
- If no alias is given, generate a random 6-character short code. Reject a save if that alias/code is already used.
- Save every bookmark in the browser using localStorage so it survives a page refresh.
- Show all bookmarks as cards, newest first, each showing the short code, the original URL, its tags, and a click count, with buttons: Open (opens the URL in a new tab and increases its click count), Copy link, and Delete.
- Filter buttons built automatically from all the unique tags, plus an "All" button.
- A summary section showing the number of saved URLs and the total clicks.
- Clean, modern styling with a coloured header. Make it mobile-friendly.

Give me the complete file so I can copy it, save it as index.html, and open it in my browser.
```

## Make it your own
- Add a "notes" field so you remember why you saved each link.
- Ask Claude to add a "favourite" star that pins your most-used links to the top.
- Change the random code length, or let aliases include emoji.

## Optional — full-stack version (advanced)
You do **not** need this for the course, and **no API key is required**. The browser version
above is complete on its own. If you later want short links that work for anyone (a real
redirect from a server), the **`backend-reference/`** folder shows a Node.js + Express + SQLite
version, with a `Dockerfile` to deploy it.

**Data stored (backend version)**

| Field | Type | Description |
|-------|------|-------------|
| id | INTEGER | Auto-generated primary key |
| original_url | TEXT | The full original URL |
| short_code | TEXT | Unique short code |
| click_count | INTEGER | Number of times the link was visited |
| created_at | DATETIME | When the link was created |

**API routes (backend version)**

| Method | Path | Description |
|--------|------|-------------|
| POST | /api/shorten | Shorten a URL, returns the short link |
| GET | /:code | Redirect to original URL (increments click count) |
| GET | /api/links | List all short links |

The files in `backend-reference/` and the `Dockerfile` are **illustrative reference code**
showing how a real backend would be wired up. Treat them as a learning reference for when
you're ready to go beyond the browser; they are not part of completing this hands-on.

## Live URL

> **Deployed at:** _(paste your GitHub Pages URL here after deploying)_
