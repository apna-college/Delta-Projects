let input = document.querySelector(".display");

function appendToDisplay(Number) {
   input.value = input.value + Number;
}


function calculate() {
   let result = eval(input.value);
   input.value = result;
}

function clearAll() {
   input.value = '';
}

function clearChar() {
   input.value = input.value.slice(0, -1);
   if( input.value === '' ) {
      input.value = '';
   }  
}
