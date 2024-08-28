let btn = document.querySelector("button");
let h2 = document.querySelector("h2");
let url = "https://catfact.ninja/fact";


btn.addEventListener("click", async () => {
  let fact = await getFacts();
  h2.style.color = "black";
  h2.style.backgroundColor = "#F9CA3B";
  h2.style.border = "3px solid black";
  h2.innerHTML = `<img src="bg.png" alt="bg"><br> ${fact}`;
  btn.innerText = "Generate New More Facts";
  h2.innerHTML = `<img src="bg.png" alt="bg"><br> ${fact}`;
});


async function getFacts() {
  try {
    let res = await axios.get(url);
    return res.data.fact;
  } catch (error) {
    return `No fact found : ${error}`;
  }
}
