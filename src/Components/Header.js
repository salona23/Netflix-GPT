import { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import { LOGO } from "../Utils/constants";
import { toggleGptSearchView } from "../Utils/gptSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");

        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });

    //unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
    console.log("click");
  };

  return (
    <div className="absolute w-screen px-8 py-2  bg-gradient-to-b from-black  flex justify-between z-20">
      <img className="w-[200px]" src={LOGO} alt="Netflix-logo"></img>

      {user && (
        <div className="flex my-2 p-2">
          <button
            className="h-9 px-4 mx-8 bg-purple-700 rounded-lg text-white  font-bold hover:bg-purple-900 "
            onClick={handleGptSearch}
          >
            GPTSearch
          </button>
          <img
            className="w-8 h-8 rounded-md mx-2"
            src={user.photoURL}
            alt="User Avatar"
          ></img>
          <button
            className="h-9 px-2 mx-2 bg-red-600 text-white rounded-md font-bold hover:bg-red-500"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
