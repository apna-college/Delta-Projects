let btn=document.querySelector("button");
btn.addEventListener("click",async()=>{

let r=await getFacts();
let p=document.querySelector("p");
p.innerText=r;
p.setAttribute("color","white");
})
async function getFacts()
{
    try{
    let res=await axios.get("https://catfact.ninja/fact");
    console.log(res.data.fact);
    return res.data.fact;
    }
    catch(error)
    {
        return "No Fact Found"
    }
    
}