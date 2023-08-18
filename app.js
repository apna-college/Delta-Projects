let string="";
let btns = document.querySelectorAll(".box");
for (btn of btns ){
    btn.addEventListener("click", (e)=>{
       
        if (e.target.innerHTML == "="){
            string = eval(string);
            let display = document.querySelector(".display");
            display.value = string ;
            
        }
        else if (e.target.innerHTML == "C"){
            string = "";
            let display = document.querySelector(".display");
            display.value = string ;
        }
        else{
            string= string+e.target.innerHTML ;
            let display = document.querySelector(".display");
            display.value = string;
        }
    });
}