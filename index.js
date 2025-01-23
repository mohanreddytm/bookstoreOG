const express = require("express");
const app = express();

app.use(express.json());
app.get("/", (req, res) => {
    res.send("Mohan is the real hero!");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app;
