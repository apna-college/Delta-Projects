let btn = document.querySelector('.btn');
let ul = document.querySelector('ul');
let h1 = document.querySelector('h1');
let p = document.querySelector('p');
let main = document.querySelector('.main');
let progressBar = document.querySelector('.pbar');
let progress = document.querySelector('.progress');
let left=document.querySelector('#left');
let right=document.querySelector('#right');
let desc=document.querySelector('#desc');

let idx = 0;
let score = 0;
ul.classList.add('optionsList');

btn.addEventListener('click', () => {
    main.removeChild(btn);
    progressBar.classList.add('progressBar');
    start();
});

let info = [
    {
        ques: "What is the capital of france?",
        options: ['London', 'Berlin', 'Paris', 'Madrid'],
        ans: 'Paris'
    },
    {
        ques: "What planet is know as red planet?",
        options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
        ans: 'Mars'
    }
    , {
        ques: "Which is not a programming language?",
        options: ['C++', 'Python', 'D++', 'Java'],
        ans: 'D++'
    }
    , {
        ques: "Which is the chemical symbol for gold?",
        options: ['Go', 'Gd', 'Au', 'Ag'],
        ans: 'Au'
    },
    {
        ques: "Which is largest ocean on the Earth?",
        options: ['Arabic', 'Pacific', 'Indian', 'Atlantic '],
        ans: 'Pacific'
    }
    ,
    {
        ques: "After how many years FIFA world cup held?",
        options: ['1', '2', '3', '4'],
        ans: '4'
    }
];


function start() {
    makeQues();
    updateScore();
    makeOptions();
}



function makeQues() {
    h1.innerText = info[idx].ques;
    desc.classList.add('sep');
}

function updateScore() {
    left.innerText = `Question ${idx + 1} of ${info.length}`;
    right.innerText=`Score=${score}`;
}

function makeOptions() {
    for (let i = 0; i < info[idx].options.length; i++) {
        let li = document.createElement('li');
        li.classList.add('option');
        let newbtn = document.createElement('button');
        newbtn.classList.add('optionBtn');
        newbtn.innerText = info[idx].options[i];
        li.appendChild(newbtn);
        li.classList.add('hoverEffect');
        ul.appendChild(li);
        addOptionEvent(newbtn);
    }
}

function addOptionEvent(newbtn) {
    newbtn.addEventListener('click', (event) => {
        if (event.target.innerText == info[idx].ans) {
            event.target.parentElement.classList.remove('hoverEffect');
            event.target.parentElement.classList.add('greenbg');
            setTimeout(() => {
                event.target.parentElement.classList.remove('greenbg');
            }, 500)
            score++;
        }
        else if (event.target.innerText != info[idx].ans) {
            event.target.parentElement.classList.remove('hoverEffect');
            event.target.parentElement.classList.add('redbg');
            setTimeout(() => {
                event.target.parentElement.classList.remove('redbg');
            }, 500)
        }
        setTimeout(nextOptionAvail, 500);

    });
}

function nextOptionAvail() {
    idx++;
    console.log(idx * (100 / info.length));
    progress.style.width = `${idx * (100 / info.length)}%`;
    removeul();
    if (idx < info.length) {
        start(idx);
    }
    else {
        displayresult();
    }
}

function removeul() {
    for (let i = 0; i < 4; i++) {
        let li = ul.querySelector('li');
        ul.removeChild(li);
    }
}

function displayresult() {
    h1.innerText = `Scored ${score} out of ${info.length}.`
    if (score == info.length) {
        left.innerText = 'Perfect Score.You are a Genius';
        right.innerText='';
    }
    else if (score > (info.length/2)) {
        left.innerText = 'Keep it up.Great Effort by Half score';
        right.innerText='';
    }
    else {
        left.innerText = 'Need More Practice.Try Improving Yourself';
        right.innerText='';
    }

    idx = 0;
    score = 0;
    let newbutton = document.createElement('button');
    newbutton.innerText = 'Restart Quiz';
    desc.classList.add('bodybg');
     desc.classList.remove('sep');

    main.appendChild(newbutton);
    newbutton.classList.add('btn');
    newbutton.addEventListener('click', () => {
        main.removeChild(newbutton);
        progress.style.width = '0%';
          desc.classList.remove('bodybg');
        start();
    })
}




