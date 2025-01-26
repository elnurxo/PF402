import { TITLE_REGEX } from "./constants.js";
const titleInput = document.querySelector(".todo-form__input");
const errorMessage = document.querySelector(".error-message");
const addBtn = document.querySelector(".todo-form__btn");
const todoList = document.querySelector(".todo-list");
const todoCount = document.querySelector("#todo-count");

export function validateForm(titleVal) {
  if (titleVal.trim().length === 0) {
    //input empty
    errorMessage.classList.replace("d-none", "d-block");
    errorMessage.textContent = "input field is required!";
    addBtn.setAttribute("disabled", true);
    addBtn.classList.replace("btn-purple", "btn-danger");
    return;
  }

  if (!TITLE_REGEX.test(titleVal)) {
    //not ok
    errorMessage.classList.replace("d-none", "d-block");
    errorMessage.textContent = "input regex failed!";
    addBtn.setAttribute("disabled", true);
    addBtn.classList.replace("btn-purple", "btn-danger");
  } else {
    //ok
    errorMessage.classList.replace("d-block", "d-none");
    errorMessage.textContent = "";
    addBtn.removeAttribute("disabled", true);
    addBtn.classList.replace("btn-danger", "btn-purple");
  }
}

export function resetForm() {
  titleInput.value = "";
}

export function renderTodoList(app, queryArr) {
  todoList.innerHTML = "";
  const arr = queryArr ? queryArr : app.todos;
  arr.forEach((todo) => {
    todoList.innerHTML += `
     <li class="todo-list__item">
                <span style="text-decoration: ${
                  todo.isDone ? "line-through" : "none"
                }"><span id="todo-title">${todo.title}</span>, <i>${moment(
      todo.createdAt
    )
      .startOf("minute")
      .fromNow()}</i></span>
                <div class="btns-wrapper" data-id="${todo.id}">
                    <button class="btn btn-outline-primary check">
                        <i class="fa-solid fa-check"></i>
                    </button>
                    <button class="btn btn-outline-danger delete">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                    <button class="btn btn-outline-warning update">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                </div>
            </li>
    `;
  });

  //mark check - uncheck
  const checkButtons = Array.from(document.querySelectorAll(".check"));
  checkButtons.forEach((checkBtn) => {
    checkBtn.addEventListener("click", function () {
      const id = this.parentElement.getAttribute("data-id");
      const updatingTodo = app.todos.find((x) => x.id == id);
      updatingTodo.toggleDone();
      this.parentElement.previousElementSibling.style.textDecoration =
        updatingTodo.isDone ? "line-through" : "none";
      if (updatingTodo.isDone) {
        todoCount.textContent = Number(todoCount.textContent) - 1;
      } else {
        todoCount.textContent = Number(todoCount.textContent) + 1;
      }
    });
  });

  //delete buttons
  const deleteButtons = Array.from(document.querySelectorAll(".delete"));
  deleteButtons.forEach((deleteBtn) => {
    deleteBtn.addEventListener("click", function () {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          const id = this.parentElement.getAttribute("data-id");
          app.deleteTodo(id);
          this.parentElement.parentElement.remove();
          const currentTodo = app.getTodo(id);
          if (!currentTodo.isDone) {
            todoCount.textContent = Number(todoCount.textContent) - 1;
          }
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      });
    });
  });

  //update buttons
  const updateButtons = Array.from(document.querySelectorAll(".update"));
  updateButtons.forEach((updateBtn) => {
    updateBtn.addEventListener("click", function () {
      const id = this.parentElement.getAttribute("data-id");
      const currentTodo = app.getTodo(id);
      Swal.fire({
        title: "update your todo title",
        input: "text",
        inputValue: currentTodo.title,
        inputAttributes: {
          autocapitalize: "off",
        },
        showCancelButton: true,
        confirmButtonText: "update",
        showLoaderOnConfirm: true,
        allowOutsideClick: () => !Swal.isLoading(),
      }).then((result) => {
        if (result.isConfirmed) {
          if (result.value.trim().length === 0) {
            Swal.fire({
              icon: "error",
              title: `input cannot be empty!`,
            });
            return;
          }
          //update
          currentTodo.updateTitle(result.value);
          this.parentElement.previousElementSibling.children[0].textContent =
            result.value;
          Swal.fire({
            title: `todo updated successfully!`,
            imageUrl:
              "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/02/aoi-todo.jpg",
          });
        }
      });
    });
  });
}
