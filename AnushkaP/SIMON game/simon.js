let gamesq = [];
let usersq = [];

let started = false;
let level = 0;
let h3 = document.querySelector("h3");

let btns = ["red", "blue", "green", "yellow"];

document.addEventListener("keypress", function (event) {
  if (event.key == "Enter") {
    if (started == false) {
      console.log("started");
      started = true;

      levelup();
    }
  }
});

// Increase level value and creating a random button(class)

function levelup() {
  level++;
  h3.innerText = `level ${level}`;
  hs = highscores(level);

  usersq = [];
  let ridx = Math.floor(Math.random() * 4);
  let rcolor = btns[ridx];
  gamesq.push(rcolor);
  let rbtn = document.querySelector(`.${rcolor}`);
  btnflash(rbtn);
}

// function which flashes the buttons (after user i/p or system i/p)

function btnflash(btn) {
  if (btn.classList.contains("red")) {
    btn.classList.add("flash1");
    setTimeout(function () {
      btn.classList.remove("flash1");
    }, 300);
  } else if (btn.classList.contains("blue")) {
    btn.classList.add("flash2");
    setTimeout(function () {
      btn.classList.remove("flash2");
    }, 300);
  } else if (btn.classList.contains("green")) {
    btn.classList.add("flash3");
    setTimeout(function () {
      btn.classList.remove("flash3");
    }, 300);
  } else if (btn.classList.contains("yellow")) {
    btn.classList.add("flash4");
    setTimeout(function () {
      btn.classList.remove("flash4");
    }, 300);
  }
}
function checkAns(idx) {
  if (usersq[idx] === gamesq[idx]) {
    if (usersq.length == gamesq.length) {
      setTimeout(levelup, 1000);
    }
  } else {
    h3.innerHTML = `Game over! Your score is " <b>${level}</b> " <br> Press "Enter" key to start`;
    document.querySelector("body").style.backgroundColor = "cyan";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "black";
    }, 100);
    h6.innerText = `Your highscore is ${hs}`;
    resetfn();
  }
}

function btnpress() {
  let btn = this;
  usercolor = btn.getAttribute("id");
  usersq.push(usercolor);
  btnflash(btn);

  checkAns(usersq.length - 1);
}
let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
  btn.addEventListener("click", btnpress);
}

// resetting game after game end
function resetfn() {
  started = false;
  gamesq = [];
  usersq = [];
  level = 0;
}

let h6 = document.querySelector("h6");

let hs = 0;
function highscores(level) {
  if (level > hs) {
    hs = level;
    return hs;
  } else {
    return hs;
  }
  hs = level;
}
