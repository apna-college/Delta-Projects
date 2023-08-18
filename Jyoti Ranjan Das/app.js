let started = false;
let divGame = document.querySelector(".game-container");

let clickData = [];
let playerA = [];
let playerB = [];
let count = 0;
let press = 0;


document.addEventListener("keypress", keyPress);

function keyPress (){
    if(started == false){
        document.querySelector(".game-info-status").innerHTML = "Game Strated";
        started = true;
        startGame();
    }
}

function startGame(){
    divGame.addEventListener("click", function(event){
        console.dir(event.target);
        let clickId = parseInt(event.target.id);
        
        
        // clickData.push(clickId);
        
        checkPress(clickId, event.target);
        console.log(clickData);
        
    });
}

function checkPress(arg, obj){
    

    for(let i =0; i<clickData.length;i++){
    if(arg == clickData[i]){
       press++;
    } 
 }
  console.log(press);
  if(press == 0){
    clickData.push(arg);

    displaySign(count, obj, arg);
    count++
    press = 0
  }else{
    console.log("Already filled!");
    press = 0;
  }

//   if(clickData.length ==  9){
//      setTimeout(function(){
//         reset();
//      }, 1000);
//   }
}

function displaySign(obj,obj2,arg){
      if((obj % 2) == 0){
        //   console.log(choiceEvent.getAtrribute("id"));
        obj2.innerText = "X";
        obj2.classList.add("signStyle");
        console.log(obj2.innerText);
        playerA.push(arg);
        console.log(playerA);
        
        let resA = checkRes(playerA);
        document.querySelector(".playerA-score").innerText = `Score :- ${resA}`;
      }else{
        obj2.innerText = "O";
        obj2.classList.add("signStyle");
        console.log(obj2.innerText);
        playerB.push(arg);
        
        let resB = checkRes(playerB);
        document.querySelector(".playerB-score").innerText = `Score :- ${resB}`;
      }
}

function reset(){
    started = false;
    clickData = [];
    playerA = [];
    playerB = [];
    count = 0;
    let picks = document.querySelectorAll(".box");
    for(pick of picks){
        pick.innerText = "";
    }

    document.querySelector(".playerA-score").innerText = `Score :- 0`;
    document.querySelector(".playerB-score").innerText = `Score :- 0`;

    console.log("Game Over! Please press any key to restart.");
}

let resBtn = document.querySelector(".resetBtn");

resBtn.addEventListener("click", function(){
    reset();
    document.addEventListener("keypress", keyPress);
});

// Only calculate score and display the line of cutting

function checkRes(arr){
    // point = 0;
    let point = 0;
    let scA = 0;

    // console.log(point);
    for(let i =0;i<arr.length;i++){
        for(let j =0;j<=arr.length;j++){
            if((arr[j] >= arr[i]) && (arr[j] <= (arr[i]+2))){
                  point++;
            }
        }
    // console.log(point);
            if(point == 3){
                scA++;
                // console.log(point);
            }
            
            point = 0;
            // console.log(point);
        
    }
    
    for(let i =0;i<arr.length;i++){
        for(let j =0;j<=arr.length;j++){
            if((arr[j] >= arr[i]) && (((arr[j]-arr[i])%10) == 0)){
                  point++;
            }
        }
    // console.log(point);
            if(point == 3){
                scA++;
                // console.log(point);
            }
            
            point = 0;
            // console.log(point);
        
    }

    for(let i =0;i<arr.length;i++){
        for(let j =0;j<=arr.length;j++){
            if((arr[j] >= arr[i]) && (((arr[j]-arr[i])%11) == 0)){
                  point++;
            }
        }
    // console.log(point);
            if(point == 3){
                scA++;
                // console.log(point);
            }
            
            point = 0;
            // console.log(point);
        
    }

    for(let i =0;i<arr.length;i++){
        for(let j =0;j<=arr.length;j++){
            if((arr[j] >= arr[i]) && (((arr[j]-arr[i])%9) == 0)){
                  point++;
            }
        }
    // console.log(point);
            if(point == 3){
                scA++;
                // console.log(point);
            }
            
            point = 0;
            // console.log(point);
        
    }

     return scA;

}