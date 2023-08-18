let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let li = document.getElementsByClassName("li")
let editBtn = document.getElementsByClassName('edit');
let numEditBtns = editBtn.length;

let delKey = document.getElementsByClassName("delete");
let numDelBtns = delKey.length;
//______________________________________________________________________________________________________________
//calling fuctions
function showEditBtns(event) {
    if(event.target.nodeName == "BUTTON"){
        let listValue = event.target.parentElement.firstChild["nodeValue"] 
        inp.value = listValue;
        let list = event.target.parentElement;
       console.log(list)   
       list.remove()
   }
}
function deleteList(event){
    console.dir(event.target);
    let del = event.target.parentElement;
    del.remove();
    console.log(del)
}
//______________________________________________________________
//btns create when user click submit
btn.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerHTML = inp.value;
    item.classList.add("li")

    let delKey = document.createElement("button");
    delKey.innerHTML = 'del'
    delKey.classList.add("delete");
    delKey.style.marginRight = "0.5rem";
    delKey.style.marginLeft = "0.9rem";
    item.appendChild(delKey);
    ul.appendChild(item)
    inp.value = "";

    let del = document.getElementsByClassName("delete");
    console.log(del)
    let delLength = del.length;
    console.log(delLength);

     //Delete Section by when we create list
     for(let i=0; i<delLength; i++){
        del[i].addEventListener("click", deleteList)
    }
 
    let creaEditbtn = document.createElement("button");
    creaEditbtn.innerHTML = 'edit';
    creaEditbtn.classList.add("edit");
    item.appendChild(creaEditbtn);

    let editBtn = document.getElementsByClassName("edit");
    let numEditBtns = editBtn.length;
//editing by when we create list
      for (let i = 0; i < numEditBtns; i++) {
        editBtn[i].addEventListener('click', showEditBtns);
    }
})
//______________________________________________________________________________________________________________
//Editing
for (let i = 0; i < numEditBtns; i++) {
  editBtn[i].addEventListener('click', showEditBtns);
}
//Delete Section
for(let i=0; i<numDelBtns; i++){
    delKey[i].addEventListener("click", deleteList)
}
