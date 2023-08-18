let url="https://dog.ceo/api/breeds/image/random";
async function getImage(){
    try{
        let res=await axios.get(url);
        return res.data.message;
    }
    catch(e){
        console.log("error",e);
    }
};
let btn=document.querySelector(".button");
let p1=document.querySelector(".p1")
btn.addEventListener("click",async()=>{
   let link=await getImage();
   console.log(link);
   p1.innerHTML="<b>Link:-</b>"+link;
   img=document.querySelector(".img");
   img.setAttribute('src',link);
});
let url2="https://catfact.ninja/fact";
async function getFacts(){
    try{
        let res=await axios.get(url2);
        return res.data.fact;
    }
    catch(e){
        console.log("error",e);
    }
};
let btn2=document.querySelector(".btnn");
let p=document.querySelector(".p2");
btn2.addEventListener("click",async()=>{
    let fact=await getFacts();
    console.log(fact);
    p.innerText=fact;
    p.classList.add('paraa');           
});
