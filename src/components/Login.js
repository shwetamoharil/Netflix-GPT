import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { userActions } from "../store/userSlice";
import { useLocation } from "react-router-dom";
import { signOut } from "firebase/auth";

const Login = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { addUser, removeUser } = userActions;

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef("");
  const password = useRef("");
  const name = useRef("");

  const value = location?.state?.value;

  if (value === "sign-out") {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser());
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  }

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value, name.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      // Sign Up logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          const { uid, email, displayName } = user;
          dispatch(addUser({ uid, email, displayName }));
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
          // ..
        });
    } else {
      // Sign In
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };

  return (
    <div className="relative">
      <Header />
      <div className="relative">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background-logo"
          className="h-[100vh] w-[100%]"
        />
        <div className="absolute bg-black py-10  top-[25%] mx-auto right-0 left-0 w-3/12 bg-opacity-80 rounded-lg">
          <form className="text-white p-12">
            <h1 className="font-bold text-3xl py-2  my-2 w-full">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && <input type="text" ref={name} placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700 rounded-md" />}
            <input type="text" ref={email} placeholder="Enter Email" className="p-4 my-4 w-full bg-gray-700 rounded-md" />
            <input type="password" ref={password} placeholder="Enter Password" className="p-4 my-2 w-full bg-gray-700 rounded-md" />
            <p className="text-red-700 p-2 my-4 w-full text-lg font-semibold">{errorMessage}</p>
            <button type="button" className="bg-red-700 p-4  w-full rounded-md" onClick={handleButtonClick}>
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <p className="p-2 my-4 w-full cursor-pointer font-bold" onClick={toggleSignInForm}>
              {isSignInForm ? "New to Netflix? Sign Up" : "Already existing user? Sign In"}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
