let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
  if (input.value !== "") {
    let li = document.createElement("li");

    // Add task text
    let taskText = document.createElement("span");
    taskText.innerText = input.value;
    li.appendChild(taskText);

    // Create a simple delete button with text "X"
    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.innerText = "X"; // Using "X" as the delete icon
    li.appendChild(deleteBtn);

    ul.appendChild(li);
    input.value = "";
  } else {
    alert("Please enter your task first!!");
  }
});

ul.addEventListener("click", function (event) {
  if (event.target.classList.contains("deleteBtn")) {
    let listItem = event.target.closest("li");
    listItem.remove();
    console.log("deleted");
  }
});
