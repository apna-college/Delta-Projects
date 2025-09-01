const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const stu_problem = require('./stu_problem.js');


const listingSchema = new Schema ({
    email : {
        type : String,
        required : true
    },  
    name : String ,
    family_background : String ,
    skills : String ,
    challanges : String ,
    goals : String ,
    higher_studies : String ,
    image : {
      url : {
        type:String,
        default : "https://imgs.search.brave.com/IosFfAUW198am6vMcV2nU_7N6dRiqTHJ0SmoX0X27mY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzJjLzQ3/L2Q1LzJjNDdkNWRk/NWI1MzJmODNiYjU1/YzRjZDZmNWJkMWVm/LmpwZw",
      },
      filename : {
        type:String,
        default :"filename.jpg"
      }
    },
    stu_problems :[
      {
      type : Schema.Types.ObjectId,
      ref : "Stu_problem"
      } ,
    ],
    owner :{
      type:Schema.Types.ObjectId,
      ref: "User",
    }
});


listingSchema.post("findOneAndDelete",async (listing)=>{
    if(listing){
      await stu_problem.deleteMany({_id:{$in:listing.stu_problems}});
    }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;

