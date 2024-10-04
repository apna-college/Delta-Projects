let gameseq = [];
let userseq = [];

let game = false;
let level = 0;


let btns = ['red','yellow','green','purple'];

let h2 = document.querySelector('h2');

document.addEventListener('keypress',function(){
    if(game == false){
        console.log('game was started');
        game = true;
    }

    levelup ();
})

function gameflash (btn){
    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove('flash');
    },250);
}

function userflash (btn){
    btn.classList.add('userflash');
    setTimeout(function(){
        btn.classList.remove('userflash');
    },250);
}

let highScore = 0;

function levelup (){
    userseq = [];
    level++;
    h2.innerText = (`Level ${level}`);

    let randidx = Math.floor(Math.random() *3);
    let randcolor = btns[randidx];
    let randbtn = document.querySelector(`.${randcolor}`);

    gameflash(randbtn);

    gameseq.push(randcolor);
    console.log(gameseq);
}

function checkans(idx){
    if(userseq[idx] === gameseq[idx]) {
        if(userseq.length == gameseq.length){
            setTimeout(levelup,1000);
        }
    }else{
        if (level > highScore) {
            highScore = level; 
        }
       h2.innerHTML = `Game over! Your score was <b>${level}</b> <br> High score was <b>${highScore}</b> <br> Press any key to start the game.`;
       let body = document.querySelector('body').style.backgroundColor = 'red';

       setTimeout(function(){
        document.querySelector('body').style.backgroundColor = 'white';
       },250);

       

       reset ();
    }
}

function btnpress (){
    let btn = this;
    userflash(btn);

    usercolor = btn.getAttribute('id');
    userseq.push(usercolor);

    checkans(userseq.length-1);
}

let allbtns = document.querySelectorAll('.button');
for(btn of allbtns){
    btn.addEventListener('click', btnpress);
}

function reset (){
    gameseq = [];
    userseq = [];
    level = 0;
}



