import sqlite from "sqlite";
import sqlite3 from "sqlite3";
import bcrypt from "bcrypt";

let db;

export async function initDatabase() {
    db = await open({
        filename: "./data.db",
        driver: sqlite.Database,
    })

    await db.exec(`
        CREATE TABLE IF NOT EXISTS users(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            login TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL,
            create_at TIMESTAMP DEFAULT now(),
    )`)   
    return db;
}

export function getDatabase(){
    return db;
}