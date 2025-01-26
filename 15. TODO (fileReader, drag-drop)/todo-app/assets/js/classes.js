export class TodoItem {
  constructor(title) {
    this.id = new Date().getTime() + Math.round(Math.random() * 100);
    this.title = title;
    this.isDone = false;
    this.createdAt = new Date();
  }

  toggleDone() {
    this.isDone = !this.isDone;
    return this;
  }
  updateTitle(newTitle) {
    if (newTitle) {
      this.title = newTitle;
    }
    return this;
  }
}

export class TodoList {
  todos = [];
  constructor() {
    this.todos = [];
  }

  //methods
  addTodo(todo) {
    //error handling
    try {
      this.todos.push(todo);
    } catch (error) {
      return error;
    }
    return this.todos;
  }

  deleteTodo(id) {
    //array methods - filter, splice
    const remainingTodos = this.todos.filter((todo) => {
      return todo.id !== id;
    });

    this.todos = [...remainingTodos];

    return this.todos;
  }

  searchTodos(query) {
    const searchingTodos = this.todos.filter((todo) => {
      return todo.title
        .toLowerCase()
        .trim()
        .includes(query.toLowerCase().trim());
    });

    return searchingTodos;
  }

  filterTodos(filterOption) {
    switch (filterOption) {
      case "isDone":
        return this.todos.filter((todo) => todo.isDone);
      case "pending":
        return this.todos.filter((todo) => !todo.isDone);
      case "all":
        return this.todos;
      default:
        return { error: "invalid filter option" };
    }
  }

  sortTodos(option) {
    switch (option) {
      case "newest to oldest":
        return [
          ...this.todos.sort((todo1, todo2) => {
            return todo2.createdAt - todo1.createdAt;
          }),
        ];
      case "oldest to newest":
        return [
          ...this.todos.sort((todo1, todo2) => {
            return todo1.createdAt - todo2.createdAt;
          }),
        ];
      default:
        return {
          error: "invalid sort option!",
        };
    }
  }

  clearAllTodos() {
    this.todos = [];
    return this.todos;
  }

  getTodo(id) {
    return this.todos.find((x) => x.id == id);
  }
}
