
// Load todos on page load
document.addEventListener("DOMContentLoaded", loadTodos);

function addTodo() {
  const input = document.getElementById("todoInput");
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  
  todos.push({ text: input.value, completed: false });
  localStorage.setItem("todos", JSON.stringify(todos));
  
  input.value = "";
  loadTodos();
}

function loadTodos() {
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  const list = document.getElementById("todoList");
  list.innerHTML = "";

  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.textContent = todo.text;
    if (todo.completed) li.style.textDecoration = "line-through";
    list.appendChild(li);
  });
}