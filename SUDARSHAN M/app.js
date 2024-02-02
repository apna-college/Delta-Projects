if(process.env.NODE_ENV!="production"){
    require('dotenv').config()
}
//console.log(process.env.SECRET) 
const express=require("express");
const app=express();
const mongoose=require("mongoose");
const path=require("path");
const methodOverride=require("method-override");
const ejsMate=require("ejs-mate");
const session=require("express-session");
const MongoStore = require('connect-mongo');
const listings=require("./routes/listing.js");
const reviews=require("./routes/review.js");
const users=require("./routes/user.js");
const flash=require("connect-flash");
const passport=require("passport");
const LocalStrategy=require("passport-local");
const User=require("./models/User.js");
const ExpressError=require("./utils/ExpressError.js");
const dbUrl=process.env.ATLASDB_URL;
const store=MongoStore.create({
    mongoUrl:dbUrl,
    touchAfter:24*3600,
    secret: process.env.SECRET
  })
  store.on("error",()=>{
    console.log("error in mongo session store",err);
  });
const sessionOptions={
    store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie:{
        expires:Date.now()+7*24*60*60*1000,
        maxAge:7*24*60*60*1000,
        httpOnly:true
    }
}
//connect local database mongodb
main().then(()=>{
    console.log("connected to db");
})
.catch((err)=>{
    console.log(err);
})
async function main(){
    // await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
    await mongoose.connect(dbUrl);
}

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.urlencoded({extended:true}))
app.use(methodOverride("_method"));
app.engine("ejs",ejsMate);
app.use(express.static(path.join(__dirname,"/public")));

// app.get("/",(req,res)=>{
//     res.send("root");
// })

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// app.get("/demouser",async(req,res)=>{
//     let fakeUser=new User({
//         email:"sudarshan@gmail.com",
//         username:"sudarshan2001"
//     })
//     let demouser=await User.register(fakeUser,"hello");
//     res.send(demouser);
// })

app.use((req,res,next)=>{
    res.locals.success=req.flash("success");
    res.locals.error=req.flash("error");
    res.locals.curUser=req.user;
    next();
})

app.use("/listings",listings);
app.use("/listings/:id/reviews",reviews);
app.use("/",users);
app.all("*",(req,res,next)=>{
    next(new ExpressError(404,"404 :page not found"));
})
app.use((err,req,res,next)=>{
    let {statusCode=500,message="something went wrong"}=err;
    res.status(statusCode).render("listings/error.ejs",{message});
})
//connect server and listen for requests
app.listen(8080,(req,res)=>{
    console.log("server connected on port:8080");
})

















// //sample model
// app.get("/testmodel",async(req,res)=>{
//     const sampleListiing=new Listing({
//         title:"D farm house",
//         description:"best view ever",
//         price:1500,
//         location:"pamurai,anantapur,a.p",
//         country:"india"
//     })
//     await sampleListiing.save().then(()=>{
//         console.log("sample SAVED to db");
//         res.send("data saved");
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
// })

