import { useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { useEffect } from "react";

export const useCollaction = (collactionName) => {
  const [data, setData] = useState(null);

  useEffect(() => {}, [collactionName]);

  return { data };
};
