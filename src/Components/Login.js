import Header from "./Header";
import { useState } from "react";
import { ValidateData } from "../Utils/validate";
import { useRef } from "react";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";
import { LOGIN_PAGE_BG, USER_AVATAR } from "../Utils/constants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, SetErrorMessage] = useState(null); 
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleValidation = () => {
    const message = ValidateData(email.current.value, password.current.value);
    SetErrorMessage(message);
    if(!errorMessage) return; 

    if (!isSignIn) {
      // SIGN UP
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL: USER_AVATAR
          }).then(() => {
            // Profile updated!
            // ...
            const {uid,email,displayName,photoURL} = auth.currentUser;
            dispatch(addUser({uid: uid , email: email , displayName: displayName,photoURL: photoURL}));

          }).catch((error) => {
            // An error occurred
            // ...
            SetErrorMessage(error.message);
          });
          
          // ...
        })
        .catch((error) => {
          // const errorCode = error.code;
          const errorMessage = error.message;
          SetErrorMessage(errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          // const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          // const errorCode = error.code;
          const errorMessage = error.message;
          SetErrorMessage(errorMessage);
        });
    }
  };

  const handleSignIn = () => {
    setIsSignIn(!isSignIn);
    SetErrorMessage(null);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={LOGIN_PAGE_BG}
          alt="logo"
          className = "fixed object-cover h-screen w-screen"
        ></img>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-black md:w-3/12 md:p-12 md:my-36 mx-auto left-0 right-0 text-white bg-opacity-80 rounded-lg
        w-10/12 my-28 p-8">
        <h1 className="font-bold md:text-3xl md:my-4 my-2 text-xl">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
          ref={name}
            type="text"
            placeholder="Full Name"
            className="md:my-4 md:p-4 w-full bg-gray-700 bg-opacity-50 rounded-md p-3 my-2"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="md:my-4 md:p-4 w-full bg-gray-700 bg-opacity-50 rounded-md p-3 my-2"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="md:my-4 md:p-4 w-full bg-gray-700 bg-opacity-50 rounded-md p-3 my-2"
        />
        <p className="text-red-500 font-bold py-2">{errorMessage}</p>

        <button
          className="bg-red-700 font-bold md:my-4 md:p-4 w-full rounded-lg p-3 my-2"
          onClick={handleValidation}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="my-4 cursor-pointer font-bold" onClick={handleSignIn}>
          {isSignIn
            ? "New to Netflix? Sign up now"
            : "Already Registered? Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
