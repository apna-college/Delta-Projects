let url="https://quote-garden.onrender.com/api/v3/quotes";
let btn=document.querySelector('.btn');
let p=document.querySelector('div #output');

async function getFoodFacts()
{
    try{
        let res=await axios.get(url);
        return res.data.data;
    }
    catch(err)
    {
        console.log(err);
    }
}

btn.addEventListener("click",async ()=>{
     let quotes=await getFoodFacts();
     let rand=Math.floor(Math.random()*9)+1;
     p.innerText=quotes[rand].quoteText;
     //console.log(quotes[rand].quoteText);
     
    
})
