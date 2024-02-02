const Listing=require("./models/Listing.js");
const ExpressError = require("./utils/ExpressError.js");
const {reviewSchema}=require("./schema.js");
const Review = require("./models/Review.js");


module.exports.isLoggedIn= (req,res,next)=>{
    if(!req.isAuthenticated()){
    req.session.redirectUrl=req.originalUrl;
    req.flash("error","You must be logged in to browse!");
    return res.redirect("/login");
    }
    next();
}

module.exports.saveredirectUrl=(req,res,next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl=req.session.redirectUrl;
    }
    next();
}

module.exports.isOwner=async (req,res,next)=>{
    let {id}=req.params;
    let listing=await Listing.findById(id);
    if(!listing.owner._id.equals(res.locals.curUser._id)){
        req.flash("error","You are not owner of this listing");
        return res.redirect(`/listings/${id}`);   
    }
    next();
}

module.exports.validateReview=(req,res,next)=>{
    let {error}=reviewSchema.validate(req.body);
    if(error){
        let errMsg=error.details.map((el)=>el.message).join(",");
        throw new ExpressError(400,errMsg);
    }else{
        next();
    }
};

module.exports.isReviewAuthor=async (req,res,next)=>{
    let {id,reviewid}=req.params;
    let review=await Review.findById(reviewid);
    if(!review.author.equals(req.user._id)){
        req.flash("error","You are not author!");
        return res.redirect(`/listings/${id}`);
    }
    next();
}