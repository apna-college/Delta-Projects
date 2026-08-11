let url = "https://quote-garden.onrender.com/api/v3/quotes/random";
let btn = document.getElementById("btn");
let copyBtn = document.getElementById("copyBtn");
let themeBtn = document.getElementById("themeBtn");


btn.addEventListener("click", async() => {
     let qt = document.querySelector("#quote");
     qt.innerText = "Loading...";

     let quote = await getQuote();

     qt.innerHTML = '"' + quote[0] + '"';

     let atn = document.querySelector("author");
     atn.innerText = "-" + quote[1];

    console.log(quote[0]);
    console.log(quote[1]);
});

async function getQuote() {
    try {
        let res = await fetch(url);
        let data = await res.json();

        return [data.data[0].quoteText, data.data[0].quoteAuthor];
    } catch (e) {
        console.log("error - ", e);
    }
}

copyBtn.addEventListener("click", () => {
    let quote = document.getElementById("quote").innerText;
    navigator.clipboard.writeText(quote);
    alert("Quote Copied Successfilly");
});

