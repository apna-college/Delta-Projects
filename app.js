const PasswordBox = document.querySelector("#Password");
let btn = document.querySelector("button")
const length = 12;

const UpperCase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LowerCase ="abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol ="@!#$%^&*()_+?";


const  allChar = UpperCase+LowerCase+number+symbol;
function CreatePassword(){

    let Password = "";

    Password += UpperCase[Math.floor(Math.random()*UpperCase.length)];
    Password += LowerCase[Math.floor(Math.random()*LowerCase.length)];
    Password += number[Math.floor(Math.random()*number.length)];
    Password += symbol[Math.floor(Math.random()*symbol.length)];

    while(Password.length < length)
    {
        Password += allChar[Math.floor(Math.random()*allChar.length)];

    }
    PasswordBox.value = Password;
    
}

btn.addEventListener("click",()=>{
CreatePassword();
})

 let cop = document.querySelector("#copyIcon");
 cop.addEventListener("click",()=>{
    PasswordBox.select();   
    document.execCommand("copy");  
    // Optional: show feedback
    alert("Password copied to clipboard!");
 })
 