let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let color = ["pink","orange","yellow","blue"];

let h3 = document.querySelector("h3");
let container = document.querySelector(".container");
let startBtn = document.querySelector(".start");

startBtn.addEventListener("click",function(){
if (started == false){
        console.log("Game Started");
        started = true;
        container.style.opacity = 1;
        levelUp();
}});

document.addEventListener("keypress",function(){
if (started == false){
        console.log("Game Started");
        started = true;
        container.style.opacity = 1;
        levelUp();
}});

function levelUp(){
    userSeq = [];
    level++;
    h3.innerText = `level ${level}`;
    let randomInd = Math.floor(Math.random()*4);
    let randomcolor = color[randomInd];
    gameSeq.push(randomcolor);
    let randomBtn = document.querySelector(`.${randomcolor}`)
    gameFlash(randomBtn);
}

function gameFlash(randomBtn){
    randomBtn.classList.add("flash"); 
    setTimeout(()=>{
        randomBtn.classList.remove("flash");
    },500);
}

function userFlash(randomBtn){
    randomBtn.classList.add("userFlash"); 
    setTimeout(()=>{
        randomBtn.classList.remove("userFlash");
    },500);
}

function checkClr(idx){
    if(gameSeq[idx]===userSeq[idx]){
        if(userSeq.length == gameSeq.length){
            h3.innerText = `level ${level}`;
            setTimeout(levelUp,1000);
        console.log("Same",level);
    }
    }else{
        h3.innerHTML = `Game Over! <br><br> Press any key/play to restart <br> <br> Score: ${level}`;
        container.style.opacity = 0.5;
        let body = document.querySelector("body").style.backgroundColor = "hsla(0, 100%, 50%, 0.505)";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150)
        reset();
    }}


function btnPressed(){
    let btn = this;
    userFlash(btn)
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkClr(userSeq.length-1);
}

allBtn = document.querySelectorAll(".btn");
for(btns of allBtn){
    btns.addEventListener("click",btnPressed);
    }

function reset(){
    level = 0;
    started = false;
    gameSeq = [];
    userSeq = [];
}