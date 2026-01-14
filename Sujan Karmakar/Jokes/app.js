let btn = document.querySelector("button");
let joke = document.querySelector("#joke");
let pLine = document.querySelector("#punchline");
let type = document.querySelector("#type");

let url = "https://official-joke-api.appspot.com/random_joke";

async function getJoke() {
    try {
        let res = await axios.get(url);
        return res;
    } catch (err) {
        return (`Error : ${err}`);
    }
}

btn.addEventListener("click", async () => {
    joke.innerText = "";
    punchline.innerText = "";
    type.innerText = "";
    let msg = await getJoke();
    joke.innerText = msg.data.setup;
    pLine.innerText = msg.data.punchline;
    type.innerText = `Type : ${msg.data.type}`;
});