let startButton = document.getElementById("startButton");
let gameSeq = [];
let userSeq = [];

let btns = ["red", "blue", "green", "yellow"];
let started = false;
let level = 0;

// Check if highestScore exists in localStorage
let highestScore = sessionStorage.getItem("highestScore");

// If highestScore doesn't exist, set it to 0
if (highestScore === null || highestScore === undefined) {
    highestScore = 0;
} else {
    // Convert highestScore to a number
    highestScore = parseInt(highestScore);
}

let h2 = document.querySelector("h2");

document.addEventListener("keypress", startGame);
document.addEventListener("touchstart", startGame);
startButton.addEventListener("click", startGame);

function startGame() {
    if (!started) {
        console.log("Game Started");
        started = true;
        levelUp();
    }
}

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}

function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;

  let randIdx = Math.floor(Math.random() * 3);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  gameSeq.push(randColor);
  console.log(gameSeq);
  gameFlash(randBtn);
}

function checkAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      if (level >= highestScore) { // Changed to >= to ensure it updates only if the current level is greater than or equal to highestScore
        highestScore = level;
        sessionStorage.setItem("highestScore", highestScore);
      }
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML = `Game Over! <br>Your score : <b>${level}</b> <br> Highest Score : <b>${highestScore}</b><br>Press any key to Start`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "#e5eaf5";
    }, 150);
    reset();
  }
}

function btnPress() {
  let btn = this;
  userFlash(btn);

  userColor = btn.getAttribute("id");
  userSeq.push(userColor);

  checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
