let display = document.querySelector("#calculator-display");
let upperDisplay = document.querySelector("#upper-text");
let lowerDisplay = document.querySelector("#lower-text");
let nums = document.querySelectorAll(".nums");
let operator = document.querySelectorAll(".operator");
let action = document.querySelectorAll(".action");
let allBtns = document.querySelector("#all-btns");
let btns = document.querySelectorAll(".btns");
let backspace = document.querySelector("#backspace");
let validOperators = ["+", "-", "×", "÷"];
// All functions defination.
function clearAll() {
  upperDisplay.innerText = "";
  lowerDisplay.innerText = "";
  upperDisplay.classList.remove("small-text");
  lowerDisplay.classList.add("small-text");
}
function getAns(number) {
  try {
    if (validOperators.includes(number[number.length - 1])) {
      number = number.slice(0, -1);
    }
    number = number.replaceAll("÷", "/").replaceAll("×", "*");
    return eval(number);
  } catch (error) {
    console.log(error);
    return "error";
  }
}
function parts(text) {
  return text.split(/[\×\÷\+\-]/);
}
// All other logic
allBtns.addEventListener("click", (event) => {
  if (event.target.classList.contains("btns")) {
    if (event.target.classList.contains("action")) {
      if (event.target.innerText === `AC`) {
        clearAll();
      } else if (event.target.innerText === "=") {
        lowerDisplay.innerText = `=${getAns(upperDisplay.innerText)}`;
        // adding and removing class.
        lowerDisplay.classList.remove("small-text");
        upperDisplay.classList.add("small-text");
      } else if (event.target.innerText === "%") {
        let equationArr = parts(upperDisplay.innerText);
        let percentNum = equationArr[equationArr.length - 1] / 100;
        let lastNumLength = equationArr[equationArr.length - 1].length;
        let firstText = upperDisplay.innerText.slice(0, -lastNumLength);
        upperDisplay.innerText = firstText + percentNum;
        lowerDisplay.innerText = `=${getAns(upperDisplay.innerText)}`;
      } else if (event.target === backspace) {
        upperDisplay.innerText = upperDisplay.innerText.slice(0, -1);
        if (upperDisplay.innerText === "") {
          lowerDisplay.innerText = "";
          return;
        }
        lowerDisplay.innerText = `=${getAns(upperDisplay.innerText)}`;
      }
    } else if (event.target.classList.contains("operator")) {
      if (upperDisplay.innerText === "0" || upperDisplay.innerText === "") {
        upperDisplay.innerText = "";
      } else if (
        validOperators.includes(
          upperDisplay.innerText[upperDisplay.innerText.length - 1],
        )
      ) {
        upperDisplay.innerText =
        upperDisplay.innerText.slice(0, -1) + event.target.innerText;
      } else if (upperDisplay.classList.contains("small-text")) {
        upperDisplay.classList.remove("small-text");
        lowerDisplay.classList.add("small-text");
        lowerDisplay.innerText = `=${getAns(upperDisplay.innerText)}`;
        upperDisplay.innerText =
        lowerDisplay.innerText.slice(1) + event.target.innerText;
      } else {
        upperDisplay.innerText += event.target.innerText;
      }
    } else if (event.target.classList.contains("nums")) {
      if (event.target.innerText === ".") {
        //1.  cheking if the last charedter is alredy dot but then also user is pressing dot btn again do notiong.
        if ((upperDisplay.innerText[upperDisplay.innerText.length - 1] === ".")) {
          upperDisplay.innerText =
            upperDisplay.innerText.slice(0, -1) + event.target.innerText;
          // upperDisplay.innerText += event.target.innerText;
        }
        //2.  cheking if the last element is the a opeator then write 0. insted of directly writing decimal after a valid operator.
        else if (validOperators.includes(upperDisplay.innerText[upperDisplay.innerText.length - 1])) {
          upperDisplay.innerText += "0.";
        }
        //3. cheking if the number which currently user is typing alredy consist dot if yes then do noting.
        else if (upperDisplay.innerText.includes(".") && upperDisplay.innerText.length > 0) {
          let decimalArr = parts(upperDisplay.innerText);
          if (!(decimalArr[decimalArr.length - 1].includes("."))) {
            upperDisplay.innerText += ".";
          }
        }
        //4. cheking if the user is pressing the dot as his first num then we will write 0. inted of just writing dot which will create an err.
        else if (upperDisplay.innerText === "" || upperDisplay.innerText === "0") {
          upperDisplay.innerText = "0.";
        }
        else {
          upperDisplay.innerText += event.target.innerText
        }
      }
      else if (upperDisplay.innerText === "0" || upperDisplay.innerText === "") {
        if (event.target.innerText === "0") {
          upperDisplay.innerText = 0;
        } 
        else {
          upperDisplay.innerText = event.target.innerText;
          lowerDisplay.innerText = `=${getAns(upperDisplay.innerText)}`;
        }
      }
       else {
        if (upperDisplay.classList.contains("small-text")) {
          upperDisplay.classList.remove("small-text");
          lowerDisplay.classList.add("small-text");
          clearAll();
          upperDisplay.innerText = lowerDisplay.innerText.slice(1);
        }
        upperDisplay.innerText += event.target.innerText;
        lowerDisplay.innerText = `=${getAns(upperDisplay.innerText)}`;
      }
    }
  }
});
