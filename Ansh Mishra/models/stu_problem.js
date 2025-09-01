const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stu_problemSchema = new Schema({
    problem : String,
    rating : {
        type : Number, 
        min:1,
        max: 5
    },
    createdAt :{
        type : Date,
        default : Date.now()
    } ,
    author:{
      type:Schema.Types.ObjectId,
      ref: "User",
    }
});

module.exports = mongoose.model("Stu_problem",stu_problemSchema);