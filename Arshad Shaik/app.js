let allHoles = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

let timeInterval = 550;
let started = false;
let score = 0;

function randomHoleAppear() {
    let randomHole = Math.floor((Math.random() * 9));
    console.log(randomHole);
    console.log(allHoles[randomHole]);
    let randHole = allHoles[randomHole];
    let hole = document.querySelector(`#${randHole}`);
    if (hole.childElementCount != 0) return;
    console.log(hole);
    let mole = document.createElement("div");
    mole.classList.add("mole");
    hole.appendChild(mole);
    mole.addEventListener("click", function (event) {
        event.stopPropagation();
        let parent = mole.parentElement;
        parent.classList.add("correct");
        window.setTimeout(function () {
            parent.classList.remove("correct");
        }, 100);
        mole.remove();
        score++;
        console.log(`score = ${score}`);
        document.querySelector("#liveScore").textContent = `Score: ${score}`;

    });
    window.setTimeout(function () {
        mole.remove();
    }, 2000);

}

let id;

function startGame() {
    id = window.setInterval(randomHoleAppear, timeInterval);
}



let holes = document.querySelectorAll(".hole");

for (let x of holes) {
    x.addEventListener("click", function () {
        if (started) {
            console.log("Game Over!");
            x.classList.add("wrong");
            window.setTimeout(function () {
                x.classList.remove("wrong");
            }, 100);
            started = false;
            console.log(`Final Score: ${score}`);
            let h2 = document.querySelector("h2");
            h2.innerHTML = `Game Over! Final Score: <span id="score">${score}</span><br>Press <span id="enter">Enter</span> to restart!`;
            let moles = document.querySelectorAll(".mole");
            for (let mole of moles) {
                if (mole) {
                    mole.remove();
                }
            }
            score = 0;
            clearInterval(id);
        }
    });
}

window.addEventListener("keydown", function (event) {

    if (!started) {
        if (event.key == "Enter") {
            started = true;
            let h2 = document.querySelector("h2");
            h2.innerHTML = "Game Started!";
            let h3 = document.querySelector("h3");
            h3.innerText = "Score: 0";
            let enter = document.querySelector("#enter");
            if (enter) {
                enter.classList.add("entery");
                window.setTimeout(function () {
                    enter.classList.remove("entery");
                }, 100);
            }
            window.setTimeout(function () {
                enter.classList.remove("entery");
            }, 100);
            startGame();
        }
    }


});







