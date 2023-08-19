let bubble = "";
let score = 0;
let hitvalue ;
let hitval ;

function makeBubble() {
    bubble = "";
    hitvalue = Math.floor(Math.random() * 10);
    document.querySelector("#hitvalue").innerText = hitvalue;
    for(let i=1; i<=133; i++) {
        let val = Math.floor(Math.random() * 10);
        bubble += `<div class="bubble">${val}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = bubble;
}

function timer() {
    let time = 60;
    let timeval = setInterval(function() {
        if(time > 0) {
            time--;
            document.querySelector("#timerval").innerText = time;
        } else {
            clearInterval(timeval);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over<br> Your Score is ${score}</h1>`;
        }
    }, 1000)
}

function increaseScore() {
    if(hitvalue === hitval) {
        score += 10;
        document.querySelector("#scoreval").innerText = score;
        makeBubble();
    } else {
        score -= 10;
        document.querySelector("#scoreval").innerText = score;
        makeBubble();
    }
}

document.querySelector("#pbtm").addEventListener("click", function(details) {
    hitval = Number(details.target.innerText);
    console.log(hitval);
    increaseScore();
    makeBubble();
})

makeBubble();
timer();