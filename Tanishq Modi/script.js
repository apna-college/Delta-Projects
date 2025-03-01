let body = document.querySelector("body");

let btn = document.querySelector("button");
let box = document.querySelector("#Box");
let h1T = document.querySelector("#inputText");

let inp1 = document.querySelector("#text");

let newCol;

btn.addEventListener("click", () => {
  generateColor();
});

function generateColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  let color = `rgb(${red}, ${green}, ${blue})`;

  let h1 = document.querySelector("h1");

  h1.innerText = color;

  h1T.style.color = color;

  box.style.backgroundColor = color;

  newCol = color;
}

let inp = document.querySelector("#text");

inp.addEventListener("input", () => {
  h1T.innerText = inp.value;
});

let btn1 = document.querySelector("#textSub");
btn1.addEventListener("click", () => {
  let h1 = document.querySelector("h1");
  let color = h1.innerText;

  let p = document.createElement("p");
  p.innerText = `You Love That Color Here Are The Details: ${color}`;
  p.style.color = color;
  p.style.fontWeight = 500;
  p.style.fontSize = "20px";
  body.append(p);
});

let btn2 = document.querySelector("#chaH1");
btn2.addEventListener("click", () => {
  let h1 = document.querySelector("h1");
  let color = h1.innerText;

  h1.innerText = inp1.value;
  h1.style.color = color;
});

let btn3 = document.querySelector("#reset");
btn3.addEventListener("click", () => {
  let h1 = document.querySelector("h1");
  h1.innerText = newCol;
  h1.style.color = "black";
});

// Add New Feature - Button
// Add New Feature - Form
