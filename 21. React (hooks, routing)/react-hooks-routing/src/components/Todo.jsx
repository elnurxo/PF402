import { useReducer, useRef } from "react";

const TODO_ACTIONS = {
  add: "add",
  delete: "delete",
};

function todoReducer(state, action) {
  switch (action.type) {
    case TODO_ACTIONS.add:
      return { todos: [...state.todos, action.payload] };
    case TODO_ACTIONS.delete:
      return {
        todos: [
          ...state.todos.filter((x) => {
            return x.id !== action.payload;
          }),
        ],
      };
    case "toggle":
      break;
    case "edit":
      break;
    case "search":
      break;
    case "filter-by-done":
      break;
    default:
      break;
  }
}

const Todo = () => {
  const [state, dispatch] = useReducer(todoReducer, {
    todos: [],
  });
  const inputRef = useRef(null);
  return (
    <>
      <h2 style={{ textAlign: "center", margin: "12px auto" }}>
        Todo App with useReducer hook
      </h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({
            type: TODO_ACTIONS.add,
            payload: {
              id: Math.floor(Math.random() * 100),
              title: inputRef.current.value,
              isDone: false,
              createdAt: new Date().toLocaleDateString(),
            },
          });
          inputRef.current.value = "";
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <input ref={inputRef} type="text" placeholder="add todo..." />
        <button
          style={{
            width: "10%",
            padding: "6px",
            borderRadius: "6px",
            border: "none",
            marginBottom: "12px",
          }}
          type="submit"
        >
          add
        </button>
      </form>
      <hr />
      <ul
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "14px",
        }}
      >
        {state.todos &&
          state.todos.map((todo) => {
            return (
              <li
                style={{
                  textDecoration: todo.isDone ? "line-through" : "none",
                }}
                key={todo.id}
              >
                {todo.title} | <i>{todo.createdAt}</i>
                <button
                  onClick={() => {
                    if (window.confirm("delete?")) {
                      dispatch({ type: TODO_ACTIONS.delete, payload: todo.id });
                    }
                  }}
                >
                  delete
                </button>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Todo;
