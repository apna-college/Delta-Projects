let url = 'https://quote-garden.onrender.com/api/v3/quotes';
let btn = document.querySelector(".btn");
let rand=Math.floor(Math.random()*10);

btn.addEventListener("click", async () => {

    let quote = await getQuote();
    console.log(quote);

    let author = await getAuthor();
    console.log(author);

    let p=document.querySelector("#result");
    p.innerText=quote;

    let h4=document.querySelector("h4");
    h4.innerText=`Author: ${author}`;

    resetRand();
});

async function getQuote() {
    
    try {
        let conf ={ headers: { Accept: "application/json" } };
        let res = await axios.get(url,conf);
        return res.data.data[rand].quoteText;
} 
    catch (e) {
        console.log(e);
    }
};

async function getAuthor() {
    
    try {
        let conf ={ headers: { Accept: "application/json" } };
        let res = await axios.get(url,conf);
        return res.data.data[rand].quoteAuthor;
} 
    catch (e) {
        console.log(e);
    }
};

function resetRand(){
    rand=Math.floor(Math.random()*10);
}


