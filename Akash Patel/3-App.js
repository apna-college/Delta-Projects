function formatTime(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12; 
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  return `${hours}:${minutes}:${seconds} ${ampm}`;
}
function displayTime() {
  const currentDate = new Date();
  const timeString = formatTime(currentDate);
  document.querySelector(".time").innerText = timeString;
}
setInterval(displayTime, 1000);
displayTime();

//-----------------------------------------------------------------------------------------------------------

document.querySelectorAll(".request").forEach((topiclist) => {
  topiclist.addEventListener("click", async () => {
    const topicname = topiclist.getAttribute("data-topic");
    let jsdata = await fetchQue(topicname);
    if (jsdata) {
      iteration(jsdata);
      document.querySelectorAll(".hide").forEach((element) => {
        element.style.display = "block";
        element.style.opacity = "0";
        element.style.visibility = "hidden";
        element.offsetHeight;
        element.style.transition = "opacity 0.3s ease";
        element.style.opacity = "1";
        element.style.visibility = "visible";
      });
    }
  });
});

async function fetchQue(topicname) {
  const link = `https://quizapi.io/api/v1/questions?apiKey=nlOdNkAam6JVIJX70HKz56gpXsBv9Ml6wF1Jl7d8&limit=10&category=${topicname}`;
  try {
    const received = await fetch(link);
    const jsdata = await received.json();
    console.log("Response Data =>", jsdata);
    return jsdata;
  } catch (error) {
    console.error("Error received =>", error);
  }

  // fetch(link) //Using ASYNC  return promise
  //     .then((response) => {
  //         return response.json(); // returns a promise
  //     })
  //     .then((jsdata) => { // After the promise is resolved, you get the JSON data
  //         console.log("Response Data:", jsdata);
  //         return jsdata;
  //     })
  //     .catch((error) => {
  //         console.log("Error =>", error);
  //     });
}
document.querySelectorAll(".list").forEach((item) => {
  item.addEventListener("click", () => {
    window.scrollTo({
      top: 110,
      behavior: "smooth",
    });
  });
});

function iteration(jsdata) {
  let i = 0;
  function updateQuestion() {
    let title = document.querySelector(".category");
    let difficulty = document.querySelector(".difficulty");
    let questionnum = document.querySelector(".questionnum");
    let score = document.querySelector(".score");
    let question = document.querySelector(".questions");
    let option1 = document.querySelector(".option1");
    let option2 = document.querySelector(".option2");
    let option3 = document.querySelector(".option3");
    let option4 = document.querySelector(".option4");

    document.querySelectorAll(".options label").forEach((label) => {
      label.style.backgroundColor = ""; // Reset background color
      label.style.border = ""; // Reset border style
    });

    title.innerText = jsdata[i].category;
    difficulty.innerText = jsdata[i].difficulty;
    questionnum.innerText = `Question ${i + 1}/10`;
    question.innerText = jsdata[i].question;
    option1.innerText = jsdata[i].answers.answer_a;
    option2.innerText = jsdata[i].answers.answer_b;
    option3.innerText = jsdata[i].answers.answer_c;
    option4.innerText = jsdata[i].answers.answer_d;
  }
  updateQuestion();

  function correctAns(jsdata, i) {
    const correctAnswers = jsdata[i].correct_answers;

    for (const ansKey in correctAnswers) {
      if (correctAnswers[ansKey] === "true") {
        const answerKey = ansKey.replace("_correct", "");
        // Return the correct answer text from jsdata[i].answers
        return jsdata[i].answers[answerKey];
      }
    }
    return null; //todo: Return null if no correct answer is found
  }

document.querySelector(".submitQue").addEventListener("click", () => {
  const selectedOption = document.querySelector('input[name="option"]:checked');
  const submitButton = document.querySelector(".submitQue");

  if (selectedOption) {
    // Define selectedOptionText only if an option is selected
    const selectedOptionText = selectedOption.nextElementSibling.innerText;
    const correctAnswerText = correctAns(jsdata, i);

    if (selectedOptionText === correctAnswerText) {
      // Highlight correct option for correct submission
      selectedOption.nextElementSibling.style.backgroundColor =
        "rgba(0, 255, 0, 0.3)";
      selectedOption.nextElementSibling.style.border = "1px solid #00ff00";
      submitButton.disabled = true;
      // Increment the score
      let scoreElement = document.querySelector(".score");
      let currScore = parseInt(scoreElement.innerText.split(":")[1].trim());
      scoreElement.innerText = `Score: ${currScore + 1}`;
    } else {
      // Highlight the correct answer for incorrect submission
      document.querySelectorAll(".options label").forEach((label) => {
        if (label.innerText.trim() === correctAnswerText.trim()) {
          label.style.backgroundColor = "rgba(0, 255, 0, 0.3)";
          label.style.border = "1px solid #00ff00";
        }
      });

     
    }
 if (selectedOptionText === correctAnswerText) {
   selectedOption.nextElementSibling.classList.add("correct");

   // Remove the animation class after it runs
   setTimeout(() => {
     selectedOption.nextElementSibling.classList.remove("correct");
   }, 600);
 }
    // Disable submit button after submission
    submitButton.disabled = true;
  } else {
    // Provide feedback if no option is selected
    alert("Please select an option before submitting.");
  }
});
 // Re-enable the submit button when navigating to the next or previous question
  document.querySelector(".previousQue").addEventListener("click", () => {
    if (i > 0) {
      i--;
      updateQuestion();
      document.querySelector(".submitQue").disabled = false; // Re-enable submit button
    }
  });

  document.querySelector(".nextQue").addEventListener("click", () => {
    if (i < 9) {
      i++;
      updateQuestion();
      document.querySelector(".submitQue").disabled = false; // Re-enable submit button
    }
  });
}



