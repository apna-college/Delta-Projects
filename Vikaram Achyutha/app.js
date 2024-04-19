const apikey="80dc4d48d5f04eb7b83412bcd2a2a352";
let container=document.querySelector(".text");
let input=document.querySelector("#search-text");
let btn=document.querySelector("#search-btn");
let result=document.querySelector(".result");
let heading=document.querySelector("h1");
btn.addEventListener("click",async()=>{
    container.innerText="";
    result.innerText="";
    let query=input.value.trim();
    console.log(query);
    if(query !=""){
        try{
            heading.innerText=`Top Updates On ${query} Today`
            await getNews(query);
        }catch(err){
            heading.innerText="Can't Fetch News";
            result.innerText=`unable to fetch news by query..${err}`;   
        }
    }else{
        heading.innerText="Can't Fetch News";
        result.innerText=`Query is Empty....unable to fetch news..`;  
    }
})
async function getNews(query){
    try{
        let url=`https://newsapi.org/v2/everything?q=${query}&apiKey=${apikey}`;
        let res=await fetch(url);
        console.log(res);
        let validRes=await res.json();
        console.log(validRes);
        let arr=validRes.articles;
        if(arr.length!=0){
            console.log(arr);
            MakeConatiner(arr);
        }else{
            result.innerText=`nothing to fetch about ${query}...please try aging with similar terms`;
        }
    }catch(err){
        heading.innerText="Can't Fetch News";
        result.innerText=`unable to fetch news..${err}`; 
    }
}
function MakeConatiner(arr){
    arr.forEach((article)=>{
        if(article.title!="[Removed]"){
              let card= createCard(article);
            container.appendChild(card);
            card.addEventListener("click",()=>{
                window.open(article.url,"_blank");
            })
        }
    })    
}
function createCard(article){
    let card=document.createElement("div");
    card.classList.add("card");
    let img=document.createElement("img");
    let title=document.createElement("p");
    let text=document.createElement("p");
    title.classList.add("title");
    img.src=article.urlToImage;
    img.alt=article.title;
    const truncatedTitle=article.title.length > 30 ? article.title.slice(0,30)+"..." : article.title;
    title.innerText=truncatedTitle;
    const truncatedDesc=article.description.length > 150 ? article.description.slice(0,150)+"..." : article.title;
    text.innerText=truncatedDesc;
    card.append(img);
    card.append(title);
    card.append(text); 
    return card;    
}



(async()=>{
    await getNews("ai");
})();





