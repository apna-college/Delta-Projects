let userSeq =[];
let gameSeq = [];
let started = false;
let level =0;
let btnsColor = ["yellow", "red", "blue", "green"];
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if( started == false){
        console.log("started");
        started = true;
        levelUp();
    }else{

    }
})
function gameFlash(btn){
    btn.classList.add("flashWhite");
    setTimeout(function () {
        btn.classList.remove("flashWhite");
    }, 200);
}
function userFlash(btn){
    btn.classList.add("flashGreen");
    setTimeout(function () {
        btn.classList.remove("flashGreen");
    }, 200);
}
function levelUp(){
    userSeq = [];
    level ++;
    h2.innerText = `Level ${level}`;
    let randomIndex = Math.floor(Math.random()*3);
    let randomColor = btnsColor[randomIndex];
    let randomBtn = document.querySelector(`.${randomColor}`);
    // console.log(randomBtn);
    // console.log(randomColor);
    // console.log(randomIndex);
    gameSeq.push(randomColor);
    
    gameFlash(randomBtn);
}
function btnPress(){
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
   
    checkseq(userSeq.length-1);
}
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress)
}
function checkseq(index){
  
    if(userSeq[index]===gameSeq[index]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 400)
        }
    }else{
        h2.innerHTML= `game over!, your score :<u> ${level}</u>,<br> press any key to start.`;
        reset();   
        document.querySelector("body").style.backgroundColor = "red"; 
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor = "white"; 
        }, 150);    
    }
}
function reset(){
    started = false;
    level = 0;
    userSeq = [];
    gameSeq= [];
}