# Whack-A-Mole

A small browser-based Whack-A-Mole game implemented with HTML, CSS and vanilla JavaScript.

## What this is

This is a simple interactive game where moles appear in a 3x3 grid. Press Enter to start the game, click a mole to score points, and clicking an empty hole ends the current round.

## Files

- `index.html` — Game markup and the container for the grid and score.
- `style.css` — Visual styles and layout (3x3 grid, mole styling).
- `app.js` — Game logic: mole spawn, scoring, start/restart, and simple game-over handling.
- `mole.jpg` — (optional) image used for the mole. If missing, the mole style references `mole.jpg`; you can replace it with your own image or remove the `background-image` rule in `style.css`.

## How to run

This is a static site — no build or server required. Open `index.html` in your browser.

From PowerShell you can run:

```powershell
# open in default browser (Windows)
start .\index.html

# or run a simple HTTP server (recommended if you want to serve files locally)
# (requires Python 3 installed)
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

## Controls / Gameplay

- Press `Enter` to start or restart the game.
- Click a mole to score a point.
- Clicking a hole when there is no mole triggers Game Over (the game stops and shows final score).
- Score is shown at the top-left ("Score: X").







