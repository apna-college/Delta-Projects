let inp=document.querySelector("input");
let btn=document.querySelector("button");
let ul=document.querySelector("ul");
btn.addEventListener("click",function(){
    let task=document.createElement("li");
let del=document.createElement("button");
  del.innerText="delete";
  task.innerText=inp.value;
  task.append(del)

   ul.append(task);
   inp.value="";
});
ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        event.target.parentElement.remove();
    }
});



