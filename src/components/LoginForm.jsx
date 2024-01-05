import GoogleLoginButton from "./GoogleButton";
import { auth, signOut, profile, isLoggedIn } from "../firebase.config";

function LoginForm() {
  return (
    <>
      {isLoggedIn() ? (
        <div className="flex items-center gap-4 w-full">
          <button
            className="
            text-black text-2xl font-medium
            mr-auto py-1 px-2
            bg-white rounded"
            onClick={() => signOut(auth)}
          >
            Logout
          </button>
          <h1 className="text-white text-2xl font-bold">
            {profile().username}
          </h1>
          <img
            className="rounded-full border-white border-2 h-16"
            src={profile().avatar}
          />
        </div>
      ) : (
        <div
          className="
          flex flex-col items-center
          w-full max-w-lg"
        >
          <GoogleLoginButton />
          <div
            className="
            relative
            flex items-center justify-center
            my-2 w-10/12"
          >
            <div
              className="
              absolute left-2
              bg-white rounded
              h-0.5 w-1/3"
            ></div>
            <p className="text-white font-bold">Or</p>
            <div
              className="
              absolute right-2
              bg-white rounded
              h-0.5 w-1/3"
            ></div>
          </div>
          <button
            className="
            h-10 w-10/12
            font-medium
            py-1 px-2 rounded
            text-white
            bg-black"
          >
            Login as a guest
          </button>
        </div>
      )}
    </>
  );
}

export default LoginForm;
