const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');

const dbDir = path.join(__dirname, '..', 'data');
if (!fs.existsSync(dbDir)) fs.mkdirSync(dbDir, { recursive: true });

const db = new Database(path.join(dbDir, 'links.db'));

db.exec(`
  CREATE TABLE IF NOT EXISTS links (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    original_url TEXT NOT NULL,
    short_code TEXT NOT NULL UNIQUE,
    click_count INTEGER DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

const queries = {
  getAll: db.prepare('SELECT * FROM links ORDER BY created_at DESC'),
  getByCode: db.prepare('SELECT * FROM links WHERE short_code = ?'),
  getById: db.prepare('SELECT * FROM links WHERE id = ?'),
  codeExists: db.prepare('SELECT id FROM links WHERE short_code = ?'),
  insert: db.prepare('INSERT INTO links (original_url, short_code) VALUES (@original_url, @short_code)'),
  incrementClick: db.prepare('UPDATE links SET click_count = click_count + 1 WHERE short_code = ?')
};

function generateCode(length = 6) {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code = '';
  for (let i = 0; i < length; i++) code += chars[Math.floor(Math.random() * chars.length)];
  return code;
}

function uniqueCode() {
  let code;
  let attempts = 0;
  do {
    code = generateCode();
    attempts++;
    if (attempts > 20) throw new Error('Could not generate unique code');
  } while (queries.codeExists.get(code));
  return code;
}

module.exports = {
  getAll: () => queries.getAll.all(),
  getByCode: (code) => queries.getByCode.get(code),
  insert: (originalUrl) => {
    const short_code = uniqueCode();
    const result = queries.insert.run({ original_url: originalUrl, short_code });
    return queries.getById.get(result.lastInsertRowid);
  },
  incrementClick: (code) => queries.incrementClick.run(code)
};
