let h51 = document.querySelector("#h51");
let h52 = document.querySelector("#h52");
let Btn = document.querySelector("button");

Btn.addEventListener("click", async () => {
   let url = "https://api.quotable.io/quotes/random";
   fetch(url)
      .then((response) => {
         return response.json();
      })
      .then((data) => {
         h51.innerText = `" ${data[0].content} "`;
         h52.innerText = `~ ${data[0].author}`;
      })
      .catch((err) => { 
         h51 = "API not work !!!";
      });
});