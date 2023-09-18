const apiKey="5ff3376ec3744f19a604958f539cac96";
const url="https://newsapi.org/v2/everything?q=";

window.addEventListener("load",fetchNews("Current Affairs"));

function reload(){
    window.location.reload();
}

async function fetchNews(query){
    const res=await fetch(`${url}${query}&apiKey=${apiKey}`);
    const data=await res.json();
    console.log(data);
    bindingData(data.articles);
}

function bindingData(cardArticle){
    const cardData=document.querySelector(".card_container");
    const templateData=document.querySelector("#template_card");

    cardData.innerText="";

    cardArticle.forEach((element) => {
        if(!element.urlToImage){
            return;
        }
        const cloneCard=templateData.content.cloneNode(true);
        insertData(cloneCard,element);
        clickOnCard(cloneCard,element);
        cardData.appendChild(cloneCard);
    });
}

function insertData(cloneCard,article){
    const newsImg=cloneCard.querySelector(".new_image");
    const newsTitle=cloneCard.querySelector(".news_title");
    const newsDetails=cloneCard.querySelector(".news_details");
    const newsDate=cloneCard.querySelector(".news_date");

    newsImg.src=article.urlToImage;
    newsTitle.innerText=article.title;
    newsDetails.innerText=article.description;

    const date=new Date(article.publishedAt).toLocaleString('en-US', { timeZone: 'Asia/Jakarta' });
    newsDate.innerText=`${article.source.name} : ${date}`;
}

function clickOnCard(cloneCard,article){
    cloneCard.firstElementChild.addEventListener("click",()=>{
        window.open(article.url,"_blank");
    })
}

const navLink=document.querySelectorAll(".nav_link");

for(link of navLink){
    link.addEventListener("click",openData);
}
function openData(){
    fetchNews(this.innerText);
    
}

const searchData=document.querySelector(".search_btn");
const inputData=document.querySelector(".news_input");

searchData.addEventListener("click",toSearch);

function toSearch(){
    if(inputData.value){
        fetchNews(inputData.value);
    }
    else{
        return;
    }
}

