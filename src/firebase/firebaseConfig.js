import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD9XO9k5pYQLMh5gIYyJg746JZFQl8m59Q",
  authDomain: "mykitchen-daccf.firebaseapp.com",
  projectId: "mykitchen-daccf",
  storageBucket: "mykitchen-daccf.appspot.com",
  messagingSenderId: "725811162713",
  appId: "1:725811162713:web:d537fc5487cfa1d1740b48",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//db
export const db = getFirestore(app);
//auth
export const auth = getAuth(app);
