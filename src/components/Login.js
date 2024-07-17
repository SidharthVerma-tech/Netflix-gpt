import React, { useState, useRef, useEffect } from "react";
import { validateData } from "../utils/validData";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFormChange = () => {
    setIsSignIn(!isSignIn);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
      } else {
        dispatch(removeUser());
      }
    });
  }, [dispatch]);

  const handleFormSubmit = async () => {
    console.log("Hello")
    const message = validateData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    try {
      if (!isSignIn) {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          //name.current.value,
          email.current.value,
          password.current.value
        );
        const user = userCredential.user;
        console.log(user);
      } else {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );
        const user = userCredential.user;
        console.log(user);
      }
      navigate('/browse');
    } catch (error) {
      const errorMessage = error.message;
      console.log(error.code, errorMessage);
      setErrorMessage(errorMessage);
    }
  };

  return (
    <div className="relative min-h-screen">
      <Header />
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/e90516bd-6925-4341-a6cf-0b9f3d0c140a/IN-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_34324b52-d094-482b-8c2a-708dc64c9065_medium.jpg"
        alt="Background"
      />
      <form onSubmit={(e) => e.preventDefault()} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12 p-6 sm:p-8 md:p-10 lg:p-12 bg-black bg-opacity-80 rounded-lg text-center">
        <h1 className="font-bold text-white text-2xl sm:text-3xl mr-20 ml-0 mb-5">
          {!isSignIn ? "Sign Up" : "Sign In"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            className="p-2 sm:p-4 m-2 w-full rounded-sm bg-gray-700"
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          type="text"
          text='white'
          className="p-2 sm:p-4 m-2 w-full rounded-sm bg-gray-700"
          placeholder="Email address"
        />
        <input
          ref={password}
          type="password"
          className="p-2 sm:p-4 m-2 w-full rounded-sm bg-gray-700"
          placeholder="Password"
        />
        <p className="text-red-600">{errorMessage}</p>
        <button
          className="text-white bg-red-500 w-full rounded-sm m-2 p-4"
          type="submit"
          onClick={handleFormSubmit}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p
          onClick={handleFormChange}
          className="text-white cursor-pointer m-4 sm:m-6"
        >
          {isSignIn
            ? "New to Netflix? Sign Up"
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
