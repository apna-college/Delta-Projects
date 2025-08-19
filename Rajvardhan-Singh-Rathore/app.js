console.log("connected");
let bird = document.querySelector('.bird');
let pipe1top = document.querySelector('.pipe1top');
let pipe1bottom = document.querySelector('.pipe1bottom');
let pipe2bottom = document.querySelector('.pipe2bottom');
let pipe2top = document.querySelector('.pipe2top');
let p = document.querySelector('p');
let p2 = document.querySelector('.p2');
let slider1 = document.querySelector('.slider');
let slider2 = document.querySelector('.slider2');
let pipeContainer = document.querySelector('.pipeContainer');
let randomHeight = 10;
let count= 0;
let mouseDown = false;
let birdCurrHeight = bird.offsetTop;
let pipe1Passed=false;
let pipe2Passed=false;
let gameOver=false;
// document.addEventListener("keydown",function(event){
//     if(event.code==="Space"){
//         bird.style.animation="none";
//         currTop = currTop-20;
//         bird.style.top = currTop+"px";
//         console.log(randomHeight);
//     }
// });
let birdMove = setInterval(()=>{
    if(!mouseDown){
        birdCurrHeight+=5;
        bird.style.top=birdCurrHeight+"px";
    }
    if(birdCurrHeight>window.innerHeight+50||birdCurrHeight<=0){
        gameOver=true;
        p.style.visibility="visible";
        pipeContainer.style.animationPlayState="paused";
        clearInterval(birdMove);
        clearInterval(stop);
        slider1.classList.add("paused");
        slider1.classList.add("paused");
        slider1.style.animation = "none";
        slider2.style.animation = "none";
    }
    // if(birdCurrHeight>500){
    //     p.style.visibility="visible";
    // }
},30)
pipeContainer.addEventListener("animationiteration",()=>{pipe1Passed=false;pipe2Passed=false;});

setInterval(()=>{
    let pipe1Rect = pipe1top.getBoundingClientRect();
    let birdRect = bird.getBoundingClientRect();
    if(!pipe1Passed&&pipe1Rect.right<birdRect.left){
        count++;
        pipe1Passed=true;
        p2.textContent=count;
    }
    // if(pipe1Rect.left>window.innerWidth){
    //     pipe1Passed=false;
    // }
    // if(pipe1Rect.left+pipe1Rect.widtht<=0){
    //     pipe1Passed=false;
    // }
    let pipe2Rect = pipe2top.getBoundingClientRect();
    if(!pipe2Passed&&pipe2Rect.right<birdRect.left){
        count++;
        pipe2Passed=true;
        p2.textContent=count;
    }
    // if(pipe2Rect.left>window.innerWidth){
    //     pipe2Passed=false;
    // }
    // if(pipe2Rect.left+pipe2Rect.width<0){
    //     pipe2Passed=false;
    // }

},30)
document.addEventListener("mousedown",()=>{
    mouseDown=true;
    birdCurrHeight-=55;
    bird.style.top=birdCurrHeight+"px";
});
document.addEventListener("mouseup",()=>{mouseDown=false;});
setInterval(()=>{
    if(!gameOver){
        pipe1bottom.style.height = (randomHeight+Math.floor(Math.random()*5.5))+"rem";
        pipe1bottom.style.animationPlayState = "running";
        pipe1top.style.height = (randomHeight+Math.floor(Math.random()*5))+"rem";
        pipe1top.style.animationPlayState = "running";
    }

},1000)
setInterval(()=>{
    if(!gameOver){
        pipe2bottom.style.height = (randomHeight+Math.floor(Math.random()*5.5))+"rem";
        pipe2bottom.style.animationPlayState = "running";
        pipe2top.style.height = (randomHeight+Math.floor(Math.random()*5))+"rem";
        pipe2top.style.animationPlayState = "running";
    }

},3000)
//collision detection
function checkCollide(){
    let birdRect = bird.getBoundingClientRect();
    let pipe1BottomRect = pipe1bottom.getBoundingClientRect();
    let pipe1TopRect = pipe1top.getBoundingClientRect();
    let pipe2BottomRect = pipe2bottom.getBoundingClientRect();
    let pipe2TopRect = pipe2top.getBoundingClientRect();

    if(isColliding(birdRect,pipe1BottomRect)
    ||isColliding(birdRect,pipe1TopRect)
    ||isColliding(birdRect,pipe2BottomRect)
    ||isColliding(birdRect,pipe2TopRect)){
        p.style.visibility="visible";
        gameOver=true;
        // pipe1top.style.animationPlayState="paused";
        slider1.classList.add("paused");
        slider2.classList.add("paused");
        slider1.style.animation = "none";
        slider2.style.animation = "none";
        pipeContainer.style.animationPlayState="paused";
        clearInterval(birdMove);
        clearInterval(stop);
        setInterval(()=>{location.reload();},5000);
    }
}
function isColliding(rect1,rect2){
    return(
        rect1.top<rect2.bottom&&
        rect1.left<rect2.right&&
        rect1.bottom>rect2.top&&
        rect1.right>rect2.left
    );
}
// setInterval(()=>{
//     if(birdCurrHeight>500){
//         p.style.visibility="visible";
//     }
// },30);
let stop = setInterval(checkCollide,30);



