let url1 = "https://catfact.ninja/fact";

async function getfact() {
  try {
    let res = await axios.get(url1);
    return res.data.fact;
  } catch (e) {
    console.log(e);
    return "NO fact found";
  }
}
let btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", async () => {
  let fact = await getfact();
  let p1 = document.querySelector("#fact");
  p1.innerText = fact;
});

let url2 = "https://dog.ceo/api/breeds/image/random";

async function getdogimg() {
  try {
    let res = await axios.get(url2);
    return res.data.message;
  } catch (e) {
    console.log(e);
    return "Image not found";
  }
}

let btn2 = document.querySelector("#btn2");

btn2.addEventListener("click", async () => {
  let link = await getdogimg();
  let img = document.querySelector("img");
  img.setAttribute("src", link);
});

let url3 = "https://icanhazdadjoke.com/";

async function getjoke() {
  try {
    const config = { headers: { Accept: "application/json" } };
    let res = await axios.get(url3, config);
    return res.data.joke;
  } catch {
    return "error";
  }
}
let btn3 = document.querySelector("#btn3");

btn3.addEventListener("click", async () => {
  let joke = await getjoke();
  let p2 = document.querySelector("#joke");
  p2.innerText = joke;
});

let url4 = "http://universities.hipolabs.com/search?country=india&name=";

let btn4 = document.querySelector("#btn4");

btn4.addEventListener("click", async () => {
  let inp1 = document.querySelector("#inp1");
  let state = inp1.value;
  let clgarr = await getcolleges(state);
  console.log(clgarr);
  colleges(clgarr);
  inp1.value = "";
});

async function getcolleges(state) {
  try {
    let res = await axios.get(url4 + state);
    return res.data;
  } catch (e) {
    return e;
  }
}
function colleges(clgarr) {
  let list = document.querySelector("#list");
  list.innerText = "";
  for (clg of clgarr) {
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.href = clg.web_pages;
    a.innerText = clg.web_pages;
    li.innerText = `${clg.name} : `;
    list.appendChild(li);
    li.appendChild(a);
  }
}
