const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("mohan is the real hero");
}
)

app.listen(3000, () => {
    console.log("running at 3000")
})


module.exports = app;