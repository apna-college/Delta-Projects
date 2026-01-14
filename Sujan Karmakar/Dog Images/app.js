let btn = document.querySelector("button");
let box = document.querySelector(".content-container");

let url = "https://dog.ceo/api/breeds/image/random";

async function getImage() {
    try {
        let res = await axios.get(url);
        return res.data.message;
    } catch (err) {
        return (`Error : ${err}`);
    }
}

btn.addEventListener("click", async () => {
    box.style.backgroundImage = `url(${await getImage()})`;
    box.style.backgroundSize = "cover";
    box.style.backgroundRepeat = "no-repeat";
});