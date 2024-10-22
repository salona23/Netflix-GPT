import { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGE } from "../Utils/constants";
import { toggleGptSearchView } from "../Utils/gptSlice";
import { changeLanguage } from "../Utils/configSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  
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
    // console.log("click");
  };
  const handleLanguageChange = (e) =>{
    // console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  }

  return (
    <div className="fixed  w-screen md:px-12 py-2  bg-gradient-to-b from-black flex flex-row justify-between z-40 px-2 " >
      
      <img className="md:w-[200px] md:mx-0 w-[90px] " src={LOGO} alt="Netflix-logo"></img>

      {user && (
        <div className="flex my-2 md:p-2 ">
         {showGptSearch && <select className="bg-gray-800 text-white md:px-4 md:h-9 md:text-sm rounded-md opacity-85 
          text-[10px] h-[22px] mr-2 " onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGE.map((lang)=> <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
          
          </select>}
          <button
            className="md:h-9 md:px-4 md:mx-2 md:text-sm bg-purple-700 rounded-lg text-white font-bold hover:bg-purple-900
             text-[12px] h-[22px] px-2 mr-1"
            onClick={handleGptSearch}
          >
            {showGptSearch ? "Home":"GPTSearch"}
          </button>
          <img
            className="md:text-[20px] md:h-8 md:mx-2  rounded-md
            text-[10px] h-[22px] mx-2 "
            src={user.photoURL}
            alt="User Avatar"
          ></img>
          <button
            className="md:h-9 md:px-2 md:mx-2 md:text-sm bg-red-600 text-white rounded-md font-bold hover:bg-red-500
            text-[12px] h-[22px] px-2 mr-1"
            onClick={handleSignOut}
          >
            SignOut
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
