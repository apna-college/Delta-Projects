A Simple Guide to EJS with Express

This project is a very simple guide to understanding the basics of EJS (Embedded JavaScript) and how it works with Node.js and Express. It's designed for students who want to see the core concepts in action.

We have three main routes, each one teaching a different concept:

Home Page (/): A basic "hub" page.

Dice Roll (/rolldice): Shows how to pass a single, simple variable from your server to your HTML.

Instagram Profile (/instagram/:username): Shows how to use dynamic routes and pass complex data (like objects and arrays) to your HTML.

Technologies Used

Node.js

Express

EJS (Embedded JavaScript)

How to Run This Project

Install Dependencies:

npm install


Run the Server:

npm start


(This will use nodemon index.js as defined in your package.json)

Open in Browser:
Visit http://localhost:8000

What This Project Demonstrates

1. The Core EJS Setup (in index.js)

Before we can render anything, we have to tell Express two things:

What template engine to use: We tell it to use "ejs".

Where to find the template files: We tell it to look in the /views folder.

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));


2. Example 1: The Dice Roll (A Simple Variable)

This page shows how to pass one piece of data from the server to HTML.

The Server (index.js)
First, we create a random number. Then, we res.render() our "dice" template and pass the number as an object.

app.get("/rolldice", (req, res) => {
    let diceVal = Math.floor(Math.random() * 6) + 1;
    res.render("dice", { num: diceVal });
});


The Template (views/dice.ejs)
Now in our HTML, we can use EJS tags to access that num variable.

<%= ... %> (EJS Output Tag): This prints the value of the variable directly into the HTML.

<% ... %> (EJS Logic Tag): This runs JavaScript code but doesn't print anything. It's perfect for if statements or for loops.

<h1>The random dice value is <%= num %></h1>

<% if (num == 6) { %>
    <h2>Congratulations, you rolled a 6!</h2>
<% } %>


3. Example 2: The Instagram Page (A Complex Object)

This is a more powerful example. It shows how to use a dynamic route to load different data.

The Server (index.js)
We use :username in the URL to create a "dynamic" route. This lets us grab the username the user is visiting.

app.get("/instagram/:username", (req, res) => {
    let { username } = req.params;
    const userData = data[username];

    if (userData) {
        res.render("instagram", { userData: userData });
    } else {
        res.send("Sorry, user not found!");
    }
});


The Template (views/instagram.ejs)
Now we have access to the entire userData object. We can use dot notation (like userData.name) to access its properties. We can also use a logic tag to loop over the posts array.

<h1><%= userData.name %></h1>

<p>Followers: <%= userData.followers %></p>
<p>Following: <%= userData.following %></p>

<hr />

<% for (let post of userData.posts) { %>
    <img src="<%= post.image %>">
    <p>Likes: <%= post.likes %></p>
<% } %>


Available Pages to Visit

http://localhost:8000/ (The home page)

http://localhost:8000/rolldice (Roll a random die)

http://localhost:8000/instagram/cats (See the cats profile)

http://localhost:8000/instagram/dogs (See the dogs profile)