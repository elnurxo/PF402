const form = document.querySelector("form");
const inp = document.querySelector("input");
const list = document.querySelector("ul");
const TODOS = "todos";

window.addEventListener("DOMContentLoaded", function () {
  if (!JSON.parse(localStorage.getItem(TODOS))) {
    localStorage.setItem(TODOS, JSON.stringify([]));
  } else {
    //initial render
    const localTodos = JSON.parse(localStorage.getItem(TODOS));
    localTodos.forEach((todo) => {
      list.innerHTML += `
          <li data-id=${todo.id}>
            <span>${todo.title}</span>
            <button id='delete'>delete</button> 
        </li>
        `;
    });

    const deleteButtons = Array.from(document.querySelectorAll("#delete"));
    deleteButtons.forEach((btn) => {
      btn.addEventListener("click", function () {
        if (window.confirm("are you sure to delete?")) {
          this.parentElement.remove();
          //delete from local storage
          const localTodos = JSON.parse(localStorage.getItem(TODOS));
          const updatedTodos = localTodos.filter(
            (x) => x.id != this.parentElement.getAttribute("data-id")
          );
          localStorage.setItem("todos", JSON.stringify([...updatedTodos]));
        }
      });
    });
  }
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const value = inp.value.trim();
  const id = Math.round(Math.random() * 1000 + new Date().getTime());
  const listItem = document.createElement("li");
  listItem.setAttribute("data-id", id);
  const span = document.createElement("span");
  const btn = document.createElement("button");
  span.textContent = value;
  btn.textContent = "delete";
  btn.id = "delete";
  listItem.append(span, btn);
  list.appendChild(listItem);
  inp.value = "";
  //local storage
  const prevTodosLocal = JSON.parse(localStorage.getItem(TODOS));
  localStorage.setItem(
    "todos",
    JSON.stringify([...prevTodosLocal, { id: id, title: value }])
  );

  btn.addEventListener("click", function () {
    this.parentElement.remove();
    const localTodos = JSON.parse(localStorage.getItem(TODOS));
    const updatedTodos = localTodos.filter((x) => x.id != id);
    localStorage.setItem(TODOS, JSON.stringify([...updatedTodos]));
  });
});
