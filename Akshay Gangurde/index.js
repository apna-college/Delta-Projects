const express = require("express");
const app = express();
const { request } = require("http");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const methodOverride = require('method-override');

app.use(express.urlencoded({ extended: true}));
app.use(methodOverride('_method'));

const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));



let posts = [
    {
        id: uuidv4(),
        username:"Lord_Krishna",
        image:"/ShriKrishn.jpg",
        comment:"I am the Supreme Deity."
    },

    {
        id: uuidv4(),
        username:"Maha_Vishnu",
        image:"/MahaVishnu.jpg",
        comment:"I create material universes and detroy them."
    },

    {
        id: uuidv4(),
        username:"Garbo_Vishnu",
        image:"/GarbhoVishnu.jpg",
        comment:"I have Created Lord Bramha."
    },
 ];


app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

app.post("/posts", (req, res) => {
    let{ username, image, comment } = req.body;
    let id = uuidv4();
    posts.push({username, id, image, comment});
    res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs", { post });

});

app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let newComment = req.body.comment;
    let post = posts.find((p) => id === p.id);
    post.comment = newComment;    
    
    res.redirect("/posts");
});


app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", {post});
});

app.delete("/posts/:id", (req, res) => {
    let { id } = req.params;
    posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts");

});

app.listen(port, () => {
    console.log("listening on port:8080");
});