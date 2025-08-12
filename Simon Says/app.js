let gameSeq = [];
let userSeq = [];
let start = false;
let level = 0;
let btns = ["red","yellow", "green","purple"];
let startBtn = document.querySelector(".start-btn");
let resetBtn = document.querySelector(".reset-btn");
let h2 = document.querySelector("h2");
let allBtns = document.querySelectorAll(".btn")


startBtn.addEventListener("click", function (event) {
    if(start == false){
        console.log("Game has been Started");
        start = true;

        levelUp();
    }
});
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    },250);
}
function userFlash(btn){
    btn.classList.add("user-flash");
    setTimeout(function () {
        btn.classList.remove("user-flash");
    },250);
}
 function levelUp(){
     userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random() * 3);
    let randColr = btns[randIdx];
    let randBtn = document.querySelector(`.${randColr}`);
    gameSeq.push(randColr);
    gameFlash(randBtn);
 }
 function checkAns(idx){
    if(userSeq[idx]  === gameSeq[idx]){
    if(userSeq.length === gameSeq.length){
        setTimeout(levelUp,1000);
    }
    }
    else {
        h2.innerHTML = `Game Over ! Your Score is <b> ${level} </b> Please Press Reset Button`;
        startBtn.setAttribute("disable", true)
        allBtns.setAttribute("disable", true)
        
    }
 }
 function btnPress(){
 let btn = this;
 userFlash(btn);
 let btnColr = btn.getAttribute("id");
 userSeq.push(btnColr);
 checkAns(userSeq.length-1);
 }

 for(btn of allBtns) {
    btn.addEventListener("click", btnPress);
 }
 resetBtn.addEventListener('click', function () {
    start = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
    levelUp();
 });
