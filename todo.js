let btn = document.querySelector(".todo-button");
let inp = document.querySelector(".todo-inputs");
let ul = document.querySelector(".todo-list");

btn.addEventListener("click", function(e){
    e.preventDefault();
    let items = document.createElement("li");
    items.innerText = inp.value;

    let btnDel= document.createElement("button");
    btnDel.innerHTML= "<i class='fa-solid fa-trash'></i>";
    btnDel.classList.add("delete");
    items.appendChild(btnDel);

    ul.appendChild(items);
    inp.value="";
}); 

ul.addEventListener("click", function(event){
    // console.log(event.target.parentElement.parentElement);
    if(event.target.nodeName=="I"){
        let listItem = event.target.parentElement.parentElement;
        listItem.remove();
        console.log("deleted");
    }
});



 