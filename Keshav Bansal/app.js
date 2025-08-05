let highest = Number(localStorage.getItem("highest"));

let score = document.querySelector(".score");
let highScore = document.querySelector(".high-score");
let startBtn = document.querySelector(".startBtn");
let restart = document.querySelector(".restart");
let rulesBtn = document.querySelector(".rules");
let rulesInfo = document.querySelector(".info");
highScore.innerHTML = `Highest Score: ${highest}`;

const sounds = {
  red: new Audio("assets/sound/red.wav"),
  blue: new Audio("assets/sound/blue.wav"),
  yellow: new Audio("assets/sound/yellow.wav"),
  purple: new Audio("assets/sound/purple.wav"),
  error: new Audio("assets/sound/error.wav"),
};

let volumeBtn = document.querySelector(".volume");
let volumeIcon = document.querySelector(".volume i");

let volume = false;

volumeBtn.addEventListener("click", function () {
  if (!volume) {
    volumeIcon.classList.remove("fa-volume-high");
    volumeIcon.classList.add("fa-volume-xmark");
    for (let key in sounds) {
      if (sounds[key] instanceof Audio) {
        sounds[key].muted = true;
      }
    }
  } else {
    volumeIcon.classList.remove("fa-volume-xmark");
    volumeIcon.classList.add("fa-volume-high");
    for (let key in sounds) {
      if (sounds[key] instanceof Audio) {
        sounds[key].muted = false;
      }
    }
  }

  volume = !volume;
});

let toggle = false;

rulesBtn.addEventListener("click", function () {
  if (!toggle) {
    rulesInfo.classList.remove("hidden");
    rulesInfo.classList.remove("slide-up");
    rulesInfo.classList.add("slide-down");
    rulesInfo.addEventListener("animationend", function handler(e) {
      if (e.animationName === "slideDown") {
        rulesInfo.style.transform = "translate(-50%, -35%)";
        rulesInfo.classList.remove("slide-down");
        rulesInfo.removeEventListener("animationend", handler);
      }
    });
  } else {
    rulesInfo.classList.remove("slide-down");
    rulesInfo.classList.add("slide-up");
    rulesInfo.addEventListener("animationend", function handler(e) {
      if (e.animationName === "slideUp") {
        rulesInfo.classList.add("hidden");
        rulesInfo.style.transform = "translate(-50%, -500%)";
        rulesInfo.classList.remove("slide-up");
        rulesInfo.removeEventListener("animationend", handler);
      }
    });
  }

  toggle = !toggle;
});

let gameSeq = [];
let userSeq = [];

let started = false;
let points = -1;

let btns = ["red", "blue", "yellow", "purple"];

if (highest !== null) {
  highest = Number(highest);
  highScore.innerHTML = `Highest Score: ${highest}`;
} else {
  highest = -1;
  highScore.innerHTML = "";
}

function startGame() {
  if (!started) {
    started = true;
    scoreUp();
  }
}

startBtn.addEventListener("click", function () {
  startGame();
  this.classList.add("opacity");
});

document.addEventListener("keydown", (e) => {
  if (!started && /^[a-zA-Z0-9]$/.test(e.key)) startGame();
});

function btnFlash(btn) {
  btn.classList.add("darken");
  setTimeout(function () {
    btn.classList.remove("darken");
  }, 200);
}

function scoreUp() {
  userSeq = [];
  points++;
  score.innerHTML = `Score: ${points}`;

  let randIdx = Math.floor(Math.random() * 4);
  let randColor = btns[randIdx];
  gameSeq.push(randColor);

  let flashDelay = 600;
  if (points > 5) flashDelay = 500;
  if (points > 10) flashDelay = 400;

  for (let i = 0; i < gameSeq.length; i++) {
    setTimeout(() => {
      const color = gameSeq[i];
      const btn = document.querySelector(`.${color}`);
      btnFlash(btn);

      sounds[color].currentTime = 0;
      sounds[color].play();
    }, i * flashDelay);
  }
}

function checkSeq(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(() => {
        scoreUp();
      }, 1000);
    }
  } else {
    const finalScore = points;

    if (finalScore > highest) {
      highest = finalScore;
      localStorage.setItem("highest", highest);
      highScore.innerHTML = `🏆 New High Score: ${highest}`;
    } else {
      highScore.innerHTML = `Highest Score: ${highest}`;
    }

    score.innerHTML = `❌ Game Over! Final score: <b>${finalScore}</b>`;
    restart.innerText = "Press any key to restart!";

    document.body.classList.add("shake");

    setTimeout(() => {
      document.body.classList.remove("shake");
    }, 500);

    sounds["error"].currentTime = 0;
    sounds["error"].play();

    reset();
  }
}

function btnPress() {
  let btn = this;
  btnFlash(btn);

  let userColor = btn.getAttribute("id");
  userSeq.push(userColor);

  sounds[userColor].currentTime = 0;
  sounds[userColor].play();

  checkSeq(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  points = -1;
  startBtn.classList.remove("opacity");
  startBtn.innerText = "Play Again!";
}
