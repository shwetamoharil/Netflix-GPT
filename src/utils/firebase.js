// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAzOmgKlGe4oCtoHmkMidGzhD5omUsOdU",
  authDomain: "netflixgpt-238af.firebaseapp.com",
  projectId: "netflixgpt-238af",
  storageBucket: "netflixgpt-238af.appspot.com",
  messagingSenderId: "651961261835",
  appId: "1:651961261835:web:d7a6691cfa525716ea8c0e",
  measurementId: "G-8V8YRSMM39",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
