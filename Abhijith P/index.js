const express = require("express");
const app = express();
const PORT = 8000;
const path = require("path");

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

app.listen(PORT, () => {
    console.log("app is listening on port:", PORT);
});

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/home", (req, res) => {
    res.send("hi there this is me ")
});

app.get("/rolldice", (req, res) => {
    let diceVal = Math.floor(Math.random() * 6) + 1;
    res.render("dice", { "num": diceVal });
});

app.get("/instagram/:username", (req, res) => {
    const data = require("./data.json");
    let { username } = req.params;
    const userData = data[username];
    if (userData) {
        res.render("instagram", { userData: userData });
    } else {
        res.send("sorry user not found");
    };
});

