const mongoose=require('mongoose');  //require mongoose
const Chat=require('./models/chat.js'); //require schema and model

main()                   //conn check
.then(()=>{console.log("working moogoose")})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}
//create array and insert into database
let allChats=[
    {from:'neha',
     to:'pooja',
     msg:'send me your exam sheets',
     created_at:new Date()
    },
    {from:'monika',
     to:'pooja',
     msg:'okay!!',
     created_at:new Date()
    },
    {from:'neha',
     to:'monika',
     msg:'Sure! i will send you',
     created_at:new Date()
    },
    {from:'neyha',
     to:'kirti',
     msg:'Hurray!!',
     created_at:new Date()
    },
];
Chat.insertMany(allChats);