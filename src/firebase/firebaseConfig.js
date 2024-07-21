import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAX_dzu4DOhPro1ZDz1vDKXKP-FL5yD72w",
  authDomain: "mykitchen-8ac26.firebaseapp.com",
  projectId: "mykitchen-8ac26",
  storageBucket: "mykitchen-8ac26.appspot.com",
  messagingSenderId: "601745231095",
  appId: "1:601745231095:web:83cef581c6a3a89ac057f2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//db
export const db = getFirestore(app);
//auth
export const auth = getAuth(app);
