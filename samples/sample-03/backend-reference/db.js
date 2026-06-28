const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');

const dbDir = path.join(__dirname, '..', 'data');
if (!fs.existsSync(dbDir)) fs.mkdirSync(dbDir, { recursive: true });

const db = new Database(path.join(dbDir, 'submissions.db'));

db.exec(`
  CREATE TABLE IF NOT EXISTS submissions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    data TEXT NOT NULL
  )
`);

const queries = {
  getAll: db.prepare('SELECT id, created_at, data FROM submissions ORDER BY created_at DESC'),
  getById: db.prepare('SELECT id, created_at, data FROM submissions WHERE id = ?'),
  insert: db.prepare('INSERT INTO submissions (data) VALUES (?)'),
  count: db.prepare('SELECT COUNT(*) as total FROM submissions')
};

module.exports = {
  getAll: () => queries.getAll.all().map(r => ({ ...r, data: JSON.parse(r.data) })),
  getById: (id) => {
    const row = queries.getById.get(id);
    if (!row) return null;
    return { ...row, data: JSON.parse(row.data) };
  },
  insert: (data) => {
    const result = queries.insert.run(JSON.stringify(data));
    return queries.getById.get(result.lastInsertRowid);
  },
  count: () => queries.count.get().total
};
