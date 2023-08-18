const gameSeq = [];
const userSeq = [];
const colors = ["green", "red", "yellow", "blue"];
const levelBoard = document.querySelector(".level");
const title = document.querySelector(".title");
const buttons = document.querySelectorAll(".btn");
const board = document.querySelector(".container");

let level = 0;
let started = false;
let highScore = 0;
let score = 0;

document.addEventListener("keypress", startGame);
document.querySelector(".mobile-btn").addEventListener("click", startGame);

function startGame() {
	if (!started) {
		started = true;
		title.style.visibility = "hidden";
		levelUp();
		for (const btn of buttons) {
			btn.addEventListener("click", buttonPress);
		}
	}
}
function levelUp() {
	userSeq.splice(0, userSeq.length);
	level++;
	levelBoard.innerText = `Level ${level}`;

	// selecting random button and flash it
	let randomColor = colors[Math.floor(Math.random() * 4)];
	makeSound(randomColor);
	gameSeq.push(randomColor);
	let btn = document.querySelector(`.${randomColor}`);
	flashButton(btn);
	console.log(gameSeq);
}

function flashButton(btn) {
	btn.classList.add("flash");

	setTimeout(() => {
		btn.classList.remove("flash");
	}, 250);
}

function buttonPress() {
	let btn = this;
	let btnId = btn.getAttribute("id");
	setTimeout(() => {
		makeSound(btnId);
	}, 500);
	userSeq.push(btnId);
	// console.log(userSeq);
	flashButton(btn);
	checkAns(userSeq.length - 1);
}

function checkAns(lvl) {
	if (userSeq[lvl] === gameSeq[lvl]) {
		if (userSeq.length === gameSeq.length) {
			console.log("correct");
			score += level;
			setTimeout(() => {
				levelUp();
			}, 1000);
		} else {
			console.log("continue");
		}
	} else {
		gameOver();
	}
}

function makeSound(name) {
	let sound = new Audio(`./sounds/${name}.mp3`);
	sound.play();
}

function gameOver() {
	makeSound("wrong");
	flashScreen();
	let deviceWidth = window.innerWidth;
	console.log(deviceWidth);
	let restartMsg = "any key";
	if (deviceWidth < 550) {
		restartMsg = "start button";
	}
	highScore = Number(localStorage.getItem("highScore"));
	highScore = Math.max(highScore, score);
	localStorage.setItem("highScore", highScore);
	levelBoard.innerText = `Score ${score}`;
	title.innerHTML = `<b>Game Over!</b> High score: <b> ${highScore}</b> <br/>
	Press ${restartMsg} to restart the game.`;
	// reset everything
	score = 0;
	level = 0;
	gameSeq.splice(0, gameSeq.length);
	started = false;
	title.style.visibility = "visible";
	for (const btn of buttons) {
		btn.removeEventListener("click", buttonPress);
	}
}

function flashScreen() {
	let body = document.querySelector("body");
	body.classList.add("flash-screen");
	setTimeout(() => {
		body.classList.remove("flash-screen");
	}, 150);
}
