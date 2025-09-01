const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const {saveRedirectUrl} = require("../middleware.js");

const userController = require("../controllers/user.js");

//getSignUp
router.get("/signup", userController.getSignUp);

//postSignUp
router.post(
    "/signup",
    wrapAsync (userController.postSignUp)
);

//getlogin
router.get("/login",userController.getlogin);


//postlogin
router.post(
    "/login",
    saveRedirectUrl,
    passport.authenticate("local",{
        failureRedirect: "/login",
        failureFlash: true,
    }),
    userController.postlogin
);


//logout
router.get(
    "/logout",
    userController.logout
)

module.exports = router ;