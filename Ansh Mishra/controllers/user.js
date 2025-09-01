const User = require("../models/user.js");

//getsingup
module.exports.getSignUp = (req,res)=>{
    res.render("users/signup.ejs");
};


//post signup
module.exports.postSignUp = async (req,res)=>{
        try {
            let { username , email , password} = req.body;
            const newUser = new User ({email,username});
            let registerUser = await User.register(newUser ,password);
            // console.log(registerUser);
            req.login(registerUser,(err)=>{
                if(err){
                    return next(err);
                }
                req.flash("success","Welcome to NUERO_MENTOR");
                res.redirect("/listings");
            });
        } catch(e){
            req.flash("error", e.message);
            res.redirect("/signup");
        }
    };


//getlogin
module.exports.getlogin = (req,res)=>{
    res.render("users/login.ejs")
};


//postlogin
module.exports.postlogin = async (req,res)=>{
        req.flash("success","Welcome back to NUERO_MENTOR");
        let redirectUrl = res.locals.redirectUrl || "/listings";
        res.redirect(redirectUrl );
};

//logout
module.exports.logout = (req,res,next)=>{
        req.logout((err)=>{
            if(err){
                return next(err);
            }
            req.flash("success","you are successfully logged out!!");
            res.redirect("/listings");
        })
    };