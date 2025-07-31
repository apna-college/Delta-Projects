let result = document.querySelector("h2");
let p = document.querySelector("p");
let btns = document.querySelectorAll("button");

let color = ["red", "green", "blue", "yellow"];
let gameseq = [];
let userseq = [];

let started = false;
let level = 0;

document.addEventListener("keypress", function () {
  if (!started) {
    started = true;
    levelUp();
  }
});

// levelup()
function levelUp() {
  level++;
  userseq = [];
  p.innerText = `Level ${level}`;
  let randIdx = Math.floor(Math.random() * 3);
  let randColor = color[randIdx];
  let randbtn = document.querySelector(`.${randColor}`);
  gameseq.push(randColor);
  btnFlash(randbtn);
}

// btnFlash()
function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

//
for (let btn of btns) {
  btn.addEventListener("click", btnPress);
}

// btnPress()
function btnPress() {
  let btn = this;
  btnFlash(this);
  pressBtn = btn.getAttribute("id");
  userseq.push(pressBtn);
  matchSeq(userseq.length - 1);
}

// matchSeq()
function matchSeq(idx) {
  //   let idx = level - 1;
  if (userseq[idx] === gameseq[idx]) {
    if (userseq.length == gameseq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    p.innerText = "Game over! press any key to start...";
    displayscore();
    resetTo();
  }
}

// resetTo()
function resetTo() {
  started = false;
  gameseq = [];
  userseq = [];
  level = 0;
}

// displayscore()
function displayscore() {
  let container = document.querySelector(".container");
  result.innerText = ` your score is : ${level}`;
  setTimeout(function () {
    result.innerText = ` your score is : `;
  }, 5000);
}
