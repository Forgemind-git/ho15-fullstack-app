# HO15 Sample 4 — URL Shortener & Bookmark Manager

## What you'll build
A personal bookmark manager that turns long, ugly links into short codes and keeps them
organised with tags. You paste a URL, optionally give it a custom alias and some tags, and the
app stores it in your browser (localStorage). You can copy the short link, open it (which
counts a click), filter your bookmarks by tag, and delete ones you no longer need. No server,
no database account, no sign-up.

This folder already contains a **finished, working app** (`index.html`). Open it and use it
right away — then follow the steps below to rebuild it yourself with Claude.ai.

## Use it with your Claude.ai subscription
No API key needed. Just your normal Claude.ai login.

1. Open **`index.html`** from this folder by double-clicking it. It works immediately — save a
   link with a couple of tags and watch the tag filter buttons appear.
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
You do **not** need this for the course. The browser version above is complete on its own.
If you later want bookmarks shared across devices via a real server and database, this
project's **`main` branch** includes a `backend-reference/` folder with a Node.js + Express +
SQLite version and a `Dockerfile`. That path needs a terminal and a hosting account — it is an
optional extra, not part of the hands-on.

## Live URL

> **Deployed at:** _(paste your GitHub Pages URL here after deploying)_
