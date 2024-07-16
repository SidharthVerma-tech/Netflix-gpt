import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleFormChange = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="relative min-h-screen">
      <Header />
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/e90516bd-6925-4341-a6cf-0b9f3d0c140a/IN-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_34324b52-d094-482b-8c2a-708dc64c9065_medium.jpg"
        alt="Background"
      />
      <form className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/12 p-12 bg-black bg-opacity-80 rounded-lg text-center">
        <h1 
        className="font-bold text-white text-3xl mb-6">
        {!isSignIn ?  "Sign Up" : "Sign In"}
        </h1>
        {!isSignIn && (<input type="text"
        className="p-4 m-2 w-full rounded-sm bg-gray-700 ml-0"
         placeholder="Full Name"/>)}
        <input
          type="text"
          className="p-4 m-2 w-full rounded-sm bg-gray-700 ml-0"
          placeholder="Email address"
        />
        <input
          type="password"
          className="p-4 m-2 w-full rounded-sm bg-gray-700 ml-0"
          placeholder="Password"
        />
        <button className="text-white bg-red-500 p-2 w-full m-6 rounded-md ml-0" type="submit">
          Sign In
        </button>
        <p
          onClick={handleFormChange}
          className="text-white cursor-pointer ml-0 m-6"
        >
          {isSignIn ? "New to Netflix? Sign Up" : "Already registered Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
