const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');

const dbDir = path.join(__dirname, '..', 'data');
if (!fs.existsSync(dbDir)) fs.mkdirSync(dbDir, { recursive: true });

const db = new Database(path.join(dbDir, 'bookings.db'));

db.exec(`
  CREATE TABLE IF NOT EXISTS bookings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    service TEXT NOT NULL,
    date TEXT NOT NULL,
    time TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'pending',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

const queries = {
  getAll: db.prepare('SELECT * FROM bookings ORDER BY date ASC, time ASC'),
  getById: db.prepare('SELECT * FROM bookings WHERE id = ?'),
  checkConflict: db.prepare('SELECT id FROM bookings WHERE service = ? AND date = ? AND time = ? AND id != ? AND status != ?'),
  insert: db.prepare('INSERT INTO bookings (name, email, service, date, time, status) VALUES (@name, @email, @service, @date, @time, @status)'),
  updateStatus: db.prepare('UPDATE bookings SET status = ? WHERE id = ?')
};

module.exports = {
  getAll: () => queries.getAll.all(),
  getById: (id) => queries.getById.get(id),
  checkConflict: (service, date, time, excludeId = -1) =>
    queries.checkConflict.get(service, date, time, excludeId, 'cancelled'),
  insert: (booking) => {
    const result = queries.insert.run({ ...booking, status: 'pending' });
    return queries.getById.get(result.lastInsertRowid);
  },
  updateStatus: (id, status) => {
    queries.updateStatus.run(status, id);
    return queries.getById.get(id);
  }
};
