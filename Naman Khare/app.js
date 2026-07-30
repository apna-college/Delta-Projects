let text = document.querySelector(".fact-text");
let btn = document.querySelector(".generate-btn");
let url = "https://catfact.ninja/fact";

btn.addEventListener("click" , async() => {
    let data = await fetch(url);
    let value = await data.json();
    text.textContent = value.fact;
});