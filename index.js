const express = require("express");
const app = express();

app.use(express.json());
const path = require("path");
const Database = require("better-sqlite3");

const dbPath = path.join(process.cwd(), "bookstore.db");

const port = process.env.PORT || 3000;

let db;

try {
    // Initialize the database
    db = new Database(dbPath, { verbose: console.log });
    console.log("Connected to the database.");
} catch (e) {
    console.error(`DB Error: ${e.message}`);
    process.exit(1);
}

// Root route
app.get("/", (req, res) => {
    res.send("Mohan is the real hero!");
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

module.exports = app;