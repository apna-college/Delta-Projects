let btn = document.querySelector("button");
let para = document.querySelector("#quote");
let author = document.querySelector("#author");

let url = "https://dummyjson.com/quotes/random";

async function getQuote() {
    try {
        let res = await axios.get(url);
        return res.data;
    } catch (err) {
        return (`Error : ${err}`);
    }
}

btn.addEventListener("click", async () => {
    let data = await getQuote();
    para.innerText = `${data.quote}`;
    author.innerText = `- ${data.author}`;
});