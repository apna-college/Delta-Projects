document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todoInput");
  const addBtn = document.getElementById("addBtn");
  const todoList = document.getElementById("todoList");
  const filterBtns = document.querySelectorAll(".filter-btn");

  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  let currentFilter = "all";

  // Render todos
  function renderTodos() {
    todoList.innerHTML = "";
    const filteredTodos = todos.filter((todo) => {
      if (currentFilter === "active") return !todo.completed;
      if (currentFilter === "completed") return todo.completed;
      return true;
    });

    filteredTodos.forEach((todo, index) => {
      const li = document.createElement("li");
      li.className = `todo-item ${todo.completed ? "completed" : ""}`;

      const completeBtn = document.createElement("button");
      completeBtn.className = "complete-btn";
      completeBtn.innerHTML = '<i class="fas fa-check"></i>';
      completeBtn.onclick = () => toggleComplete(index);

      const span = document.createElement("span");
      span.className = "todo-text";
      span.textContent = todo.text;

      const deleteBtn = document.createElement("button");
      deleteBtn.className = "delete-btn";
      deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
      deleteBtn.onclick = () => deleteTodo(index);

      li.appendChild(completeBtn);
      li.appendChild(span);
      li.appendChild(deleteBtn);
      todoList.appendChild(li);
    });

    localStorage.setItem("todos", JSON.stringify(todos));
  }

  // Add new todo
  function addTodo() {
    const text = todoInput.value.trim();
    if (text) {
      todos.push({ text, completed: false });
      todoInput.value = "";
      renderTodos();
    }
  }

  // Toggle todo completion
  function toggleComplete(index) {
    todos[index].completed = !todos[index].completed;
    renderTodos();
  }

  // Delete todo
  function deleteTodo(index) {
    todos.splice(index, 1);
    renderTodos();
  }

  // Filter todos
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.dataset.filter;
      renderTodos();
    });
  });

  // Event listeners
  addBtn.addEventListener("click", addTodo);
  todoInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTodo();
  });

  // Initial render
  renderTodos();
});
