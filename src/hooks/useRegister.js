import { useState } from "react";
import { auth } from "../firebase/firebaseConfig";
import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { useGlobalContext } from "./useGlobalContext";

import toast from "react-hot-toast";

function useRegister() {
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useGlobalContext();

  // google
  const registerWithGoogle = async () => {
    setIsPending(true);
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      dispatch({ type: "LOG_IN", payload: user });
      toast.success(`Welcome , ${user.displayName}`);
      setIsPending(false);
    } catch (error) {
      const errorMessage = error.message;
      alert(errorMessage);
      setIsPending(false);
    }
  };

  //email and password
  const registerEmailAndPassword = async (
    email,
    password,
    displayName,
    photoURL
  ) => {
    try {
      const register = createUserWithEmailAndPassword(auth, email, password);
      const userCredential = (await register).user;
      await updateProfile(auth.currentUser, { displayName, photoURL });

      dispatch({ type: "LOG_IN", payload: user });
      toast.success(`Welcome , ${user.displayName}`);
    } catch (error) {
      const errorMessage = error.message;
      toast.error(errorMessage);
    }
  };

  return { registerWithGoogle, isPending, registerEmailAndPassword };
}

export { useRegister };
