import TodoItem from "./TodoItem";
import { profile, todos, db, collection, addDoc } from "../firebase.config";

function TodoList() {
  let todoInput;
  return (
    <div className="flex w-10/12 flex-col items-center justify-center">
      <h3
        className="
        mt-2
        font-medium
        text-center text-white text-xl"
      >
        {todos().length === 0
          ? "There are no tasks, awesome!"
          : "These are your tasks for today."}
      </h3>
      <ul
        className="
        my-5 h-48 w-full overflow-auto
        flex flex-col gap-2"
      >
        {todos().map((todo) => (
          <TodoItem todo={todo} />
        ))}
      </ul>
      <div className="flex gap-2 mt-2">
        <input
          className="
          bg-white rounded
          outline-none text-xl
          p-1 text-black"
          ref={todoInput}
          placeholder="Todo.."
        />
        <button
          className="
          bg-white rounded text-xl
          p-1 text-black font-medium"
          onClick={() => {
            if (todoInput.value === "") return;
            addDoc(collection(db, "todos"), {
              todo: todoInput.value,
              author: profile().username,
            });
            todoInput.value = "";
            todoInput.focus();
          }}
        >
          Add Todo
        </button>
      </div>
    </div>
  );
}

export default TodoList;
