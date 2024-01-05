import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  setPersistence,
  browserSessionPersistence,
  onAuthStateChanged,
} from "firebase/auth";
import { createSignal } from "solid-js";

export const [isLoggedIn, setIsLoggedIn] = createSignal(false);
export const [profile, setProfile] = createSignal({});
export const [todos, setTodos] = createSignal([]);

const firebaseConfig = {
  /* your firebase configuration */
};

let app, db, auth, googleAuthProvider;

if (!app) app = initializeApp(firebaseConfig);
if (!db) db = getFirestore();
if (!auth) {
  auth = getAuth();
  googleAuthProvider = new GoogleAuthProvider();
  // Saves Auth Credentials Between Refreshes.
  setPersistence(auth, browserSessionPersistence);

  let unsubscribe;
  onAuthStateChanged(auth, (user) => {
    if (user) {
      /* Executes the code block when the user is logged in. */
      setProfile({
        username: user.displayName,
        avatar: user.photoURL,
        uid: user.uid,
      });
      setIsLoggedIn(true);

      /* Starts a listener for Firestore changes and updates the todos. */
      unsubscribe = onSnapshot(collection(db, "todos"), (snapshot) => {
        setTodos(snapshot.docs);
      });
    } else {
      /* Executes the code block when the user is logged out or not logged in yet. */
      setProfile({});
      setIsLoggedIn(false);
      /* Stops the listener from updating the todos. */
      if (unsubscribe) unsubscribe();
    }
  });
}

export {
  db,
  collection,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  auth,
  googleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
};
