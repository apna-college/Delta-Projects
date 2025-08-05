let gameSeq = [];
let userSeq = [];

let btns=["green","red","yellow","blue"];

let started = false;
let level = 0;

let h3 = document.querySelector("h3");

document.addEventListener("keypress", function(){
   if(started == false){
    console.log("Game is started");
    started = true;

    levelUp();
   }
});

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}

function levelUp(){
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;

    let randomIdx = Math.floor(Math.random()*3);
    let randColor = btns[randomIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    /* console.log(randomIdx);
    console.log(randColor);
    console.log(randBtn); */

    gameSeq.push(randColor);
    btnflash(randBtn);
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
           setTimeout(levelUp,1000);
        }
    } else {
        h3.innerHTML = `Game Over! Your score was <b>${level-1}</b><br>Press any key to restart`; 
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },500);
        reset();
    }
}

function btnPress() {
    let btn = this;
    btnflash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allbtns = document.querySelectorAll(".btn");

for(btn of allbtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    level = 0;
    userSeq = [];
}

