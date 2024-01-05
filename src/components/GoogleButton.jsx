import GoogleIcon from "/GoogleIcon.svg";
import { auth, signInWithPopup, googleAuthProvider } from "../firebase.config";

export default function GoogleLoginButton() {
  return (
    <button
      className="
      flex items-center
      font-medium w-10/12
      p-1 rounded
      text-white bg-blue-500"
      onClick={() => signInWithPopup(auth, googleAuthProvider)}
    >
      <img
        className="w-9 h-9 p-1 bg-white rounded"
        src={GoogleIcon}
      />
      <p className="text-center w-full">Login with Google</p>
    </button>
  );
}
