let btn = document.querySelector("button");
let img = document.querySelector("img");
let url = "https://dog.ceo/api/breeds/image/random";

btn.addEventListener("click", async () => {
  let link = await getImage();
  img.setAttribute("src", link);
  img.style.border = "3px solid black";
  img.style.borderRadius = "10px";
});

async function getImage() {
  try {
    let res = await axios.get(url);
    return res.data.message;
  } catch (error) {
    return "No Image found";
  }
}
