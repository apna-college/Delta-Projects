let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newgameBtn = document.querySelector(".new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let Reset = document.querySelector(".Reset");


let turnO = true;//playerx, playero
let count = 0;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () => {
    turnO = true;
    count = 0;
    enableleboxes();
    msgContainer.classList.add("hide");
    Reset.classList.add("Reset");


};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO){
            box.style.color = "blue";
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText = "X";
            box.style.color = "aqua";
            turnO = true;
        }
        box.disabled = true;
        // checkWinner();
        count++;
        let isWinner = checkWinner();

        if (count === 9 && !isWinner) {
          gameDraw();
          
        }
    });
});


const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
};



const disableboxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};
const enableleboxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};


const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxes();
  };

const checkWinner = () => {
    for(let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if( pos1Val!= "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
                Reset.classList.remove("Reset");
                return true;
            }
        }
    }
};


newgameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);