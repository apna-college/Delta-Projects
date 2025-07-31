console.log("Game started press quit to exit the game !");

const fav_Movie = "war";
let gameActive = true;

// Get DOM elements
const guessInput = document.getElementById("guessInput");
const submitBtn = document.getElementById("submitBtn");
const quitBtn = document.getElementById("quitBtn");
const messageDiv = document.getElementById("message");

// Function to display messages
function showMessage(text, isSuccess) {
  messageDiv.textContent = text;
  messageDiv.className = isSuccess ? "success" : "error";
}

// Function to handle guess submission
function handleGuess() {
  if (!gameActive) return;

  const guess = guessInput.value.toLowerCase().trim();

  if (guess === "") {
    showMessage("Please enter a guess!", false);
    return;
  }

  if (guess === fav_Movie) {
    showMessage("Correct guess! You win! 🎉", true);
    gameActive = false;
    submitBtn.disabled = true;
  } else if (guess === "quit") {
    handleQuit();
  } else {
    showMessage("Wrong guess! Please try again.", false);
  }

  guessInput.value = "";
  guessInput.focus();
}

// Function to handle quit
function handleQuit() {
  showMessage("You quit the game. Thanks for playing!", false);
  gameActive = false;
  submitBtn.disabled = true;
  quitBtn.disabled = true;
}

// Event listeners
submitBtn.addEventListener("click", handleGuess);
quitBtn.addEventListener("click", handleQuit);
guessInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    handleGuess();
  }
});

// Initial focus on input
guessInput.focus();
