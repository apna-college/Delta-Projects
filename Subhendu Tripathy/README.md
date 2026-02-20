# 🎮 Simon Says Game

A classic memory-enhancing game built with **Vanilla JavaScript**, featuring advanced DOM manipulation, smart audio feedback, and mobile responsiveness.

🔗 **Live Demo:** [Play the Game Here!](https://st-64.github.io/simon-says-game/)

## ✨ Key Features

- **🧠 Logic & State Management:** Tracks complex game sequences and validates user input in real-time.
- **⚡ Optimized Performance:** Uses **Event Delegation** to handle clicks efficiently with fewer event listeners.
- **📱 Fully Responsive:** Works seamlessly on Desktop (Keyboard/Mouse) and Mobile (Touch support).
- **🔊 Smart Audio Engine:**
  - **Dynamic Sound Effects:** Distinct sounds for each actions.
  - **Context-Aware Audio:** Plays a "Click" sound for normal moves but switches to a "Level Up" victory sound _only_ on the final winning move.
  - **Background Music:** Loops automatically and pauses upon "Game Over."
- **🏆 High Score Tracking:** Persistently tracks and displays the user's personal best score during the session.

## 🛠️ Tech Stack

- **HTML5:** Semantic structure and audio elements.
- **CSS3:** Flexbox for layout, animations (flash/shake effects), and responsive media queries.
- **JavaScript (ES6+):** Game logic, DOM manipulation, `setTimeout` for timing, and `Audio()` object management.

## 🚀 How to Run Locally

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/st-64/simon-says-game.git](https://github.com/st-64/simon-says-game.git)
    ```
2.  **Navigate to the folder:**
    ```bash
    cd simon-says-game
    ```
3.  **Open `index.html`:**
    Simply double-click `index.html` or run it using VS Code "Live Server" to enable all audio features.

## 🕹️ How to Play

1.  **Start:** Press any key (Desktop) or Tap the screen (Mobile) to begin.
2.  **Watch:** The game will flash a color sequence.
3.  **Repeat:** Click the buttons in the exact same order.
4.  **Advance:** Each level adds one new step to the sequence.
5.  **Game Over:** If you miss a step, the screen flashes red and the game resets. Try to beat your High Score!

## 📂 Project Structure

```text
/simon-says-game
  ├── index.html       # Game structure and audio tags
  ├── style.css        # Visual styling and animations
  ├── app.js           # Game logic and event handling
  └── /Sounds          # Audio assets (bgm.mp3, click.mp3, etc.)
```
