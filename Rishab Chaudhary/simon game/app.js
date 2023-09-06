let gameSeq = [];
let userSeq = [];
let buttons = ["yellow", "red", "purple", "green"];
let level = 0;
let started = false;
let highestScore=0;
let h2 = document.querySelector("h2");
document.addEventListener("keypress", function () {
  if (started == false) {
    started = true;
    levelUp();
  }
});
function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;
  let random = Math.floor(Math.random() * 4);
  gameSeq.push(buttons[random]);
  let btn = document.querySelector(`.${buttons[random]}`);
  btnFlash(btn);
}
function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}
function userFlash(btn) {
  btn.classList.add("user");
  setTimeout(function () {
    btn.classList.remove("user");
  }, 250);
}
function checkAns(idx) {
  if (gameSeq[idx] == userSeq[idx]) {
    if (gameSeq.length == userSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    if(level>highestScore){
        highestScore=level;
    }
    h2.innerHTML = `Game Over!<b> Your Highest Score was ${highestScore}<b><br> Your Score was <b>${level}</b> <br> Press any key to start`;
    
    document.querySelector("body").style.backgroundColor=
    "red"
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor=
        "white";
    },150)
    level=0;
    started=false;
    gameSeq=[];
    userSeq=[];
  }
}
function btnPress() {
  let btn = this;
  userFlash(btn);
  let userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  checkAns(userSeq.length - 1);
}
let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}
