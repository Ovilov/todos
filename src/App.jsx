//react-router-dom
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import { useEffect } from "react";
//components
import { ProtectedRoutes } from "./components";
import { useContext } from "react";
//layouts
import MainLayout from "./layouts/MainLayout";
import { GlobalContext } from "./context/GlobalContext";
//pages
import { Home, Create, Login, Signup, Meal } from "./pages";
import { loader as Mealloader } from "./pages/Home";

//firebase
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebaseConfig";
import { getDocs, collection } from "firebase/firestore";
import { db } from "./firebase/firebaseConfig";

//actions
import { action as CreateAction } from "./pages/Create";
import { action as SignupAction } from "./pages/Signup";
import { action as LoginAction } from "./pages/Login";

function App() {
  const { user, dispatch, authReady } = useContext(GlobalContext);

  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <MainLayout />
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          element: <Home />,
          loader: Mealloader,
        },
        {
          path: "/meal/:title",
          element: <Meal />,
        },
        {
          path: "/create",
          element: <Create />,
          action: CreateAction,
        },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
      action: LoginAction,
    },
    {
      path: "/signup",
      element: user ? <Navigate to="/" /> : <Signup />,
      action: SignupAction,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch({ type: "LOG_IN", payload: user });
      dispatch({ type: "AUTH_READY" });
    });

    //
    async function getData() {
      const allData = [];
      const querySnapshot = await getDocs(collection(db, "myLogin"));
      querySnapshot.docs.forEach((item) => {
        allData.push({ idf: item.id, ...item.data() });
      });
      dispatch({ type: "INITIAL_DATA", payload: allData });
    }

    getData();
  }, []);
  return <>{authReady && <RouterProvider router={routes} />}</>;
}

export default App;
