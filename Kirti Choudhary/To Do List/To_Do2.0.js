let inp=document.querySelector("input");
let ul=document.querySelector("ul");
let btn =document.querySelector("button");

btn.addEventListener("click",function(){
    console.log("Task addedd");
});

inp.addEventListener("change",function(event){
    let li=document.createElement("li");
    li.innerText=this.value;

    let dltbtn=document.createElement("button");
    dltbtn.innerText="Delete";
    dltbtn.classList.add("dlt");
    li.appendChild(dltbtn);

    ul.appendChild(li);
    this.value="";
    console.log("Task addedd");
});

ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let listItem=event.target.parentElement;
        listItem.remove();
        console.log("deleted!");
    }
});


//     let dltbtns=document.querySelectorAll("button");
//     for(let dltbtn of dltbtns){
//     dltbtn.addEventListener("click",function(){
//         let par = dltbtn.parentElement;
//         par.remove();
//     });
// };