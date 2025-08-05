
# Simon Says Game

[![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)](https://www.javascript.com/)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

> A web-based implementation of the classic memory game "Simon Says." Challenge your memory and repeat progressively longer sequences of colors.

## Table of Contents

- [Project Overview](#project-overview)
- [How It Works](#how-it-works)
- [Key Highlights & Technical Features](#key-highlights--technical-features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

This project is a web-based implementation of the classic memory game "Simon Says." The player is challenged to remember and repeat a progressively longer sequence of colors. The game is built using fundamental web technologies: HTML for the structure, CSS for styling, and JavaScript for the game logic and interactivity.

## How It Works

1.  **Starting the Game:** The game begins when the user presses any key on the keyboard.
2.  **Game Sequence:** The game generates a random sequence of colors, which is indicated by the corresponding button flashing briefly.
3.  **Player's Turn:** The player must then click the buttons in the same order as the sequence shown.
4.  **Leveling Up:** If the player correctly reproduces the sequence, the game progresses to the next level, adding one more color to the sequence.
5.  **Game Over:** If the player makes a mistake, the game ends. The screen flashes red, and the player's final score (the last completed level) is displayed. The player can then restart the game by pressing any key.

-   **Dynamic Game Logic (JavaScript):**
    -   **Event-Driven:** The game uses event listeners for keyboard presses to start the game and for mouse clicks on the colored buttons to register the player's input.
    -   **Random Sequence Generation:** At each level, a new color is randomly added to the game's sequence, ensuring a different experience each time.
    -   **State Management:** The game effectively manages its state, keeping track of whether the game has started, the current level, the game's sequence, and the user's input sequence.
    -   **User Input Validation:** The player's input sequence is checked against the game's sequence at each step.

-   **Visual Feedback (CSS & JavaScript):**
    -   The `flash` class in CSS provides immediate visual feedback when a button is part of the sequence or is pressed.
    -   The background color of the page changes to red upon a "Game Over" condition, providing clear feedback to the player.
-   **DOM Manipulation:** JavaScript is used to dynamically update the text on the screen to show the current level, game-over messages, and the final score.

## Getting Started

To play the game locally, follow these steps:

### Prerequisites

> Make sure you have a modern web browser installed (e.g., Chrome, Firefox, Safari).

### Installation

1.  **Clone the repository:**

bash
    > git clone https://github.com/codewithshek/Simon-Says-Game.git
    1.  Press any key to start the game.
2.  Watch the sequence of colors.
3.  Repeat the sequence by clicking the corresponding color buttons.
4.  Progress through the levels and try to beat your high score!

## Contributing

> Contributions are welcome! If you have any ideas or suggestions, feel free to open an issue or submit a pull request.
>
> 1.  Fork the repository.
> 2.  Create a new branch for your feature or bug fix.
> 3.  Commit your changes.
> 4.  Push to the branch.
> 5.  Submit a pull request.

## License

This project is licensed under the MIT License.

