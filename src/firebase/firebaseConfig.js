import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCG-GRJ3oQRg-lPaI57O7Jb6l968dD0Orc",
  authDomain: "first-project-a96e2.firebaseapp.com",
  projectId: "first-project-a96e2",
  storageBucket: "first-project-a96e2.appspot.com",
  messagingSenderId: "130785872381",
  appId: "1:130785872381:web:5e82077dbc33cc6b1a7194",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
