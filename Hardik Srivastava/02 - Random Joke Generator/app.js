let btn = document.querySelector("button");
let h2 = document.querySelector("h2");
let url = "https://icanhazdadjoke.com/";

btn.addEventListener("click", async () => {
  let jokes = await getJokes();
  h2.style.color = "black";
  h2.style.backgroundColor = "#F9CA3B";
  h2.style.border = "3px solid black";
  h2.innerHTML = `<img src="bg.png" alt="bg"><br> ${jokes}`;
  btn.innerText = "Generate More Jokes";
  h2.innerHTML = `<img src="bg.png" alt="bg"><br> ${jokes}`;
});



async function getJokes() {
  try {
    const config = { headers: { Accept: "application/json" } };
    let res = await axios.get(url, config);
    console.log(res.data.joke);
    return res.data.joke;
  } catch (error) {
    console.log(error);
  }
}
