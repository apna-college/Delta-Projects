const express=require('express');
const app=express();
const mongoose=require('mongoose');
const path=require('path');
const Chat=require('./models/chat.js');
const methodOverride=require('method-override');

app.set('views',path.join(__dirname,"views"));
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));//req.body
app.use(methodOverride("_method"));

main()
.then(()=>{console.log("working moogoose")})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}
app.get('/',(req,res)=>{
    res.send("working")
});
//index route-- show all chats
app.get('/chats',async(req,res)=>{
    let chats=await Chat.find();
    //res.send('working properly!!');
    res.render('index.ejs',{chats});
});
//new route
app.get('/chats/new',(req,res)=>{
    //res.send('working properly!!');
    res.render('new.ejs');
});
app.post('/chats',(req,res)=>{
    let {from,msg,to}=req.body;
    let newChat=new Chat({
        from:from,
        to:to,
        msg:msg,
        created_at:new Date()
    });
    newChat.save()
    .then(()=>{
        console.log("Chat Saved!");
    })
    .catch((err)=>{
        console.log(err);
    });
    //console.log(newChat);
   // res.send("Working!!!!");
   res.redirect('index.js');
});
//edit route
app.get('/chats/:id/edit',async(req,res)=>{
    let {id}=req.params;
    let chat=await Chat.findById(id);
    //console.log(chat);
    res.render('edit.ejs',{chat});
});
//update route
app.put("/chats/:id",async(req,res)=>{
    let {id}=req.params;
    let {msg:newMsg}=req.body;
    let updatedChat=await Chat.findByIdAndUpdate(
        id,
        {msg:newMsg},
        {runValidators:true,new:true});
        console.log(updatedChat);
        res.redirect('/chats');
});
app.delete('/chats/:id',async(req,res)=>{
    let {id}=req.params;
    let deletedChat=await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect('/chats');
})
app.listen(8080,()=>{
    console.log('listening on port 8080');
});