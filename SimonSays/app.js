let gameSeq=[];
let userSeq=[];

let btnColor=["yellow","purple","red","green"]

let h2=document.querySelector("h2");
let allBtns=document.querySelectorAll(".btn")

let started=false;
let level=0;
let score=[];

document.addEventListener("keypress", function(){
    if(started==false){
        started=true;
    }
    levelUp();
    h2.innerText=`Level ${level}`;
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },100);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randIndex=Math.floor(Math.random() * 3);
    let randColor=btnColor[randIndex];
    let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);
}

function check(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,500);
        }
    } else{
        h2.innerHTML=`Game Over! Your score is ${level}<br>Your highest score was ${highScore()}.<br>Press any key to restart the game.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150)
        reset();
    }
}

function btnPress(){
    let btn=this;
    btnFlash(btn);

    let userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    check(userSeq.length-1);
}

for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function highScore(){
    score.push(level);
    let max=0;
    for(let i=0;i<score.length;i++){
            if(score[i]>max){
                max=score[i];
            }
    }
    return max;
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}