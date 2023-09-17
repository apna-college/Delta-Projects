const boxes = document.querySelectorAll('.box');
let playerChance = 2;
let arr = [['.', '.', '.'],
           ['.', '.', '.'],
           ['.', '.', '.']];

const param = new URLSearchParams(window.location.search);
let myCh = param.get('choice');
let cpuCh;
if(myCh == 'X') {
    cpuCh = 'O';
} else {
    cpuCh = 'X';
}
const again = document.querySelector('#restart');
const turn = document.querySelector('.player-turn');
if(myCh == 'X') {
    turn.setAttribute('src', '../Images/cross-turn.svg');
} else {
    turn.setAttribute('src', '../Images/circle-turn.svg');
}

let hoverAudio = document.createElement('audio');
hoverAudio.setAttribute('src', '../Sound/hover.mp3');
let gameOverAudio = document.createElement('audio');
gameOverAudio.setAttribute('src', '../Sound/game-over.wav');

const player_1 = document.querySelector('#player1-points');
const player_2 = document.querySelector('#player2-points');
const ties = document.querySelector('#ties-points');

let p1Points = 0;
let tiesPoints = 0;
let p2Points = 0;
let point = 0;

let myNum = 1;
let cpuNum;
if(myNum == 1) {
    cpuNum = 2;
} else {
    cpuNum = 1;
}



const check = (choice) => {
    let win = 0;
    //horizonal
    for(let i = 0; i < 3; i ++) {
        for(let j = 0; j < 3; j ++) {
            if(arr[i][j] == choice) {
                win++;
            }
        }
        if(win == 3) {
            return true;
        } win = 0;
    }

    // Vertical
    for(let j = 0; j < 3; j ++) {
        for(let i = 0; i < 3; i ++) {
            if(arr[i][j] == choice) {
                win ++;
            }
        }
        if(win == 3) {
            return true;
        } win = 0;
    }

    // Diagonal Primary
    for(let i = 0; i < 3; i ++) {
        if(arr[i][i] == choice) {
            win ++;
        }
        if(win == 3) {
            return true;
        }
    }
    win = 0

    // Diagonal Secondary
    for(let i = 0; i < 3; i ++) {
        let col = 2 - i;
        if(arr[i][col] == choice) {
            win ++;
        }
        if(win == 3) {
            return true;
        }
    }
}

function checkFill() {
    let fill = true;
    for(let i = 0; i < 3; i ++) {
        for(let j = 0; j < 3; j ++) {
            if(arr[i][j] == '.') {
                fill = false;
                break;
            }
        }
    }
    return fill;
}

// insert into arr
const insertArr = (pos, choice, player) => {
    // pos idx outer idx iner
    let row = (Math.floor(pos / 10)) - 1;
    let col = (pos % 10) - 1;
    arr[row].splice(col, 1, choice);
    if(myCh == 'X') {
        turn.setAttribute('src', '../Images/cross-turn.svg');
    } else {
        turn.setAttribute('src', '../Images/circle-turn.svg');
    }
    
    
    // check
    if(check(choice)) {
        if(player == myNum){
            p1Points++;
            player_1.innerText = p1Points;
            setTimeout(() => {
                restart();
            }, 250); 
            point++;
        } else {
            p2Points++;
            player_2.innerText = p2Points;
            gameOverAudio.play();
            setTimeout(() => {
                restart();
            }, 250);
            point ++;
        }
    }
    if(checkFill() && point == 0) {
       tiesPoints++;
       ties.innerText = tiesPoints;
       setTimeout(() => {
        restart();
        }, 500); 
    }
    point = 0;
}

for(box of boxes) {
    box.addEventListener('click', (ev) => {
        let pos = ev.target.id;
        if(myCh == 'X') {
            ev.target.innerHTML = '<img src="../Images/cross.svg" alt="cross" class="cross">';
        } else {
            ev.target.innerHTML = '<img src="../Images/circle.svg" alt="cross" class="circle">';
        }
        insertArr(pos, myCh, myNum);
        if(!checkFill()){
            setTimeout(() => {
                generate_insert();
            }, 300);
        }
    })
}

const generate_insert = () => {
    // generate pos
    let pos1 = Math.floor(Math.random() * 3) + 1;
    let pos2 = Math.floor(Math.random() * 3) + 1;
    while(true){
        if(arr[pos1 - 1][pos2 - 1] == '.') {
            break;
        }
        pos1 = Math.floor(Math.random() * 3) + 1;
        pos2 = Math.floor(Math.random() * 3) + 1;
    }
    
    let random = (pos1 * 10) + pos2;
    
    // change
    let box = document.getElementById(`${random}`);
    if(cpuCh == 'X') {
        box.innerHTML = '<img src="../Images/cross.svg" alt="cross" class="cross">';
    } else {
        box.innerHTML = '<img src="../Images/circle.svg" alt="circle" class="circle">';
    }
    hoverAudio.play();
    insertArr(random, cpuCh, cpuNum);
}

again.addEventListener('click', extraRestart);
function extraRestart() {
    restart();
    p1Points = 0;
    tiesPoints = 0;
    p2Points = 0;
    player_1.innerText = p1Points;
    player_2.innerText = p2Points;
    ties.innerText = tiesPoints;
}
function restart() {
    arr = [['.', '.', '.'],
           ['.', '.', '.'],
           ['.', '.', '.']];
    for(box of boxes) {
        box.innerHTML = '';
    }
    
}