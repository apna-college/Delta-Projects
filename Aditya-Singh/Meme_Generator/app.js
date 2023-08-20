let meme = document.getElementById("meme");
let memeTitle = document.getElementById("title");
let memeBtn = document.getElementById("get_meme_btn");

let url = " https://meme-api.com/gimme";

memeBtn.innerText = "Click me to get Meme";

async function getMeme(){
    let res = await axios.get(url);

    meme.setAttribute("src",res.data.url);
    memeTitle.innerText = res.data.title;

    memeBtn.innerText = "Click me to get new Meme"
}

memeBtn.addEventListener("click", getMeme);