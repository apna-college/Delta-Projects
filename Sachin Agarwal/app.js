let gameSeq = [];
let userSeq = [];
let btns = ["yellow", "red", "purple", "green"];
let started = false;
let level = 0;
let btn_el = document.querySelector("#btn_el");

let h2 = document.querySelector("h2");

btn_el.addEventListener("click", function (){
    if(started == false){
        console.log("Game is Started");
        started = true;

        levelUp();
    }
});

document.addEventListener("keypress", function (){
    if(started == false){
        console.log("Game is Started");
        started = true;

        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    
    let randIdx = Math.floor(Math.random()*4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    gameFlash(randBtn);
}
let currLevel = 0;
function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }else{
        h2.innerHTML = `Geme Over! Your Score was <b>${level}</b> <br>Press Start Button to Start the Game.`; 
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function (){
            document.querySelector("body").style.backgroundColor = "#D6CA98";
        }, 150);

        let highScore = document.querySelector("h1");

    if (currLevel > level) {
      highScore.innerText = ` Your High Score is ${currLevel}.`;
    } else {
      highScore.innerText = `Your High Score is ${level}.`;
      currLevel = level;
    }
    document.querySelector("body").appendChild(highScore);
        reset();
    }
}

function btnPress(){
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn")
for(let btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}