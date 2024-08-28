let generateBtn = document.querySelector("#generate");
let resetbtn = document.querySelector("#reset");
let div = document.querySelector("div");
let h2 = document.querySelector("h2");


generateBtn.addEventListener("click", () => {
  let randomColor = getRandomColor();
  h2.innerText = "Generated Random Color is : " + randomColor;
  div.style.backgroundColor = randomColor;
  console.log("Color Updated");
});


resetbtn.addEventListener("click", () => {
  div.style.backgroundColor = "inherit";
  h2.innerText = "Generate Random Color";
});


function getRandomColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  let color = `rgb(${red}, ${green}, ${blue})`;
  return color;
}
