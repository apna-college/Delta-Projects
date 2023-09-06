let url= "https://v2.jokeapi.dev/joke/Any?type=single";
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let p =document.querySelector("#text-field");
    let joke = await getJoke();

    p.innerText = joke;
});

async function getJoke() {
    let res =await axios.get(url);
    try {
        return res.data.joke;
    } catch {
        console.log("error - ", e);
        return [];
    }
}