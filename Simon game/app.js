let gameSeq = []
let userSeq = []
let highest_score = 0
let matchAll = true

let btns = ["red", "yellow", "purple", "green"]
let audioPlayer = document.getElementById("audioPlayer")

let h2 = document.getElementById("start");
let started = false
let level = 0

function btnFlash(randBtn){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            randBtn.classList.add("flash")
            if(matchAll){audioPlayer.src = `tunes/${randBtn.getAttribute("id")}.mp3`
            audioPlayer.play()}
        }, 600)
        setTimeout(()=>{
            randBtn.classList.remove("flash");
            resolve(1)
        }, 1000)
    })  
}

let userFlash = (randBtn) => { 
    setTimeout(()=>{
        if(matchAll){audioPlayer.src = `tunes/${randBtn.getAttribute("id")}.mp3`
        audioPlayer.play()}
        randBtn.classList.add("user")
    }, 40)
    setTimeout(()=>{
        randBtn.classList.remove("user");
    }, 200)
}

let levelUp = async() => {
    level++
    h2.innerHTML = `Level ${level}`;
    h2.style.color = "green"
    await (new Promise((resolve, reject)=> {
        setTimeout(()=>{
            if(matchAll){audioPlayer.src = `tunes/success.mp3`
            audioPlayer.play()}
        }, 300)
        setTimeout(()=>{
            resolve(1)
        }, 600)
    }))
    

    setTimeout(() => {
        h2.style.fontSize = "24px"
    }, 200);
    setTimeout(()=>{
        h2.style.fontSize = "26px"
    }, 300)

    //random btn
    for(let i=0; i<level; i++){
        let randIndx = Math.floor(Math.random() * 4)
        let randBtn = document.getElementsByClassName(btns[randIndx])[0]
        gameSeq.push(btns[randIndx])
        await btnFlash(randBtn)
    }
}

document.addEventListener("keypress", () => {
    userSeq = []
    gameSeq = []
    matchAll = true
    if(!started){
        started = true;
        document.querySelector(".start-btn").style.display = "none"
        levelUp()
    }
})

function startGame(){
    userSeq = []
    gameSeq = []
    matchAll = true
    if(!started){
        started = true;
        document.querySelector(".start-btn").style.display = "none"
        levelUp()
    }
    else{
        reset()
    }
}

function checkMatch() {
    if(userSeq[userSeq.length-1] == gameSeq[userSeq.length-1]){
        // console.log(true)
        return true
    }
    else{
        if(level-1 > highest_score) highest_score = level-1
        h2.innerHTML = `Game Over. Your score: ${level-1} <br> Highest Score: ${highest_score}`

        setTimeout(()=>{
            document.body.style.backgroundColor = "red"
            let newBtn = document.querySelector(".start-btn")
            newBtn.style.display = "block"
            newBtn.backgroundColor = "green"
            newBtn.innerText = "New Game"
        })
        setTimeout(()=>{
            document.body.style.backgroundColor = "antiquewhite"
        }, 200)
        matchAll = false
        audioPlayer.src = `tunes/lose.mp3`
        audioPlayer.play()
        return false
    }
}

function btnPressed() {
    let btns = this;
    userFlash(btns)
    let colorPressed = btns.getAttribute("id")
    userSeq.push(colorPressed)
    checkMatch()
    if(matchAll && checkMatch() && userSeq.length == gameSeq.length){
        gameSeq = []
        userSeq = []
        setTimeout(() => {
            levelUp()
        }, 300);   
    }
}

let allBtns = document.getElementsByClassName("btn")
for(let btns of allBtns){
    btns.addEventListener('click', btnPressed)
}

function reset() {
    level = 0
    started = false
    startGame()
}