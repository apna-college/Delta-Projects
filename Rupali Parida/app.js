const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const emptyImage = document.querySelector(".empty-image");

function addTask() {
    if (inputBox.value === '') {
        alert("you must write something!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
    checkEmpty();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
    checkEmpty();
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
    checkEmpty();
}
function checkEmpty() {
    if (listContainer.children.length === 0) {
        emptyImage.style.display = "block";
    } else {
        emptyImage.style.display = "none";
    }
}

showTask();