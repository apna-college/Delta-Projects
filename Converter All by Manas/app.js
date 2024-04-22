const BASE_URL= "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies"; //We have removed eur/jpy.json this part to use in line no 47.
const dropdowns = document.querySelectorAll(".dropdown select");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");
// for(code in countryList){
//     console.log(code,countryList[code]);
// } we can access the country code and currency code here

for(let select of dropdowns){
    for(currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if (select.id === "from" && currCode === "INR"){
            newOption.selected = "selected";
        } else if (select.id === "to" && currCode === "USD"){
            newOption.selected = "selected"; // Here you can use any word.
        }
        select.append(newOption);
    }

    select.addEventListener("change",(evt) => {
        updateFlag(evt.target);
    });
}

const updateFlag = (element) => {
    let currCode = element.value; //Here you can use any word in place of currCode.
    let countryCode = countryList[currCode]; // here [currCode] come from for in loop in line no 9. Here "" this value of code.js will come from this code.
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`
    let img = element.parentElement.querySelector("img"); // Here element is our select and we have to add image to the parent div select-container so element.parentElement is used.
    img.src = newSrc;
};

const btn = document.querySelector("form button");

btn.addEventListener("click",(evt) => {
    evt.preventDefault(); //It blocks the refresh and submit default behavior of the button
    updateExchRate();
});

const updateExchRate = async()=>{
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if (amtVal ==="" || amtVal < 1) {
        amtVal = 1;
        amount.value = "1";
    }
    // console.log(fromCurr.value, toCurr.value); here values are in capital but our api will work in lowercase so bellow we have to covert it to lower case
    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`; // fromCurr and toCurr is defined in line No. 3 and 4
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json()
    console.log(data);
    let rate = await data[toCurr.value.toLowerCase()];
    console.log(rate);

    let finalAmount = amtVal * rate;
    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
}

window.addEventListener("load",() => {
  updateExchRate();
})
 // to show update value in <p></p> tag when opening refer to video last part.



function calculateAge(){
    const dobInput = document.getElementById("doB1").value;
    const toDateInput = document.getElementById("ToDate1").value;
    const doB = new Date(dobInput);
    const toDate = new Date(toDateInput);
    if(!dobInput || !toDateInput){
        alert("Please Enter Valid Date !!");
        return;
    }
    const resultElement = document.getElementById("ResultDisplay");
    const ageInMilliSeconds = Math.abs(toDate - doB);
    const ageInDays = Math.ceil(ageInMilliSeconds/(1000*60*60*24));

    const Years = Math.floor(ageInDays/365);
    const remainingDays = ageInDays % 365;
    const Months = Math.floor(remainingDays/30);
    const Days = Math.floor(remainingDays % 30);

    resultElement.innerText = `Your Age is ${Years} Years, ${Months} Months & ${Days} days`;

}
const btn2 = document.getElementById("ageCal");

btn2.addEventListener("click",() => {
    calculateAge();
});

//Length Converter

function validateLengthConverterForm(){
    _cmnRemoveAllErrorMessage();
    let fromLength = document.getElementById("fromLength").value;
    if(fromLength = "" || isNaN(fromLength) || (! isNaN(fromLength) && Number(fromLength)) <= 0){
        _cmnShowAllErrorMessage("fromLength","Enter valid length");
        return false;
    }
    else{
        return true;
    }
}
function resetLengthConverter(){
    if(confirm("Are you sure to reset?")){
        document.getElementById("fromLength").value = "";
        document.getElementById("fromUnit").value = "Millimeter";
        document.getElementById("toUnit").value = "Centimeter"
        document.getElementById("toLength").value = "";
        _cmnRemoveAllErrorMessage();

        _cmnHideElement("OutputResult");
        _cmnShowElement("OutputInfo", "flex");
    }
}

function convertLength(fromLength, fromUnit, toUnit){
    fromLength = Number(fromLength);
    let result = 0;
    makeThisToMillimeter = 0;
    inMillimeter = 0;

    //Converting all values to millimeter

    switch(fromUnit){
        case "Millimeter":
            makeThisToMillimeter = 1;
        break;
        case "Centimeter":
            makeThisToMillimeter = 10;
        break;
        case "Decimeter":
            makeThisToMillimeter = 100;
        break;
        case "Meter":
            makeThisToMillimeter = 1000;
        break;
        case "Kilometer":
            makeThisToMillimeter = 1000000;
        break;
        case "Foot":
            makeThisToMillimeter = 304.8;
        break;
        case "Inch":
            makeThisToMillimeter = 25.4;
        break;
        case "Mile":
            makeThisToMillimeter = 1609344;
        break;
        case "Yard":
            makeThisToMillimeter = 914.4;
        break;
    }

    inMillimeter = fromLength * makeThisToMillimeter;

    switch(toUnit){
        case "Millimeter":
            result = inMillimeter;
        break;
        case "Centimeter":
            result = inMillimeter / 10;
        break;
        case "Decimeter":
            result = inMillimeter / 100;
        break;
        case "Meter":
            result = inMillimeter / 1000;
        break;
        case "Kilometer":
            result = inMillimeter / 1000000;
        break;
        case "Foot":
            result = inMillimeter / 304.8;
        break;
        case "Inch":
            result = inMillimeter / 25.4;
        break;
        case "Mile":
            result = inMillimeter / 1609344;
        break;
        case "Yard":
            result = inMillimeter / 914.4;
        break;
    }
    return result;
}
function calculateLength(){
    if(validateLengthConverterForm()){
        let fromUnit = document.getElementById("fromUnit").value;
        let toUnit = document.getElementById("toUnit").value;
        let fromLength = document.getElementById("fromLength").value;
        let toLength = document.getElementById("toLength");

        let finalValue = convertLength(fromLength,fromUnit,toUnit);

        toLength.value = Number(finalValue).toFixed(2);

        let showResult = document.querySelector("#lengthResult");
        showResult.innerHTML = `${fromLength} ${fromUnit} = ${Number(finalValue).toFixed(2)} ${toUnit}`;

        // Hide info and show result

        _cmnHideElement("OutputInfo");
        _cmnShowElement("OutputResult","flex");
    }
}

let resetBtn = document.querySelector(".tool-btn-reset");

let calBtn = document.querySelector(".tool-btn-calculate");

resetBtn.onclick = () =>{
    resetLengthConverter();
};
calBtn.onclick = () =>{
    calculateLength();
};
