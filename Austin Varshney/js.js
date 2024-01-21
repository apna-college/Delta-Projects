let zero = document.querySelector(".zero");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let seven = document.querySelector(".seven");
let eight = document.querySelector(".eight");
let nine = document.querySelector(".nine");
let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let mul = document.querySelector(".multiply");
let div = document.querySelector(".division");
let equals = document.querySelector(".equals");
let corr = document.querySelector(".corr");
let inp = document.querySelector("input");

zero.addEventListener("click", () => {
    inp.value += "0";
})
one.addEventListener("click", () => {
    inp.value += "1";
})
two.addEventListener("click", () => {
    inp.value += "2";
})
three.addEventListener("click", () => {
    inp.value += "3";
})
four.addEventListener("click", () => {
    inp.value += "4";
})
five.addEventListener("click", () => {
    inp.value += "5";
})
six.addEventListener("click", () => {
    inp.value += "6";
})
seven.addEventListener("click", () => {
    inp.value += "7";
})
eight.addEventListener("click", () => {
    inp.value += "8";
})
nine.addEventListener("click", () => {
    inp.value += "9";
})
plus.addEventListener("click", () => {
    inp.value += "+";
})
minus.addEventListener("click", () => {
    inp.value += "-";
})
mul.addEventListener("click", () => {
    inp.value += "*";
})
div.addEventListener("click", () => {
    inp.value += "/";
})

equals.addEventListener("click", () => {
    inp.value = eval(inp.value);
})

corr.addEventListener("click", () => {
    inp.value = "";
})