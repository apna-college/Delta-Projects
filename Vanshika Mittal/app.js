let input = document.querySelector(".input");
let btns = document.querySelectorAll("button");
const sound=new Audio("meow.mp3");
const maxLength = 15; // Adjust this to your desired maximum length

let str = "";
let arr = Array.from(btns);  //it will create an arry from these buttons
arr.forEach(button => {
    button.addEventListener("click",(e)=>{
        e.target.classList.add("glowing");
        setTimeout(() => {
            e.target.classList.remove("glowing");
        }, 500);
    })
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML == "=") {
            str = eval(str);
            input.value = str;
            sound.play();
        }
        else if (e.target.innerHTML == "AC") {
            str = "";
            input.value = str;
            sound.play();
        }
        else if(e.target.innerHTML=="DEL"){
            str=str.slice(0,str.length-1);
            input.value=str;
        }
        else {
            if ((str.length >= maxLength)) {
                str= str.slice(0, maxLength);
            } else {
                input.setAttribute("placeholder","0");
                input.style.backgroundImage="url('kitty.jpg')";
                str += e.target.innerHTML;
                input.value = str;
            }
        }
    })
});

