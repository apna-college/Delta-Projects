const buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];
let userClickedPattern = [];

let started = false;
let level = 0;

document.addEventListener("keypress", function() {
  if (!started) {
    document.getElementById("level-title").textContent = "Level " + level;
    nextSequence();
    started = true;
  }
});

document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", function () {
    const userChosenColour = this.getAttribute("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
  });
});

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(() => {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");
    document.body.classList.add("game-over");
    document.getElementById("level-title").textContent = "Game Over, Press Any Key to Restart";
    setTimeout(() => {
      document.body.classList.remove("game-over");
    }, 200);
    startOver();
  }
}

function nextSequence() {
  userClickedPattern = [];
  level++;
  document.getElementById("level-title").textContent = "Level " + level;
  const randomNumber = Math.floor(Math.random() * 4);
  const randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  document.getElementById(randomChosenColour).classList.add("pressed");
  setTimeout(() => {
    document.getElementById(randomChosenColour).classList.remove("pressed");
  }, 100);

  playSound(randomChosenColour);
}

function animatePress(currentColor) {
  document.getElementById(currentColor).classList.add("pressed");
  setTimeout(() => {
    document.getElementById(currentColor).classList.remove("pressed");
  }, 100);
}

function playSound(name) {
  const audio = new Audio(name + ".mp3");
  audio.play();
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}