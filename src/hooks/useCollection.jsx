import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { useState, useEffect } from "react";

export function useCollection() {
  const [data, setdata] = useState(null);

  useEffect(() => {
    onSnapshot(collection(db, "MyKitchen"), (snapshot) => {
      const meals = [];
      snapshot.docs.forEach((doc) => {
        meals.push({ id: doc.id, ...doc.data() });
      });
      setdata(meals);
    });
  }, []);
  return { data };
}
