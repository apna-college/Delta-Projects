let url = "https://v2.jokeapi.dev/joke/Any?safe-mode";
let btn = document.querySelector("button");

btn.addEventListener("click", async () =>{
    let joke = await getJokes();
    let list = document.querySelector(".result");
    list.innerText = [];
    let li = document.createElement("li");
    li.innerHTML = joke;
    list.appendChild(li).style.listStyleType = "none";
});

async function getJokes () {
    try{
        let res = await axios(url);
         return res.data.setup || res.data.joke;
    } catch (e) {
        console.log("error :", e);
        return [];
    }
};