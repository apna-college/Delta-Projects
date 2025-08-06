
const BASE_URL ="https://2024-03-06.currency-api.pages.dev/v1/currencies/";

 
const fromCurr = document.querySelector(".From select");
const toCurr = document.querySelector(".To select");
const msg = document.querySelector(".message-container");





let dropdowns = document.querySelectorAll(".dropdown select");
let btn=document.querySelector("#button");


for (let select of dropdowns) {
    for (let currCode in countryList) { 
        let options = document.createElement("option"); 
        options.innerText = currCode;
        options.value = currCode;
        select.append(options);
    }
}




const updateExchangeRate = async () => {
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if (amtVal === "" || amtVal < 1) {
      amtVal = 1;
      amount.value = "1";
    }
    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
  let response = await fetch(URL);
  let data = await response.json();
  let rate = data[toCurr.value.toLowerCase()];
  let finalAmount = (data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()]*parseInt(amount.value)).toFixed(2);
  msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
  };




  btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    updateExchangeRate();
  });
  
  window.addEventListener("load", () => {
    updateExchangeRate();
  });

// btn.addEventListener("click",  async(evt)=>{
//    evt.preventDefault();
//    let amount=document.querySelector(".amount input");
//    let amtval=amount.value;
//    if(amtval=="" ||amtval<1){
//     amtval=1;
//     amount.value="1";
//    };
  
//     const URL = `${Base_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
//    let response = await fetch(URL);
//    let data = await response.json();
//    let rate = data[toCurr.value.toLowerCase()];
 
//    let finalAmount = amtVal * rate;
//    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
   
// });

// window.addEventListener("load", () => {
//     updateExchangeRate();
//   });