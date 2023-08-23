let url="https://api.quotable.io/quotes/random";

let btn=document.querySelector("button");
btn.addEventListener("click",async()=>{
    let quote=await getQuotes();
    let res=document.querySelector("#result");
    res.innerText=quote;
})

async function getQuotes(){
   try{
    let res= await axios.get(url);
    return res.data[0].content;
   }catch(e){
    console.log("Error is :",e);
    return "Their is Some erro in getting data";
   }
}