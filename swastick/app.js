function getGuess(diff) {
    if (diff.value === "Easy") return 9;
    if (diff.value === "Normal") return 7;
    if (diff.value === "Hard") return 5;
}

async function getWord(length = 7) {
    try {
        let word = await axios.get(
            `https://random-word-api.vercel.app/api?words=1&length=${length}`
        );
        let hint = await axios.get(
            `https://api.dictionaryapi.dev/api/v2/entries/en/${word.data[0]}`
        );
        // console.log(word.data[0]);
        return {
            word: word.data[0],
            hint: hint.data[0].meanings[0].definitions[0].definition,
        };
    } catch (error) {
        console.error(error);
    }
}

function changeImg(img, count) {
    if (count < 10) {
        img.setAttribute("src", `images/hangman-${count}.svg`);
        return ++count;
    }
}

async function setWord(ul, hintPara) {
    let WordLength = Math.floor(Math.random() * 5 + 5);
    let { word, hint } = await getWord(WordLength);
    hintPara.innerText = "Hint: " + hint;
    for (let i = 0; i < word.length; i++) {
        let li = document.createElement("li");
        li.classList.add("letter");
        li.classList.add(`${word[i]}`);
        ul.append(li);
    }
    return word;
}

function showCorrect(value, word, ul) {
    if (value) {
        ul.querySelectorAll(`.${value}`).forEach((li) => {
            li.innerText = value;
            li.classList.add("guessed");
        });
    }
    if (document.querySelectorAll(".guessed").length == word.length) {
        gameOver(
            true,
            word,
            document.querySelector(".game-modal"),
            document.querySelector(".start")
        );
    }
}

function showGuessLeft(guessCount, wrongGuess) {
    let guess = document.querySelector(".guessCount");
    guess.innerText = `${wrongGuess}/${guessCount}`;
    if (wrongGuess < Math.ceil(guessCount / 3)) {
        guess.classList.remove("danger", "careful");
        guess.classList.add("safe");
    } else if (wrongGuess < Math.ceil((guessCount * 2) / 3)) {
        guess.classList.remove("danger", "safe");
        guess.classList.add("careful");
    } else {
        guess.classList.remove("careful", "safe");
        guess.classList.add("danger");
    }
}

function gameOver(isVictory, word, gameModal, startButton) {
    setTimeout(() => {
        gameModal.classList.remove("vanish");
        const modalText = isVictory
            ? ` You Found the Word: <b>${word}</b>`
            : `The correct word was: <b>${word}</b>`;
        gameModal.querySelector("img").src = `images/${
            isVictory ? "victory.gif" : "lost.gif"
        }`;
        gameModal.querySelector("h2").innerText = `${
            isVictory ? "Congrats!" : "Game Over!"
        }`;
        gameModal.querySelector("p").innerHTML = `${modalText}`;
        console.log("calling");
        gameModal.querySelector(".play-again").addEventListener("click", () => {
            gameModal.classList.add("vanish");
            document.querySelector(".main-game").classList.add("vanish");
            document.querySelector(".game-rules").classList.remove("vanish");
            startButton.querySelector("div").classList.add("vanish");
        });
        console.log("done");
    }, 300);
}

async function setDefault(ul, keys, hint, img) {
    ul.textContent = "";
    hint.innerText = "";
    img.setAttribute("src", `images/hangman.svg`);
    keys.forEach((key) => {
        key.classList.remove("right", "wrong", "guessed", "disabled");
    });
    let count = 0;
    let wrongGuess = 0;
    let guessCount = getGuess(diff);
    showGuessLeft(guessCount, wrongGuess);
    let word = await setWord(ul, hint);
    setTimeout(() => {
        document
            .querySelectorAll(".inner")
            .forEach((div) => div.classList.toggle("vanish"));
    }, 300);
    return { count, wrongGuess, guessCount, word };
}

document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.querySelector(".start");
    const diff = document.querySelector("#diff");
    const img = document.querySelector(".hangmanPic");
    const gameModal = document.querySelector(".game-modal");
    const keys = document.querySelectorAll(".key");
    let ul = document.querySelector(".word");
    let hint = document.querySelector(".hint");
    let isStart = false;
    startButton.addEventListener("click", async () => {
        startButton.querySelector("div").classList.remove("vanish");
        let { count, wrongGuess, guessCount, word } = await setDefault(
            ul,
            keys,
            hint,
            img
        );
        isStart = true;
        for (let key of keys) {
            key.addEventListener("click", () => {
                let value = key.value;
                if (word.includes(value)) {
                    key.classList.add("right");
                    showCorrect(value, word, ul);
                } else {
                    count = changeImg(img, count);
                    key.classList.add("wrong");
                    wrongGuess++;
                    console.log(wrongGuess);
                    showGuessLeft(guessCount, wrongGuess);
                    if (wrongGuess == guessCount)
                        gameOver(false, word, gameModal, startButton);
                }
                key.setAttribute("disabled", "");
                key.classList.add("disabled");
            });
        }
    });
});
