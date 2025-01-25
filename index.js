const express = require("express");
const app = express();
const cors = require("cors");

const corsConfig = {
    origin: "*",
    credential:true,
    methods: ["GET","POST","PUT","DELETE"],
};

app.use(express.json());
app.use(cors(corsConfig));
const path = require("path");

const {open} = require('sqlite');
const sqlite3 = require('sqlite3');

const dbPath = path.join(__dirname, "bookstore.db");

const port = process.env.PORT || 3000;

let db = null;

const initializeDBAndServer = async () => {
    try {
        db = await open({
            filename: dbPath,
            driver: sqlite3.Database
        });
        app.listen(port, () => {
            console.log(`has has has Server is Running at http://localhost:${port}`);
        });
    } catch (e) {
        console.log(`DB Error: ${e.message}`);
        process.exit(1);
    }
};


initializeDBAndServer();

app.get("/", async (req, res) => {
    const query = 'SELECT * FROM user;';
    const response = await db.all(query);

    res.send(response);
});

module.exports = app;
