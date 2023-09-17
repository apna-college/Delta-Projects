const boxes = document.querySelectorAll('.box');
let playerChance = 1;
let arr = [['.', '.', '.'],
           ['.', '.', '.'],
           ['.', '.', '.']];
const again = document.querySelector('#restart');
const turn = document.querySelector('.player-turn');

const player_1 = document.querySelector('#player1-points');
const player_2 = document.querySelector('#player2-points');
const ties = document.querySelector('#ties-points');

let p1Points = 0;
let tiesPoints = 0;
let p2Points = 0;
let point = 0;

let hoverAudio = document.createElement('audio');
hoverAudio.setAttribute('src', '../Sound/hover.mp3');

const param = new URLSearchParams(window.location.search);
let first = param.get('choice');
let second;
if(first == 'X') {
    turn.setAttribute('src', '../Images/cross-turn.svg');
    playerChance = 2;
    second = 'O';
} else {
    turn.setAttribute('src', '../Images/circle-turn.svg');
    second = 'X';
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
    if(playerChance % 2 == 0) {
        turn.setAttribute('src', '../Images/circle-turn.svg');
    } else {
        turn.setAttribute('src', '../Images/cross-turn.svg');
    }
    // check
    if(check(choice)) {
        if(player == 1){
            p2Points++;
            player_2.innerText = p2Points;
            setTimeout(() => {
                restart();
            }, 500);
            point ++;
        } else {
            p1Points++;
            player_1.innerText = p1Points;
            setTimeout(() => {
                restart();
            }, 500); 
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
        if(playerChance % 2 == 0) {
                ev.target.innerHTML = '<img src="../Images/cross.svg" alt="cross" class="cross">';
                hoverAudio.play();
                insertArr(pos, 'X', 2);
            
        } else {
            
                ev.target.innerHTML = '<img src="../Images/circle.svg" alt="circle" class="circle">';
                hoverAudio.play();
                insertArr(pos, 'O', 1);
        }
        playerChance ++;
    })
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