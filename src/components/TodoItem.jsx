import { db, deleteDoc, doc } from "../firebase.config";

export default function TodoItem(props) {
  const { todo } = props;
  return (
    <li
      className="
      flex gap-3 justify-between
      mr-2 text-xl"
    >
      <span className="text-white font-medium break-all max-w-lg">
        {todo.data().todo}
      </span>
      <button
        className="
        bg-red-500 rounded
        py-1 px-2 text-white"
        onClick={() => {
          deleteDoc(doc(db, "todos", todo.id));
        }}
      >
        Delete
      </button>
    </li>
  );
}
