const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');

const dbDir = path.join(__dirname, '..', 'data');
if (!fs.existsSync(dbDir)) fs.mkdirSync(dbDir, { recursive: true });

const db = new Database(path.join(dbDir, 'requests.db'));

db.exec(`
  CREATE TABLE IF NOT EXISTS requests (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    employee_name TEXT NOT NULL,
    leave_type TEXT NOT NULL,
    start_date TEXT NOT NULL,
    end_date TEXT NOT NULL,
    reason TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'pending',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

const queries = {
  getAll: db.prepare('SELECT * FROM requests ORDER BY created_at DESC'),
  getById: db.prepare('SELECT * FROM requests WHERE id = ?'),
  insert: db.prepare(`
    INSERT INTO requests (employee_name, leave_type, start_date, end_date, reason)
    VALUES (@employee_name, @leave_type, @start_date, @end_date, @reason)
  `),
  updateStatus: db.prepare(`
    UPDATE requests SET status = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?
  `)
};

module.exports = {
  getAll: () => queries.getAll.all(),
  getById: (id) => queries.getById.get(id),
  insert: (req) => {
    const result = queries.insert.run(req);
    return queries.getById.get(result.lastInsertRowid);
  },
  updateStatus: (id, status) => {
    queries.updateStatus.run(status, id);
    return queries.getById.get(id);
  }
};
