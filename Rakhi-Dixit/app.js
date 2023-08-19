let res=[];

let url="https://type.fit/api/quotes";


let btn=document.querySelector("button");
btn.addEventListener("click",async()=>{
btnFlash(btn);

  let quote= await getquote();
let author=await getName();
 
 let h1=document.querySelector("#result");
 let h2=document.querySelector("#name");
 h1.innerHTML="";
 h2.innerHTML="";
h1.innerHTML=quote;
h2.innerHTML=author;


});

function btnFlash(btn){
btn.classList.add("flash");
setTimeout(function(){

btn.classList.remove("flash");

},200);

}

async function getquote(){
try{
res=await axios.get(url);
let idx=  Math.floor(Math.random()*15);


return (res.data[idx].text);
}
catch(err){

    console.log("ERROR=",err);
    return "No result found";
    }

}

async function getName(){
    try{
    res=await axios.get(url);
    let idx=  Math.floor(Math.random()*15);
    
    
    return (res.data[idx].author);
    }
    catch(err){
    
        console.log("ERROR=",err);
        return "No result found";
        }}
    
let img=document.querySelector(".img");
let images=["./pics/pic1.png","./pics/pic2.png","./pics/pic3.png","./pics/pic4.png","./pics/pic5.png","./pics/pic6.png","./pics/pic7.png"]
setInterval(function(){
let random=Math.floor(Math.random()*6);
img.src=images[random];



},4000);


    

    

