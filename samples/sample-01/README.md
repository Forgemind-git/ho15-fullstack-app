# HO15 Sample 1 — Expense Tracker

## What you'll build
A simple expense tracker that runs entirely in your web browser. You add what you spent,
pick a category, and the page keeps a running total per category — Food, Transport, Work
and Other. Everything is saved in your browser (localStorage), so it's still there when you
come back. No spreadsheet that breaks when two people open it, no server, no sign-up.

This folder already contains a **finished, working app** (`index.html`). Open it and use it
right away — then follow the steps below to rebuild it yourself with Claude.ai and make it
your own.

## Use it with your Claude.ai subscription
No API key needed. Just your normal Claude.ai login.

1. Open **`index.html`** from this folder by double-clicking it. It opens in your browser and
   works immediately — add an expense and watch the totals update.
2. To build your own version, open **Claude.ai** (your subscription) and paste the **example
   prompt** below into a new chat.
3. Claude will reply with one block of HTML. Click the **Copy** button on that code block.
4. Open a plain text editor (Notepad on Windows, TextEdit on Mac), paste the code, and save
   the file as **`index.html`**.
5. Double-click your saved `index.html` — your app opens in the browser. That's it, it runs.
6. To put it online for free: create a new repository on GitHub, upload your `index.html`,
   then turn on **Settings → Pages**. GitHub gives you a live link you can share.

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
- Add a "currency" symbol field so it works in £, € or ₹ instead of $.

## Optional — full-stack version (advanced)
You do **not** need this for the course. The browser version above is complete on its own.
If you later want to store data on a real server and database (so several people share the
same list), this project's **`main` branch** includes a `backend-reference/` folder showing a
Node.js + Express + SQLite version plus a `Dockerfile` to deploy it. That path needs a
terminal and a hosting account — it is an optional extra, not part of the hands-on.

## Live URL

> **Deployed at:** _(paste your GitHub Pages URL here after deploying)_
