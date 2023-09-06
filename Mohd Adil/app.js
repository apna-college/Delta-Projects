const questions = [
    {
        question: "Which HTML tag is used to define the main heading of a page?",
        answers: [
            { text: "< heading >", correct: false},
            { text: "< header >", correct: false},
            { text: "< main >", correct: false},
            { text: "< h1 >", correct: true},
        ]
    },
    {
        question: "What is the correct HTML tag for inserting a line break?",
        answers: [
            { text: "< stop >", correct: false},
            { text: "< br >", correct: true},
            { text: "< line >", correct: false},
            { text: "< break >", correct: false},
        ]
    },
    {
        question: "How do you represent the color red in CSS?",
        answers: [
            { text: "red", correct: false},
            { text: "#ff0000", correct: false},
            { text: "rgb(255,0,0)", correct: false},
            { text: "All of the above", correct: true},
        ]
    },

    {
        question: "Which property is used to create a shadow effect around an element in CSS?",
        answers: [
            { text: "box-shadow", correct: true},
            { text: "text-shadow", correct: false},
            { text: "shadow-effect", correct: false},
            { text: "element shadow", correct: false},
        ] 
    },

    {
        question: "Which CSS property is used to make flex items align along the main axis?",
        answers: [
            { text: "align-items", correct: false},
            { text: "justify-content", correct: true},
            { text: "flex-direction", correct: false},
            { text: "flex-wrap", correct: false},   
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion. 
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = ` Congrats, Your Score is ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", ()=> {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();