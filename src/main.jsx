import ReactDOM from "react-dom/client";
import GlobalContextProvider from "./context/GlobalContext";
import App from "./App.jsx";
import "./index.css";
import { Toaster } from "react-hot-toast";
ReactDOM.createRoot(document.getElementById("root")).render(
  <GlobalContextProvider>
    <Toaster />
    <App />
  </GlobalContextProvider>
);
