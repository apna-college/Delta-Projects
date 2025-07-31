let maxNumber;
let randomNumber;
let gameActive = false;

function startGame() {
  const maxInput = document.getElementById("max-number");
  maxNumber = parseInt(maxInput.value);

  if (isNaN(maxNumber) || maxNumber < 1) {
    showMessage("Please enter a valid number greater than 0");
    return;
  }

  randomNumber = Math.floor(Math.random() * maxNumber) + 1;
  gameActive = true;

  // Switch to game screen
  document.getElementById("setup-screen").classList.add("hidden");
  document.getElementById("game-screen").classList.remove("hidden");
  document.getElementById("guess").value = "";
  showMessage(`Game started! Guess a number between 1 and ${maxNumber}`);
}

function checkGuess() {
  if (!gameActive) return;

  const guessInput = document.getElementById("guess");
  const guess = parseInt(guessInput.value);

  if (isNaN(guess)) {
    showMessage("Please enter a valid number");
    return;
  }

  if (guess === randomNumber) {
    showMessage(
      `Congratulations! You guessed the correct number: ${randomNumber}`
    );
    gameActive = false;
    setTimeout(() => {
      resetGame();
    }, 3000);
  } else {
    showMessage("Wrong guess! Try again");
    guessInput.value = "";
    guessInput.focus();
  }
}

function quitGame() {
  showMessage("Game over! The number was: " + randomNumber);
  gameActive = false;
  setTimeout(() => {
    resetGame();
  }, 3000);
}

function resetGame() {
  document.getElementById("setup-screen").classList.remove("hidden");
  document.getElementById("game-screen").classList.add("hidden");
  document.getElementById("max-number").value = "";
  document.getElementById("guess").value = "";
  showMessage("");
}

function showMessage(text) {
  document.getElementById("message").textContent = text;
}

// Add event listener for Enter key
document.getElementById("guess").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    checkGuess();
  }
});
