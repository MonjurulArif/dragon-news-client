// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyAxHUXADfy_6NxdVhtUL2B29JqBzTiB7k0",
  // authDomain: "dragon-news-572f7.firebaseapp.com",
  // projectId: "dragon-news-572f7",
  // storageBucket: "dragon-news-572f7.appspot.com",
  // messagingSenderId: "465053356777",
  // appId: "1:465053356777:web:afe21fe92fcff1f0e45678",

  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
