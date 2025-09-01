const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync.js");
const stu_problem = require("../models/stu_problem.js");
const  Listing  = require("../models/listing.js");  
const {validateStu_problem , isLoggedIn} = require("../middleware.js")

const stu_problemController = require("../controllers/stu_problem.js");


//stu_problem
//post problem
router.post("/", 
    isLoggedIn ,
    validateStu_problem,
    wrapAsync(stu_problemController.post)
);

//delete problem
router.delete ("/:stu_problem_id",wrapAsync(stu_problemController.delete));


module.exports = router;