const mongoose = require("mongoose");

const OrdersSchema = new mongoose.Schema({
    name: {
        type : String,
        required : true
    },
    qty: {
        type : Number,
        min:1,
        required : true
    },
    
    price: {
        type : Number,
        required : true
    },
    mode: {
       type: String,
       required : true,
       enum : ["buy" , "sell"]
    },
    
})

module.exports = {OrdersSchema};