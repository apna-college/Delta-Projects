const welcomePage = document.getElementById("welcome-content");
const quoteContentBtn = document.getElementById("quote-content-btn");
const foodFactsBtn = document.getElementById("food-facts-btn");
const dictionaryBtn = document.getElementById("dictionary-btn");
const openSidebarBtn = document.getElementById("open-sidebar-btn");



const quoteContent = document.getElementById("quote-content");
const foodFacts = document.getElementById("food-facts");
const dictionaryCtn = document.getElementById("dictionary-ctn");
const sidebar = document.getElementById("sidebar");

function hideAllContent() {
    quoteContent.style.display = "none";
    foodFacts.style.display = "none";
    dictionaryCtn.style.display = "none";
    welcomePage.style.display = "flex";
};
hideAllContent();

quoteContentBtn.addEventListener("click", () => {
    foodFacts.style.display = "none";
    dictionaryCtn.style.display = "none"
    welcomePage.style.display = "none";
    quoteContent.style.display = "flex";
    sidebar.style.marginLeft = "-252px";
    openSidebarBtn.style.opacity = "1";
});

foodFactsBtn.addEventListener("click", () => {
    quoteContent.style.display = "none";
    dictionaryCtn.style.display = "none"
    welcomePage.style.display = "none";
    foodFacts.style.display = "flex";
    sidebar.style.marginLeft = "-252px";
    openSidebarBtn.style.opacity = "1";
});

dictionaryBtn.addEventListener("click", () => {
    quoteContent.style.display = "none";
    foodFacts.style.display = "none";
    welcomePage.style.display = "none";
    dictionaryCtn.style.display = "flex"
    sidebar.style.marginLeft = "-252px";
    openSidebarBtn.style.opacity = "1";
});



openSidebarBtn.addEventListener("click", () => {
    sidebar.style.marginLeft = "0px"; // ---------
    openSidebarBtn.style.opacity = "0";
});

const clossSidebarBtn = document.getElementById("closs-sidebar-btn");
clossSidebarBtn.addEventListener("click", () => {
    openSidebarBtn.style.opacity = "1";
    sidebar.style.marginLeft = "-252px";
});

const openSidebar = document.getElementById("start-generate-btn");
openSidebar.addEventListener("click", () => {
    sidebar.style.marginLeft = "0";
    openSidebarBtn.style.opacity = "0";
});



//Quote generator

let urlQt = "https://go-quote.azurewebsites.net/";

async function getQuote() {
    try {
        let response = await fetch(urlQt);
        let data = await response.json();
        const quoteText = document.getElementById("quote-text");
        const quoteAuthor = document.getElementById("quote-author");

        quoteText.innerText = `" ${data.text} "`;
        quoteAuthor.innerText = `- ${data.author}`;


    } catch (error) {
        console.log("Error caught: ", error);
    }
}

const quoteGenBtn = document.getElementById("qt-generate-btn");
quoteGenBtn.addEventListener("click", () => {
    getQuote();
    quoteGenBtn.innerText = "Generate new one";
});

// food facts 

let urlff = "https://world.openfoodfacts.org/api/v0/product/737628064502.json";

async function foodFactsFnc() {
    try {
        let response = await fetch(urlQt);
        let data = await response.json();
        // console.log(response);
        // console.log(data.text);

        const foodText = document.getElementById("food-text");
        const foodAuthor = document.getElementById("food-author");
        foodText.innerText = `" ${data.text} "`;
        foodAuthor.innerText = `- ${data.author}`;


    } catch (error) {
        console.log("Error caught: ", error);
    }
}

const foodGenBtn = document.getElementById("food-generate-btn");
foodGenBtn.addEventListener("click", () => {
    foodFactsFnc();
    foodGenBtn.innerText = "Get new fact";
});

// dictionary 

let urlDic = "https://api.dictionaryapi.dev/api/v2/entries/en/";

let searchWord = document.getElementById("search-word-btn");

searchWord.addEventListener("click", () => {
    let word = document.querySelector("input").value;
    let input = document.getElementById("search-word-input");
    input.value = "";
    getMeaningWord(word);
});


async function getMeaningWord(word) {
    try {
        let res = await fetch(urlDic + word);
        let data = await res.json();
        // console.log(data);
        // console.log(data[0].meanings[0].definitions[0].definition);
        let meaning = data[0].meanings[0].definitions[0].definition;

        let wordInp = document.getElementById("word");
        let wordMean = document.getElementById("meaning");
        wordMean.innerText = `Meaning:  ${meaning}`;
        wordInp.innerText = `Word: ${word}`;
    } catch (error) {
        // console.log(error);
        let wordMean = document.getElementById("meaning");
        wordMean.innerText = `error: Sorry, We don't have that word`;
    }
}
