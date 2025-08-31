let catFactBtn = document.querySelector(".fact-btn");
let sideBar = document.querySelector(".side-bar");
let earthBtn = document.querySelector(".earth-facts");
let uselessFactBtn = document.querySelector(".usels-facts");
let jokeBtn = document.querySelector(".joke-btn");
let quoteBtn = document.querySelector(".quote-btn");
let heading = document.querySelector(".heading");
let firstLine = document.querySelector(".first-line");
let secLine = document.querySelector(".second-line");
let getMore = document.querySelector(".moreBtn");

let cat_fact = false; let earth_fact = false; let useless_fact = false; let coding_jokes = false; let GOT_quotes = false;
let isMove = false; let isOn = false;

let oldBulb = document.querySelector(".glass");
oldBulb.addEventListener("click",function() {
    isOn = !(isOn);
    if(isOn) {
        document.querySelector(".interface").style.backgroundColor = "#222";
        sideBar.style.backgroundColor = "#222";
        document.querySelector(".filament").style.filter = "drop-shadow(0px 0px 0px #444)";
        document.querySelector(".filament").style.borderColor = "transparent transparent #444 transparent";
        oldBulb.style.boxShadow = "0 0 0 red";
        heading.style.color = "azure";
        firstLine.style.color = "azure";
        secLine.style.color = "azure";
    } else {
        document.querySelector(".interface").style.backgroundColor = "rgb(173,164,164)";
        sideBar.style.backgroundColor = "#e1d5b5";
        document.querySelector(".filament").style.filter = "drop-shadow(0px 2px 2px yellow)";
        document.querySelector(".filament").style.borderColor = "transparent transparent yellow transparent";
        oldBulb.style.boxShadow = "0 0 20px yellow";
        heading.style.color = "black";
        firstLine.style.color = "black";
        secLine.style.color = "black";
    }
    
});

getMore.addEventListener("click", function () {
    isMove = !(isMove);
    if (isMove) {
        getMore.style.transform = "translateY(2px)";
    } else {
        getMore.style.transform = "translateY(0px)";
    }
    if (cat_fact) {
        randomCatFact();
        secLine.innerText = "";
    } else if (earth_fact) {
        earthFacts();
        secLine.innerText = "";
    } else if (useless_fact) {
        uselessFact();
        secLine.innerText = "";
    } else if (coding_jokes) {
        programmingJokes();
    } else if (GOT_quotes) {
        GOTquotes();
    }
})

catFactBtn.addEventListener("click", function () {
    setTimeout(function () {
        sideBar.style.display = "block";
        catFactBtn.style.display = "none";
    }, 100);
    heading.innerText = "Random Cat Facts";
    randomCatFact();
    getMore.innerText = "more facts";
    secLine.innerText = "";
    cat_fact = true;
    earth_fact = false;
    useless_fact = false;
    GOT_quotes = false;
});

earthBtn.addEventListener("click", function () {
    setTimeout(function () {
        sideBar.style.display = "block";
        earthBtn.style.display = "none";
    }, 100);
    heading.innerText = "Random Earth Facts";
    earthFacts();
    getMore.innerText = "more facts";
    secLine.innerText = "";
    earth_fact = true;
    cat_fact = false;
    useless_fact = false;
    GOT_quotes = false;
});

uselessFactBtn.addEventListener("click", function () {
    setTimeout(function () {
        sideBar.style.display = "block";
        uselessFactBtn.style.display = "none";
    }, 100);
    heading.innerText = "Random Facts";
    uselessFact();
    getMore.innerText = "more facts";
    secLine.innerText = "";
    useless_fact = true;
    cat_fact = false;
    earth_fact = false;
    GOT_quotes = false;
});

jokeBtn.addEventListener("click", function () {
    setTimeout(function () {
        sideBar.style.display = "block";
        jokeBtn.style.display = "none";
    }, 100);
    heading.innerText = "Programming Jokes";
    programmingJokes();
    getMore.innerText = "more jokes";
    coding_jokes = true;
    useless_fact = false;
    cat_fact = false;
    earth_fact = false;
    GOT_quotes = false;
});

quoteBtn.addEventListener("click", function () {
    setTimeout(function () {
        sideBar.style.display = "block";
        quoteBtn.style.display = "none";
    }, 100);
    heading.innerText = "Game of Thrones Quotes";
    GOTquotes();
    getMore.innerText = "more quotes";
    useless_fact = false;
    cat_fact = false;
    earth_fact = false;
    coding_jokes = false;
    GOT_quotes = true;
});

let backBtn = document.querySelector(".backBtn");
backBtn.addEventListener("click", function () {
    sideBar.style.display = "none";
    if (cat_fact) {
        catFactBtn.style.display = "block";
    } else if (earth_fact) {
        earthBtn.style.display = "block";
    } else if (useless_fact) {
        uselessFactBtn.style.display = "block";
    } else if (coding_jokes) {
        jokeBtn.style.display = "block";
    } else if (GOT_quotes) {
        quoteBtn.style.display = "block";
    }
});

// Random Cat Facts
let urlForCat = "https://catfact.ninja/fact";
function randomCatFact() {
    fetch(urlForCat)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            firstLine.innerText = `"${data.fact}"`;
        })
        .catch((e) => {
            firstLine.innerText = "You've reached max limit";
            secLine.innerText = "";
        })
}

// Random Earth Facts
let earthUrl = "https://api.bootprint.space/all/earth";
function earthFacts() {
    fetch(earthUrl)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            firstLine.innerText = `"${data.fact}"`;
        })
        .catch((e) => {
            firstLine.innerText = "You've reached max limit";
            secLine.innerText = "";
        })
}

// useless facts 
let uselessFactUrl = "https://uselessfacts.jsph.pl/api/v2/facts/random";
function uselessFact() {
    fetch(uselessFactUrl)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            firstLine.innerText = `"${data.text}"`;
        })
        .catch((e) => {
            firstLine.innerText = "You've reached max limit";
            secLine.innerText = "";
        })
}

// Random Programming Jokes
let codingJokesUrl = "https://v2.jokeapi.dev/joke/Programming";
function programmingJokes() {
    fetch(codingJokesUrl)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
            if (data.type == "twopart") {
                firstLine.innerText = data.setup;
                secLine.innerText = `:- ${data.delivery}`;
            } else if (data.type == "single") {
                firstLine.innerText = data.joke;
                secLine.innerText = "";
            }
        })
        .catch((e) => {
            firstLine.innerText = "You've reached max limit";
            secLine.innerText = "";
        })
}

// Game of Thrones quotes
let GOTUrl = "https://api.gameofthronesquotes.xyz/v1/random";
function GOTquotes() {
    fetch(GOTUrl)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            firstLine.innerText = `"${data.sentence}"`;
            secLine.innerText = `:- ${data.character.name}`;
        })
        .catch((e) => {
            firstLine.innerText = "You've reached max limit";
            secLine.innerText = "";
        })
}
