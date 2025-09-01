const  Listing  = require("../models/listing.js");

//index 
module.exports.index = async (req,res) => {
    const allListings = await Listing.find();
    res.render("listings/index.ejs",{allListings})
};

//new
module.exports.new = (req,res)=>{
    res.render("listings/new.ejs");
};

//create
module.exports.create =  async (req, res, next) => {  // Then wrapAsync the handler
    const listing = new Listing(req.body.listing);
    if(typeof req.file !== "undefined"){
        let url = req.file.path ;
        let filename = req.file.filename ;
        listing.image = {url,filename};
        await listing.save();
    }
    listing.owner = req.user._id;
    await listing.save();
    req.flash("success","New student Added!!");
    res.redirect("/listings");
    };


//show
module.exports.show = async (req,res) =>{
    const id = req.params.id;
    const listing = await Listing.findById(id).populate("stu_problems").populate("owner");
    if(! listing){
        req.flash("error","student does not exist!!");
        return res.redirect("/listings");
    }
    res.render("listings/show.ejs",{listing});
};

//edit
module.exports.edit = async(req,res)=>{
    const id = req.params.id;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs",{listing});
};

//update
module.exports.update = async (req,res)=>{
    console.log(req.body.listing);
    const {id} = req.params;
    let listing = await Listing.findByIdAndUpdate(id,{...req.body.listing});
    if(typeof req.file !== "undefined"){
        let url = req.file.path ;
        let filename = req.file.filename ;
        listing.image = {url,filename};
        await listing.save();
    }
    req.flash("success","student updated!!");
    res.redirect(`/listings/${id}`);
};

//delete
module.exports.delete = async (req,res) =>{
    const id = req.params.id;
    await Listing.findByIdAndDelete(id);
    req.flash("success","student Deleted!!");
    res.redirect("/listings");
};