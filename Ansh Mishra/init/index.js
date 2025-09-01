const mongoose = require("mongoose");
const initData = require("./data.js");
const  Listing  = require("../models/listing.js");


let MONGO_URL = "mongodb://127.0.0.1:27017/stu_info";

main()
    .then( () => {
        console.log("connected to DB");
    })
    .catch( (err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () =>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj)=>({...obj,owner:"6886d3e9a55c72a26101b852"}));
    await Listing.insertMany(initData.data);
    console.log("data is initialized");
}

initDB();