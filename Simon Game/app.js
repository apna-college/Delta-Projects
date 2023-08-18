let level = 0;
let high = 0;
let started = false;
let gameInput = [];
let userInput = [];
let colors = ["yellow", "red", "blue", "green"];
document.addEventListener("keypress", function () {
  if (started == false) {
    started = true;
    let h3 = document.querySelector("h3");
    level += 1;
    h3.innerText = `Level ${level}`;
    gameFlash();
  }
});
function gameFlash() {
  let rdncol = colors[Math.floor(Math.random() * 4)];
  let selectcolor = document.querySelector(`.${rdncol}`);
  selectcolor.style.backgroundColor = "white";
  gameInput.push(rdncol);
  setTimeout(function () {
    selectcolor.style.backgroundColor = `${rdncol}`;
  }, 250);
}
let btns = document.querySelectorAll(".btn");
for (btn of btns) {
  btn.addEventListener("click", function () {
    if (started == true) {
      let btn = this;
      let clicked = btn.getAttribute("id");
      userInput.push(clicked);
      btn.style.backgroundColor = "black";
      setTimeout(function () {
        btn.style.backgroundColor = `${clicked}`;
      }, 250);
      idx = userInput.length - 1;
      check(idx);
    }
  });
}
function levelup() {
  level += 1;
  let h3 = document.querySelector("h3");
  h3.innerText = `Level ${level}`;
  setTimeout(function () {
    let rdncol = colors[Math.floor(Math.random() * 4)];
    let selectcolor = document.querySelector(`.${rdncol}`);
    selectcolor.style.backgroundColor = "white";
    gameInput.push(rdncol);
    setTimeout(function () {
      selectcolor.style.backgroundColor = `${rdncol}`;
    }, 250);
  }, 1000);
}
function check(idx) {
  if (gameInput[idx] === userInput[idx]) {
    if (gameInput.length === userInput.length) {
      levelup();
      userInput = [];
    }
  } else {
    currentScore = level - 1;
    let h3 = document.querySelector("h3");
    h3.innerHTML = `Game Over !! Your Score Is <b>${currentScore}<b><br>Press Any Key To Restart The Game`;
    let bod = document.querySelector("body");
    bod.style.backgroundColor = "red";
    setTimeout(function () {
      bod.style.backgroundColor = "white";
    }, 250);
    started = false;
    level = 0;
    gameInput = [];
    userInput = [];
    let hightem = document.querySelector(".hightem");
    if (high < currentScore) {
      console.log("high score added");
      high = currentScore;
      hightem.innerText = `Your Highest Score Is ${high}`;
    }
  }
}
