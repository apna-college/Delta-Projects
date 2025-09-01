const stu_problem = require("../models/stu_problem.js");
const  Listing  = require("../models/listing.js");

//post
module.exports.post = async (req, res)=>{
    let listing =await Listing.findById(req.params.id);
    let newStu_problem = new stu_problem(req.body.stu_problem);
    newStu_problem.author = req.user._id;
    listing.stu_problems.push(newStu_problem);
    console.log(newStu_problem); 
    await newStu_problem.save();
    await listing.save();

    res.redirect(`/listings/${listing._id}`);
};


//delete
module.exports.delete = async (req, res)=>{
    let {id , stu_problem_id} = req.params;
    await Listing.findByIdAndUpdate(id,{$pull : {stu_problems:stu_problem_id}});
    await stu_problem.findByIdAndDelete(stu_problem_id);

    res.redirect(`/listings/${id}`);
};