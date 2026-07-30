const text = document.querySelector(".fact-text");
const btn = document.querySelector(".generate-btn");
const url = "https://catfact.ninja/fact";

btn.addEventListener("click" , async() => {
    try {
        let data = await fetch(url);
        let value = await data.json();
        text.textContent = value.fact;
    } catch (err) {
        text.textContent = "Something Went Wrong! No,fact found";
    }
});