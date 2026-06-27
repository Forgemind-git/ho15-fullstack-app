const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');

const dbDir = path.join(__dirname, '..', 'data');
if (!fs.existsSync(dbDir)) fs.mkdirSync(dbDir, { recursive: true });

const db = new Database(path.join(dbDir, 'expenses.db'));

db.exec(`
  CREATE TABLE IF NOT EXISTS expenses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    description TEXT NOT NULL,
    amount REAL NOT NULL,
    category TEXT NOT NULL,
    date TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

const queries = {
  getAll: db.prepare('SELECT * FROM expenses ORDER BY date DESC, created_at DESC'),
  getById: db.prepare('SELECT * FROM expenses WHERE id = ?'),
  insert: db.prepare('INSERT INTO expenses (description, amount, category, date) VALUES (@description, @amount, @category, @date)'),
  delete: db.prepare('DELETE FROM expenses WHERE id = ?'),
  sumByCategory: db.prepare(`
    SELECT category, SUM(amount) as total, COUNT(*) as count
    FROM expenses
    GROUP BY category
    ORDER BY total DESC
  `)
};

module.exports = {
  getAll: () => queries.getAll.all(),
  getById: (id) => queries.getById.get(id),
  insert: (expense) => {
    const result = queries.insert.run(expense);
    return queries.getById.get(result.lastInsertRowid);
  },
  delete: (id) => queries.delete.run(id),
  sumByCategory: () => queries.sumByCategory.all()
};
