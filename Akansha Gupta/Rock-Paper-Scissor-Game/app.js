let userPoint = 0;
let compPoint = 0;

let userScore = document.querySelector("#user-score");
let compScore = document.querySelector("#comp-score");


let msg = document.querySelector("#message");
// console.dir(msg);

const choices = document.querySelectorAll(".choice");

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        // console.log("click");
        let userclick = choice.getAttribute("id");
        // console.log("userclick : " , userclick);
        play(userclick);
    });
});


const compChoice = ()=>{
    const choice = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return choice[randIdx];
}


const play = (userclick)=>{
    console.log("user click : ", userclick);


    let compClick = compChoice();
    console.log("comp click : " , compClick);


    if(userclick === compClick){
        // drawgame();
        msg.innerText = "Game was Draw";
    } else{
        let userWin = true;
        if(userclick=="rock"){
            if(compClick=="paper"){
                userWin = false;
            }else{
                userWin = true;
            }
        } else if(userclick == "paper"){
            if(compClick=="rock"){
                userWin = true;
            }else{
                userWin = false;
            }
        }else{
            if(compClick=="paper"){
                userWin = true;

            }else{
                userWin = false;
            }
        }
        setTimeout(()=>{
            winner(userWin,userclick,compClick);
        },1000);
    }  
    userSe(userclick);
    compSe(compClick);
        
}

// function drawgame(){
//     msg.innerText = "Game was Draw";
//     // msg.style.backgroundColor = "yellow";
//     // msg.style.color = "#0f172a" ;

// }


function winner(userWin ,userclick,compClick){
    if(userWin){
        userPoint++;
        userScore.innerText = userPoint;
        msg.innerText = (`You Win !! Your ${userclick} beat  ${compClick} `);
        // msg.style.backgroundColor = "green";
    } else{
        compPoint++;
        compScore.innerText = compPoint;
        msg.innerText = (`You lose !! ${compClick} beat your ${userclick} `)
        // msg.style.backgroundColor = "red";
    }
}













let quit = document.querySelector("#game-over");
quit.addEventListener("click",function(){
    if(userPoint>compPoint){
        quit.innerText = "Yayyy!! You Win";
        quit.style.backgroundColor = "green";
        quit.style.boxShadow = "0 0 10px green";
    } else if(userPoint<compPoint){
        quit.innerText = "You Lose";
        quit.style.backgroundColor = "red";
        quit.style.boxShadow = "0 0 10px red";

    }else{
        quit.innerText = "Game Draw";
        quit.style.backgroundColor = "yellow";
        quit.style.color = "#0f172a"
        quit.style.boxShadow = "0 0 10px yellow";
    }
})


let restart = document.querySelector("#restart");
restart.addEventListener("click",function(){
    userPoint = 0;
    compPoint = 0;
    userScore.innerText = 0;
    compScore.innerText = 0;
    msg.innerText = "Game Restart ! Choose your Move";
    quit.innerText = "Game Over";
    quit.style.backgroundColor = "khaki";
    quit.style.boxShadow = "";
    quit.style.color = "#0f172a"
    userSelect.src = "question-mark.jpeg";
    compSelect.src = "question-mark.jpeg";


})





let userSelect = document.querySelector("#user-display");
let compSelect = document.querySelector("#comp-display");

function userSe(userclick){
  if(userclick=="rock"){
    userSelect.src = "rock-icon.jpg";
        setTimeout(()=>{
        userSelect.src = "question-mark.jpeg";
        },1200)
  } else if(userclick=="paper"){
    userSelect.src = "paper-icon.jpg";
        setTimeout(()=>{
        userSelect.src = "question-mark.jpeg";
        },1200)
  } else{
    userSelect.src = "scissors-icon.jpg";
        setTimeout(()=>{
        userSelect.src = "question-mark.jpeg";
        },1200)
  }
}

function compSe(compClick){
    setTimeout(()=>{
       if(compClick=="rock"){
            compSelect.src = "rock-icon.jpg";
                setTimeout(()=>{
                compSelect.src = "question-mark.jpeg";
                },700)
        } else if(compClick=="paper"){
            compSelect.src = "paper-icon.jpg";
             setTimeout(()=>{
                compSelect.src = "question-mark.jpeg";
                },700)
        } else{
            compSelect.src = "scissors-icon.jpg";
             setTimeout(()=>{
                compSelect.src = "question-mark.jpeg";
                },700)
        } 
    },500);
  
}

