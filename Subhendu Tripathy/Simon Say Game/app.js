let gameSeq = [];
let userSeq = [];

let btns = ['yellow', 'red', 'purple', 'green'];

let started = false;
let level = 0;
let highestScore = 0;

let h2 = document.querySelector("h2");
let scoreDisplay = document.querySelector(".score");

// 🔊 1. SETUP BACKGROUND MUSIC
let bgMusic = new Audio("Sounds/bgm.mp3");
bgMusic.loop = true;
bgMusic.volume = 0.5;

// 🔊 2. HELPER FUNCTION
function playSound(name) {
    let audio = new Audio(`Sounds/${name}.mp3`);
    audio.play();
}

function startGame() {
    if (started == false) {
        console.log("game is started");

        // 🔊 3. PLAY START SOUND & BACKGROUND MUSIC
        playSound("start");
        bgMusic.play().catch(e => console.log("Audio play failed: ", e));

        setTimeout(function () {
            started = true;
            levelUp();
        }, 100);
    }
}

document.addEventListener('keypress', startGame);
document.addEventListener('touchstart', startGame);

function gameFlash(btn) {
    btn.classList.add('flash');
    setTimeout(function () {
        btn.classList.remove('flash');
    }, 250);
}

function userFlash(btn) {
    btn.classList.add('userflash');
    setTimeout(function () {
        btn.classList.remove('userflash');
    }, 250);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    console.log("game seq: ", gameSeq);

    gameFlash(randBtn);
};

function checkAns(idx) {
    if (userSeq[idx] == gameSeq[idx]) {
        // --- CORRECT MOVE ---

        if (userSeq.length === gameSeq.length) {
            // ✅ Case A: Level Completed (Victory!)
            // We wait 250ms, then play Level Up sound (No click sound)
            setTimeout(function () {
                playSound("levelup");
            }, 250);

            setTimeout(levelUp, 1000);
        } else {
            // ✅ Case B: Middle of sequence (Normal)
            // Play the normal click sound immediately
            playSound("click");
        }

    } else {
        // --- GAME OVER LOGIC ---
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to start`;

        // 🔊 Stop Music & Play Game Over
        bgMusic.pause();
        bgMusic.currentTime = 0;
        playSound("gameover");

        document.querySelector("body").classList.add("game-over");
        setTimeout(function () {
            document.querySelector("body").classList.remove("game-over");
        }, 200);

        reset();
    }
}

function btnPress() {
    if (started) {
        let btn = this;
        userFlash(btn);

        let userColor = btn.getAttribute("id");
        userSeq.push(userColor);

        // ❌ REMOVED: playSound("click"); 
        // We removed it from here because checkAns now handles it!

        checkAns(userSeq.length - 1);
    }
}

let allBtns = document.querySelectorAll(".btn");
for (const btn of allBtns) {
    btn.addEventListener('click', btnPress);
}

function reset() {
    started = false;

    if (highestScore < level) {
        highestScore = level;
    }

    scoreDisplay.innerHTML = `Your Highest Score: <b>${highestScore}</b>`;

    level = 0;
    gameSeq = [];
    userSeq = [];
}