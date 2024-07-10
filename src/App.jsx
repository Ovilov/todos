// rrd
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

//layout
import MainLayout from "./layout/MainLayout";

//pages
import {
  Home,
  About,
  Contact,
  Login,
  Register,
  ErrorPage,
  Todos,
} from "./pages";

//register
import { action as RegisterAction } from "./pages/Register";
import { action as LoginAction } from "./pages/Login";
import ProtectedRoutes from "./components/ProtectedRoutes";

import { useGlobalContext } from "./hooks/useGlobalContext";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebaseConfig";

function App() {
  const { user, dispatch, isAuthReady } = useGlobalContext();

  const routes = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage />,
      element: (
        <ProtectedRoutes user={user}>
          <MainLayout />
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/todos",
          element: <Todos />,
        },
      ],
    },
    {
      path: "/login",
      errorElement: <ErrorPage />,
      element: user ? <Navigate to="/" /> : <Login />,
      action: LoginAction,
    },
    {
      path: "/register",
      errorElement: <ErrorPage />,
      element: user ? <Navigate to="/" /> : <Register />,
      action: RegisterAction,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch({ type: "LOG_IN", payload: user });
      dispatch({ type: "IS_AUTH_READY" });
    });
  }, []);

  return <>{isAuthReady && <RouterProvider router={routes} />}</>;
}

export default App;
