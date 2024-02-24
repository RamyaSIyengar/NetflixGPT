// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBobrKOYR0GWfE-dsi8eTejpHg3V-5s7wg",
  authDomain: "netflixgpt-cfb8a.firebaseapp.com",
  projectId: "netflixgpt-cfb8a",
  storageBucket: "netflixgpt-cfb8a.appspot.com",
  messagingSenderId: "600560665137",
  appId: "1:600560665137:web:5c2b94750fe97615b70b10",
  measurementId: "G-X2W6YHCKPS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();