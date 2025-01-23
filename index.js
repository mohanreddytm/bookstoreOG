const express = require("express");
const app = express();

app.use(express.json());
const path = require("path");

const {open} = require('sqlite');
const sqlite3 = require('sqlite3');

const dbPath = path.join(process.cwd(), "bookstore.db");


const port = process.env.PORT || 3000;

let db = null;

const initializeDBAndServer = async () => {
    try {
        db = await open({
            filename: dbPath,
            driver: sqlite3.Database
        });
        app.listen(port, () => {
            console.log(`Server is Running at http://localhost:${port}`);
        });
    } catch (e) {
        console.log(`DB Error: ${e.message}`);
        process.exit(1);
    }
};


initializeDBAndServer();

app.get("/", (req, res) => {
    res.send("Mohan is theaaaa real hero!");
});

module.exports = app;
