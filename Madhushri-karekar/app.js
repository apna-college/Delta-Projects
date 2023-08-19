let url = "https://quote-garden.onrender.com/api/v3/quotes";
let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  show();
});

async function show() {
  let quotes = await getQuotes();
  let random = Math.floor(Math.random() * 10);
  let p = document.querySelector("#result");
  for (let i = random; i < quotes.length; i++) {
    p.innerText = quotes[i].quoteText;

    break;
  }
}

async function getQuotes() {
  try {
    let res = await axios.get(url);
    return res.data.data;
  } catch (error) {
    return [];
  }
}
