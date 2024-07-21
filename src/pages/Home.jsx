//components
import { MealContainer } from "../components";
import { onSnapshot, collection } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { useCollection } from "../hooks/useCollection";

export const loader = async () => {
  const Meals = [];

  onSnapshot(collection(db, "myKitchen"), (snapshot) => {
    snapshot.forEach((doc) => {
      Meals.push({ id: doc.id, ...doc.data() });
    });
  });
  return Meals;
};

function Home() {
  const { data } = useCollection(loader);
  return (
    <div className="align-content mt-10">
      <MealContainer />
    </div>
  );
}

export default Home;
