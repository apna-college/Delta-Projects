const urlOfDt = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const urlOfQt = "https://quote-garden.onrender.com/api/v3/quotes";

let inputBtn = document.querySelector(".inputBtn");
let input = document.querySelector("input");

// firsr we gentate random quote from here for empty space
async function link() {
  quoteDisplay();
  try {
    let path = await axios.get(urlOfQt);
    let quote = document.querySelector(".quote"); //quote class paragraph select here
    let ranNum = Math.floor(Math.random() * 9); // gentare random number here for random index for random quote
    quote.innerText = path.data.data[ranNum].quoteText;
    let quoteAuthor = document.createElement("span"); //create an span and append in quote for author's name
    quote.appendChild(quoteAuthor);
    quoteAuthor.innerText = "~" + path.data.data[ranNum].quoteAuthor;
  } catch (e) {
    let quote = document.querySelector(".quote");
    quote.innerText = "Sorry Quote Not Avalable";
  }
}
link(); //quote is calling from here

// the eventlistener is here
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    let input = document.querySelector("input").value.trim().toLowerCase();
    resetMainContent();
    dictionary(input);
  }
});
inputBtn.addEventListener("click", function () {
  let input = document.querySelector("input").value;
  resetMainContent();
  dictionary(input);
});

// the dictionary data gernrate started from here
async function dictionary(input) {
  loaderShow();
  quoteNone();
  try {
    let dicData = await axios.get(urlOfDt + input);
    let dataValue = dicData.data[0];
    dataLoop(dataValue);
    // soundPlay()
  } catch (e) {
    // console.log(e)
    alert("Some Thing went wrong! ");
    loaderHide();
    link();
  }
}

function dataLoop(dataValue) {
  loaderHide();
  try {
    let mainContaint = document.querySelector(".main-containt");

    //first table of part of speech
    let firstTable = document.createElement("table");
    mainContaint.appendChild(firstTable);

    let firstRowFirstTable = document.createElement("tr");
    firstTable.appendChild(firstRowFirstTable);

    let firstHeadingFirstTable = document.createElement("th");
    firstRowFirstTable.appendChild(firstHeadingFirstTable);
    firstHeadingFirstTable.innerText = "Part Of Speech";

    let secondRowFirstTable = document.createElement("tr");
    firstTable.appendChild(secondRowFirstTable);

    let firstTableData = document.createElement("td");
    secondRowFirstTable.appendChild(firstTableData);
    firstTableData.innerText = dataValue.meanings[0].partOfSpeech;

    // The Secon table start from here

    let secondTable = document.createElement("table");
    mainContaint.appendChild(secondTable);
    let firstRowSecondTable = document.createElement("tr");
    secondTable.appendChild(firstRowSecondTable);
    let firstHeadingSecondTable = document.createElement("th");
    firstRowSecondTable.appendChild(firstHeadingSecondTable);
    firstHeadingSecondTable.innerText = "Defination";

    for (let value of dataValue.meanings[0].definitions) {
      let defi = value.definition; //imp
      let normalRowSecondTable = document.createElement("tr");
      secondTable.appendChild(normalRowSecondTable);
      let normalTableDataSecondTable = document.createElement("td");
      normalRowSecondTable.appendChild(normalTableDataSecondTable);
      if (defi === undefined) {
        normalTableDataSecondTable.remove();
      }
      normalTableDataSecondTable.innerText = defi;
    }
    // to here /////////////////// // to here ///////////////////   // to here ///////////////////

    // the third table start from here

    let exampleTable = document.createElement("table");
    mainContaint.appendChild(exampleTable);
    let exTablefirstRow = document.createElement("tr");
    exampleTable.appendChild(exTablefirstRow);
    let exTableHeading = document.createElement("th");
    exTablefirstRow.appendChild(exTableHeading);
    exTableHeading.innerText = "Example";
    //for of loop
    for (let value of dataValue.meanings[0].definitions) {
      let example = value.example;
      let exTableDataRow = document.createElement("tr");
      exampleTable.appendChild(exTableDataRow);
      let exampleDataRow = document.createElement("td");
      exTableDataRow.appendChild(exampleDataRow);
      if (example === undefined) {
        exTableDataRow.remove();
      }
      exampleDataRow.innerText = example;
    }

    // the synonyms are start here

    let syneTable = document.createElement("table");
    mainContaint.appendChild(syneTable);
    let synefirstRow = document.createElement("tr");
    syneTable.appendChild(synefirstRow);
    let syneHeading = document.createElement("th");
    synefirstRow.appendChild(syneHeading);
    syneHeading.innerText = "Synonyms";

    for (let value of dataValue.meanings[0].synonyms) {
      let normalSyneRow = document.createElement("tr");
      syneTable.appendChild(normalSyneRow);
      let syneData = document.createElement("td");
      normalSyneRow.appendChild(syneData);
      syneData.innerText = value;
    }

    // the sound play stared here

        function soundPlay() {
        let select = document.querySelector("#accent");
        let worldSound = document.querySelector(".worldSound");
        worldSound.setAttribute("src", "#");
        if (select.value === "uk") {
            worldSound.setAttribute("src", dataValue.phonetics[0].audio);
            worldSound.play();
        } else if (select.value === "us") {
            worldSound.setAttribute("src", dataValue.phonetics[1].audio);
            worldSound.play();
        }
        }

        let sound = document.querySelector(".sound");
        sound.addEventListener("click", soundPlay);

    // the sound to  here
  } catch (e) {
    console.log(e);
    link();
    alert("Some Thing went wrong! ");
    loaderHide();
  }
  // and the synonyms are end here
}

// loder animation control here
function loaderShow() {
  let loader = document.querySelector(".loaderOut");
  loader.style.display = "flex";
}
function loaderHide() {
  let loader = document.querySelector(".loaderOut");
  loader.style.display = "none";
}
// now quote display show/hide
function quoteNone() {
  let quote = document.querySelector(".quote");
  // quote.style.display="none"
}
function quoteDisplay() {
  let quote = document.querySelector(".quote");
  quote.style.display = "block";
}

function resetMainContent() {
  let mainContaint = document.querySelector(".main-containt");
  mainContaint.innerHTML = ""; // Clear the content
}


let bars=document.querySelector(".bars");
let bars1=document.querySelector(".bars1")
let bars2=document.querySelector(".bars2")
let bars3=document.querySelector(".bars3") 
let burger=document.querySelector(".burger")

bars.addEventListener("click",function(){
    bars1.classList.toggle("bar1")
    bars2.classList.toggle("bar2")
    bars3.classList.toggle("bar3")
    burger.classList.toggle("burger-menu")

})