let btn = document.querySelector("button");
let para = document.querySelector("p");

let url = "https://catfact.ninja/fact";

async function getFacts() {
    try {
        let res = await axios.get(url);
        return res.data.fact;
    } catch (err) {
        return (`Error : ${err}`);
    }
}

btn.addEventListener("click", async () => {
    let data = await getFacts();
    para.innerText = `${data}`;
});