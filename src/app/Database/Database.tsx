import { Database, verbose } from "sqlite3";

const sqlite3 = verbose();
const db: Database = new sqlite3.Database(
  "./database.sqlite",
  (err: Error | null) => {
    if (err) {
      console.error("Error connecting to database:", err.message);
    } else {
      console.log("Connected to SQLite database");
    }
  }
);
db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE,
    password TEXT
)`);

export default db;
