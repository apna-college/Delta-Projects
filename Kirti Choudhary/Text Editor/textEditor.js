let inp=document.querySelector("input");
let p= document.querySelector("p");

inp.addEventListener("input",function(event){
    console.log(inp.value);
    p.innerText=inp.value;
});