let gameSeq=[];
let userSeq=[];
let score=[];


let btns=["red","yellow","green","purple"];
 
let started=false;
let level=0;

let h2= document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started==false){
    console.log("game started");
    started=true;
    levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
};

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
};

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    console.log(gameSeq);

    gameFlash(randBtn);
};

function checkAns(idx){

    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
        setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML=`Game over ! You score was <b>${(level-1)*10}</b> <br>Press any key to start`;
        
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}

function btnPress(){
    let btn=this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
};

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
};

function reset(){
    
    score.push((level-1)*10);
    console.log("your score:",score);
    let highScore=score.reduce(function(max,el){
        if(max>el){
            return max;
        }else{
            return el;
        }
    });
    console.log("High score:",highScore);
    let highscore=document.querySelector("h5");
    highscore.innerText=`Your High score is : ${highScore}`;
    started=false;
    userSeq=[];
    gameSeq=[];
    level=0;

}


    
