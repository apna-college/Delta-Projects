let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;
let highScore = 0;

let h2 = document.querySelector("h2");
let btns = document.querySelectorAll(".box");

const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
let resp;
let startBtn;
if(isMobile) {
    h2.innerText = "Click start button to start the game!";
    resp = "touchstart";
    startBtn = document.createElement("button");
    startBtn.innerText = "Start";
    startBtn.classList.add("startBtn");
    let container  = document.querySelector(".container");
    container.insertAdjacentElement("afterend", startBtn);
    startBtn.addEventListener(resp, function() {
        if(started == false) {
            started = true;
            levelUp();
            startBtn.style.display = "none";
        }
    });
} else {
    resp = "click";
    document.addEventListener("keypress", function() {
        if(started == false) {
            started = true;
            levelUp();
        }
    });
}


function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}
function randomBtn(btns) {
    let num = Math.floor(Math.random()*4);
    return btns[num];
}
function levelUp() {
    level++;
    h2.innerText = `Level ${level}`;
    let randBtn = randomBtn(btns);
    gameSeq.push(randBtn.classList[1]);
    
    for(let i=0; i<gameSeq.length; i++) {
        setTimeout(function() {
            btnFlash(document.querySelector(`.${gameSeq[i]}`));
        }, 500*(i+1))
    }
    userSeq = [];
}

for(let btn of btns) {
    btn.addEventListener(resp, function(event) {
        btnFlash(btn);
        event.stopPropagation();
        if(started == true) {
            userSeq.push(btn.classList[1]);
            let idx = userSeq.length - 1;
            if(userSeq[idx] != gameSeq[idx]) {
                h2.innerHTML = `Game Over! You reached Level ${level}! <br> Press any key to start again`;
                started = false;
                gameSeq = [];
                userSeq = [];
                if(isMobile) {
                    startBtn.style.removeProperty("display");
                    h2.innerHTML = `Game Over! You reached Level <b>${level}!<b> <br> Press start to play again`;
                }
                document.querySelector("body").style.background = "red";
                setTimeout(function() {
                    document.querySelector("body").style.background = "linear-gradient(90deg, #5AE2DD, #26D7D1, #90EBE8)";
                }, 100);
                if(level > highScore) {
                    highScore = level;
                    document.querySelector("p").innerHTML = `<b>HIGH SCORE: ${highScore}<b>`;
                    alert(`Congratulations! You set a new High score: ${highScore}. Play again to beat it!`);
                }
                
                level = 0;
                return;
            }
            if(userSeq.length === gameSeq.length) {
                setTimeout(levelUp, 250);
            }
        }
    });
}

//prevent double taps
let lastTap = 0;

for (let btn of btns) {
    btn.addEventListener('touchend', function(e) {
        const now = Date.now();
        if (now - lastTap < 350) {
            e.preventDefault(); // Prevent double-tap zoom
        }
        lastTap = now;
    });
}
