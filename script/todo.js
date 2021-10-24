const todoInput = document.querySelector(".todo-input"),
  todoForm = document.querySelector(".todo-form"),
  todoList = document.querySelector(".todo-list");

var toDos = [];

function loadTodos() {
  if (localStorage.getItem("todos") != null) {
    toDos = JSON.parse(localStorage.getItem("todos"));
    for (var todo of toDos) {
      paintTodo(todo);
    }
  }
}

function saveTodo() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}

function delTodo(e) {
  const li = e.target.parentNode;
  li.remove();
  const delTodo = e.target.nextSibling.innerText;
  const delIdx = toDos.indexOf(delTodo);

  toDos.splice(delIdx, 1);
  saveTodo();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const btn = document.createElement("button");

  btn.innerText = "🗙";
  span.innerText = newTodo;
  li.appendChild(btn);
  li.appendChild(span);
  todoList.appendChild(li);

  btn.addEventListener("click", delTodo);
}

function writeTodo(e) {
  e.preventDefault();

  var newTodo = todoInput.value;
  todoInput.value = "";

  toDos.push(newTodo);

  saveTodo();
  paintTodo(newTodo);
}

loadTodos();
todoForm.addEventListener("submit", writeTodo);
