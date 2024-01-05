import LoginForm from "./components/LoginForm";
import TodoList from "./components/TodoList";
import { isLoggedIn } from "./firebase.config";

function App() {
  return (
    <>
      <h1
        className="
        text-black text-7xl text-center
        font-bold
        mt-4"
      >
        SolidBase
      </h1>
      <div className="flex flex-col items-center my-8">
        <div
          className="
          rounded
          flex flex-col items-center gap-3
          p-5 pb-12 w-10/12 max-w-5xl h-[600px]
          bg-black/90"
        >
          <h1
            className="
            sm:text-4xl
            flex flex-col gap-2 font-medium
            text-center text-white text-3xl
            mb-4"
          >
            Todo List With Auth
          </h1>
          <div class="flex w-full h-full justify-center items-center">
            <LoginForm />
          </div>
          {isLoggedIn() && (
            <>
              <hr className="border-white border-1 rounded w-full" />
              <TodoList />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
