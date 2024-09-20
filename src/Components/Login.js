import React from "react";
import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const handleSignIn = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/IN-en-20240916-TRIFECTA-perspective_72df5d07-cf3f-4530-9afd-8f1d92d7f1a8_large.jpg"
          alt="logo"
        ></img>
      </div>
      <form className="absolute bg-black w-3/12 p-12 my-36 mx-auto left-0 right-0 text-white bg-opacity-80 rounded-lg">
        <h1 className="font-bold text-3xl my-4">
          {isSignIn ? "Sign In" : "Sign Out"}
        </h1>
        {!isSignIn &&
        <input
        type="text"
        placeholder="Full 3Name"
        className="my-4 p-4 w-full bg-gray-700 bg-opacity-50 rounded-md"
      />
        }
        <input
          type="text"
          placeholder="Email Address"
          className="my-4 p-4 w-full bg-gray-700 bg-opacity-50 rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          className="my-4 p-4 w-full bg-gray-700 bg-opacity-50 rounded-md"
        />
        <button className="bg-red-700 font-bold my-4 p-4 w-full rounded-lg">
        {isSignIn ? "Sign In" : "Sign Out"}
        </button>
        <p className="my-4 cursor-pointer font-bold" onClick={handleSignIn}>
        {isSignIn ? "New to Netflix? Sign up now" : "Already Registered? Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
