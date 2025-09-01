if(process.env.NODE_ENV != 'production'){
    require('dotenv').config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const  path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require ("connect-flash");
const passport = require ("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");


const listingRouter = require("./routs/listing.js");
const reviewRouter = require("./routs/review.js");
const userRouter = require("./routs/user.js");

let MONGO_URL = "mongodb://127.0.0.1:27017/stu_info";
// let dbUrl = process.env.ATLASDB_URL ;

main()
    .then( () => {
        console.log("connected to DB");
    })
    .catch( (err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
}

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.engine("ejs",ejsMate);
app.use(express.static(path.join(__dirname,"/public")));

const store = MongoStore.create({
    mongoUrl : MONGO_URL,
    crypto:{
        secret: process.env.SECRET
    },
    touchAfter : 24 * 60 ,
});

store.on("error",()=>{
    console.log("Error in MONGO SESSION STORE" , err);
})

const sessionOptions = {
    store,
    secret: process.env.SECRET,
    resave: false , 
    saveUninitialized: true ,
    cookie : {
        expires : Date.now() + 7 * 24 * 60 * 60 * 1000 ,
        maxAge :  7 * 24 * 60 * 60 * 1000 ,
        httpOnly : true,
    },   
};


app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.get("/registeruser", async(req,res) =>{
    let fakeUser = new User ({
        email: "ansh@gmail.com",
        username :"ansh",
    });
    let newUser = await User.register(fakeUser ,"ansh283");
    res.send(newUser);
})


app.use((req,res,next)=>{
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user ;
    next();
});


app.get("/", (req,res)=> {
    res.render("./home.ejs");
});


app.use ("/listings" , listingRouter);
app.use ("/listings/:id/stu_problem",reviewRouter);
app.use("/",userRouter);

app.use((req, res, next) => {
    next(new ExpressError(404, "page not found!"));
});

app.use((err,req,res,next)=>{
    let{statusCode = 500 , message = "something went wrong!!"} = err ;
    res.status(statusCode).render("error.ejs" , {message});
    // res.status(statusCode).send(message);
});


app.listen(8080, () => {
    console.log("server is listening on port 8080");
});     