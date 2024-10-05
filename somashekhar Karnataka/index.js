
const addBtn = document.querySelector("button");
const ul = document.querySelector("ul");
const inp = document.querySelector("input");

addBtn.addEventListener("click",()=>{  
    if(inp.value === ""){
      return alert("plase add todo")
    }else{
      let li = document.createElement("li");
    li.innerText = inp.value;
    ul.appendChild(li);
    inp.value = "";
      const span = document.createElement("span");
      let doneBtn = document.createElement("button");
      doneBtn.innerText ="Done"
      doneBtn.classList.add("done")
      span.appendChild(doneBtn)
      let btnDel = document.createElement("button");
      btnDel.innerText = "Delete"
      span.appendChild(btnDel)
      li.appendChild(span)
    } 
})

ul.addEventListener("click",(e)=>{
  console.dir(e.target.innerText )
  if(e.target.innerText === "Delete"){
    e.target.parentElement.parentElement.remove();
  }else if(e.target.innerText === "Done" || e.target.innerText === "cancel" ){
    e.target.parentElement.parentElement.classList.toggle("linethrough")
    if( e.target.parentElement.parentElement.classList.contains("linethrough")){
      e.target.innerText = "cancel"
    }else if (e.target.innerText === "cancel"){
      e.target.innerText = "Done"
    }
  }
})




// let delBtns = document.querySelectorAll(".container ul li button")
// for(let delBtn of delBtns){

//   delBtn.addEventListener("click",(e)=>{
//     console.log(e)
//     delBtn.parentElement.remove();
//   })

// }
  


