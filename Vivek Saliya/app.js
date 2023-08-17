let url = "https://quote-garden.onrender.com/api/v3/quotes/random";
let btn = document.getElementById("btn");

btn.addEventListener("click", async() => {
    let quote = await getQuote();
    console.log(quote[0]);
    console.log(quote[1]);

    let qt = document.querySelector("#quote");
    // let ans = quote[0].toUpperCase();
    qt.innerHTML = '"' + quote[0] + '"';

    let ath = document.querySelector("#author");
    ath.innerText = "- " + quote[1];
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