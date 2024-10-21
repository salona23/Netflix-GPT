// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEGTXGXYkLTt_9GnFsvzjzBrwcVKg7zXo",
  authDomain: "netflixgpt-salona-dubey.firebaseapp.com",
  projectId: "netflixgpt-salona-dubey",
  storageBucket: "netflixgpt-salona-dubey.appspot.com",
  messagingSenderId: "374782290099",
  appId: "1:374782290099:web:c3b0fea51d3b3056eda8c6",
  measurementId: "G-6XNZ9N96VD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();