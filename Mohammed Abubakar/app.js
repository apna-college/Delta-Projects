let btn = document.querySelectorAll(".btn");
let qn = document.querySelector(".qn");

document.addEventListener("keypress", (event) => {
    
    let e = event.key;
    if(/[%=/*+-.]/.test(e)){
        if(/[/]/.test(e)){
            buttonPop(document.querySelector(".btn4"));
        }else if(/[*]/.test(e)){
            buttonPop(document.querySelector(".btn8"));
        }else if(/[+]/.test(e)){
            buttonPop(document.querySelector(".btn12"));
        }else if(/[%]/.test(e)){
            buttonPop(document.querySelector(".btn3"));
        }else if(/[-]/.test(e)){
            buttonPop(document.querySelector(".btn16"));
        }else if(/[=]/.test(e)){
            buttonPop(document.querySelector(".btn19"));
        }else if(/[.]/.test(e)){
            buttonPop(document.querySelector(".btn18"));
        }

    }else if (e == "Enter") {
        buttonPop(document.querySelector(".btn19"));
        printans();
    }else{
        btnPop(e);
    }
    
    if (e === "="){
        printans();
    } else if (e === "C" || e === "c") {
        clearAll();
    } else if(event.key=="." || event.key=="1" || event.key=="2" || event.key=="3" || event.key=="4" || event.key=="5" || event.key=="6" || event.key=="7" || event.key=="8" || event.key=="9" || event.key=="0" || event.key=="+" || event.key=="-" || event.key=="*" || event.key=="/" || event.key=="%"){
        
        qn.innerHTML += e;
    }
});

document.addEventListener("keydown",(event)=>{
        if(event.key=="Backspace"){
            btnPop("B");
            clearLast();
        }        
});

btn.forEach(button => {
    button.addEventListener("click", () => {
        buttonPop(button);
        if(button.innerHTML=="=")
        { 
            printans();
        }else if (button.innerHTML=="C"){
            clearAll();
        }else if(button.innerHTML=="Del"){
            clearLast();
        }else
        qn.innerHTML = qn.innerHTML + button.innerHTML;
    });
});

function btnPop(e) {
    let buttn = document.querySelector(".p" + e);
    buttonPop(buttn);
}

function buttonPop(button){
    button.classList.add("clicked");
        console.log("btn clicked");
        setTimeout(() => {
            button.classList.remove("clicked");
        }, 300);
}

function printans(){
    console.log(qn.innerHTML);
    let ans = eval(qn.innerHTML);
    if(ans===Infinity || ans===undefined || ans === 0){
        qn.innerHTML = ans;
        setTimeout(() => {
            qn.innerHTML = "";
        }, 1000);
    }else
    qn.innerHTML = ans;

}

function clearAll(){
    qn.innerHTML = "";
}

function clearLast(){
    let qnv = qn.innerHTML;
    qn.innerHTML = "";
    let len = qnv.length;
    for(let i = 0;i<len-1;i++){
        qn.innerHTML = qn.innerHTML + qnv[i];
        console.log(qnv[i]);
    }
}


