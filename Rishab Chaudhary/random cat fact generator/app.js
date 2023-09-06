let btn=document.querySelector("button");
async function fact(){
  try{  let res = await axios.get("https://catfact.ninja/fact");
 p.innerHTML= res.data.fact}
catch(e){
    console.log("Error:",e);
}}
btn.addEventListener("click",()=>{
    fact();
});
let p=document.querySelector("p");
