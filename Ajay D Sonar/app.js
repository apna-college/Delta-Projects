const url = "https://quizapi.io/api/v1/questions?limit=5";
var quizQuestions = {};
var quizOptions;
var quizAnsers = [];

var body = document.querySelector("body");
var main = document.querySelector(".main");
var htmlQue = document.querySelector(".game-container h2");
var htmlOption = document.querySelectorAll(".options div p");
var gameOver = document.querySelector(".game-container");
var correctAnsCount = document.querySelector(".right");
var wrongAnsCount = document.querySelector(".wrong");
var optionsBox = document.querySelector(".options");
var defaultCorrectAns = 0;
var defaultWrongAns = 0;

async function getQuestions(url) {
  try {
    let config = {
      headers: {
        "X-Api-Key": "pPfxeXeCcH6cfNSWtaQD7Zwr4S35LaxsnPFviycK",
      },
    };
    var rawData = await axios.get(url, config);
    var mainData = await rawData.data;
    // console.log(mainData);
    qIdx = 0;
    quizQuestions = mainData.map((ele) => {
      ++qIdx;
      return `${qIdx}. ${ele.question}`;
    }); //Questions
    // console.log(quizQuestions);
    quizOptions = mainData.map((ele) => ele.answers); // options
    var tempo = mainData.map((ele) => ele.correct_answers); //Answers

    for (ele of tempo) {
      var aja = Object.entries(ele);

      for (ele of aja) {
        if (ele[1] == "true") {
          // console.log(ele);
          quizAnsers.push(ele[0].slice(7, 8));
        }
      }
    }
  } catch (e) {
    console.log("ajay Error :", e);
  }
  var dataObj = {
    Ques: quizQuestions,
    opt: quizOptions,
    Ans: quizAnsers,
  };
  return dataObj;
}

async function printQuestion(res, element) {
  for (var i = 0; i < element.length; i++) {
    console.log(`Q${i + 1} ${element[i]}`);
    console.log("options : ");

    printOptions(res, i);

    console.log("-----------------");
    console.log(`Answer : ${res.Ans[i]}`);
    console.log("-----------------");
  }
}

async function printOptions(res, idx) {
  var oppp = Object.values(res.opt[idx]);
  var str = ["a", "b", "c", "d"];
  for (var i = 0; i < 4; i++) {
    console.log(`${str[i]}. ${oppp[i]}`);
  }
}

getQuestions(url)
  .then((res) => {
    printQuestion(res, res.Ques);
    return res;
  })
  .then((res) => {
    gameStart(res);
    // return res;
  })
  .catch((e) => {
    console.log(e);
  });

function gameStart(res) {
  htmlQue.innerText = res.Ques[0];
  console.log(res.opt[0]);
  var opt2 = Object.values(res.opt[0]);
  console.log(opt2);
  str3 = ["a", "b", "c", "d"];
  for (var i = 0; i < 4; i++) {
    htmlOption[i].innerText = `${str3[i]}. ${opt2[i]}`;
  }

  var idx = 1;
  var idx2 = 0;

  optionsBox.addEventListener("click", function (event) {
    var optClick = event.target;
    var papa = event.target.parentNode;
    var compare = optClick.innerText.slice(0, 1);
    console.log(compare);
    console.log(papa);
    console.log(res.Ans);

    if (compare === res.Ans[idx2]) {
      papa.classList.toggle("green");
      defaultCorrectAns++;
      correctAnsCount.innerHTML = `${defaultCorrectAns}`;
      setTimeout(() => {
        papa.classList.toggle("green");
        if (idx === 5) {
          gameO();
        } else {
          nextQuestion(idx, res, str3);
          console.log(idx + 1);
          idx++;
        }
      }, 500);
    } else {
      papa.classList.toggle("red");
      defaultWrongAns++;
      wrongAnsCount.innerHTML = `${defaultWrongAns}`;
      setTimeout(() => {
        papa.classList.toggle("red");
        if (idx === 5) {
          // Most Impoertant: Need TO chnage if Number of Questions Are Increased
          gameO();
        } else {
          nextQuestion(idx, res, str3);
          console.log(idx + 1);
          idx++;
        }
      }, 500);
    }
    idx2++;
  });
}

function nextQuestion(idx, res, str) {
  htmlQue.innerText = res.Ques[idx];
  // console.log(res.opt[idx]);
  var opt2 = Object.values(res.opt[idx]);
  console.log(opt2);
  for (var i = 0; i < 4; i++) {
    htmlOption[i].innerText = `${str[i]}. ${opt2[i]}`;
  }
  return str;
}

function gameO() {
  gameOver.style.display = "flex";
  gameOver.style.alignItems = "center";
  gameOver.style.justifyContent = "space-evenly";
  gameOver.innerHTML = `
    <h1 id="overg">Game Over</h1>
    <div>
        <h2 id="Scorrect">Your Gave ${defaultCorrectAns} Correct Answers</h2></br>
        <h2 id= "Swrong">Your Gave ${defaultWrongAns} Wrong answers</h2> 
    </div></br>
    <h2>Press Any Key To Restart the Game</h2>
    <button id="btn"> Take Quiz Again </button>
    `;

  var btn = document.querySelector("#btn");
  btn.addEventListener("click", () => {
    gameOver.innerHTML = `
        <div class="question">
                <h2>Q1. What is Linux?</h2>
        </div>
        <div class="options">
           <div class="opt"><p>Option 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, recusandae?</p></div>
           <div class="opt"><p>Option 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae excepturi consectetur dolore.</p></div>
           <div class="opt"><p>Option 3 Lorem ipsum dolor sit amet.</p></div>
           <div class="opt"><p>Option 4 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis!</p></div>
        </div>`;

    quizQuestions = {};
    quizOptions;
    quizAnsers = [];

    body = document.querySelector("body");
    main = document.querySelector(".main");
    htmlQue = document.querySelector(".game-container h2");
    htmlOption = document.querySelectorAll(".options div p");
    gameOver = document.querySelector(".game-container");
    correctAnsCount = document.querySelector(".right");
    wrongAnsCount = document.querySelector(".wrong");
    optionsBox = document.querySelector(".options");
    defaultCorrectAns = 0;
    defaultWrongAns = 0;
    correctAnsCount.innerHTML = `${defaultCorrectAns}`;
    wrongAnsCount.innerHTML = `${defaultWrongAns}`;

    getQuestions(url)
      .then((res) => {
        printQuestion(res, res.Ques);
        return res;
      })
      .then((res) => {
        gameStart(res);
        // return res;
      })
      .catch((e) => {
        console.log(e);
      });
  });
}
const MyName = "Ajay Dhanraj Sonar :)";
