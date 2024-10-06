let button = document.querySelector("#addBtn");
let task = document.querySelector("#taskInp");

button.addEventListener("click", () => {
  addTask();
  task.value = "";
});

let list = document.querySelector("#list");

function addTask() {
  let value = task.value;
  let item = document.createElement("li");
  let delBtn = document.createElement("button");
  delBtn.innerText = "Delete";
  delBtn.classList.add("delBtn");

  if (value !== "") {
    item.innerText = value;
    item.classList.add("list-style");
    list.appendChild(item);
    item.appendChild(delBtn);
   
  }
}

list.addEventListener("click" , (event)=>{
    if(event.target.nodeName == "BUTTON"){
        let elmt = event.target.parentElement;
        elmt.remove();
    }
    
})