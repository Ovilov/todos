import { useGlobalContext } from "../hooks/useGlobalContext";

import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import toast from "react-hot-toast";

function Navbar() {
  const { user } = useGlobalContext();

  const signOutProfile = async () => {
    await signOut(auth);
    toast.success("See you Soon");
  };

  return (
    <header className="bg-base-200">
      <nav className="navbar align-elements">
        <div className="navbar-start">
          <h3 className="btn btn-primary text-2xl">Logo</h3>
        </div>
        <div className="navbar-center"></div>
        <div className="navbar-end">
          <div className="flex items-center gap-4">
            <div>
              <p className="font-semibold">{user.displayName}</p>
            </div>
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                <img src={user.photoURL} />
              </div>
            </div>
            <div>
              <button onClick={signOutProfile} className="btn btn-secondary">
                {" "}
                LogOut
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
