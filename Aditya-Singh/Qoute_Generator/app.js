let qoute = document.getElementById("qoute");
let author = document.getElementById("author");

let btn = document.getElementById("btn");

let url = "https://api.quotable.io/random";
async function getQuote() {
    author.innerText = "";
    qoute.innerText = "";
    let response = await axios.get(url);

    qoute.innerText = response.data.content;
    author.innerText = response.data.author;
}

btn.addEventListener("click",getQuote);