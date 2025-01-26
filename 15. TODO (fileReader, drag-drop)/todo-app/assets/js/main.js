import { renderTodoList, resetForm, validateForm } from "./helpers.js";
import { TodoItem, TodoList } from "./classes.js";

const titleInput = document.querySelector(".todo-form__input");
const todoForm = document.querySelector(".todo-form");
const todoCount = document.querySelector("#todo-count");
const clearAllBtn = document.querySelector(".clear-all");

//onload - create todos array
let app = undefined;
window.addEventListener("load", () => {
  app = new TodoList();
});

//form input change - validate
titleInput.addEventListener("keyup", (e) => {
  validateForm(e.target.value);
});

//form submit - add todo
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const todoItem = new TodoItem(titleInput.value);
  app.addTodo(todoItem);
  resetForm();
  renderTodoList(app);
  todoCount.textContent = app.todos.filter((todo) => !todo.isDone).length;

  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "todo created successfully!",
    showConfirmButton: false,
    timer: 1500,
  });
});

//clear all click
clearAllBtn.addEventListener("click", function () {
  Swal.fire({
    title: "Are you sure to delete all?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      //delete
      app.clearAllTodos();
      renderTodoList(app);
      todoCount.textContent = "no";
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success",
      });
    }
  });
});

//search
const searchInput = document.querySelector(".search-todo");

searchInput.addEventListener("keyup", function (e) {
  const searchedTodos = app.searchTodos(e.target.value);
  renderTodoList(app, searchedTodos);
});

//filter
const filterTodos = document.querySelector("#filter");

filterTodos.addEventListener("change", function (e) {
  const filteredTodos = app.filterTodos(e.target.value);
  renderTodoList(app, filteredTodos);
});

//sort
const sortTodos = document.querySelector("#sort");
sortTodos.addEventListener("change", function (e) {
  const sortedTodos = app.sortTodos(e.target.value);
  renderTodoList(app, sortedTodos);
});
