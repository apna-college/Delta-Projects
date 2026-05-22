const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.use(express.static(path.join(__dirname, "/public/js")));
app.use(express.static(path.join(__dirname, "/public/css")));


app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res)=>{
    res.send("<h1>welcome to the resume platform<h1>");
});

app.get("/resume/:name", (req, res) => {
    const {name} = req.params;
    const resumeData = require("./data.json");
    const data = resumeData[name];

    if(data){
        res.render("index.ejs", { data });
    } else{
        res.render("error.ejs")
    }
});



app.listen(port, () =>{
    console.log(`listening on port ${port}`);
});