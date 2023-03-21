// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSckfFp66qyRghrhVI5gxshTN9817PdOY",
  authDomain: "my-project-1485302959620.firebaseapp.com",
  projectId: "my-project-1485302959620",
  storageBucket: "my-project-1485302959620.appspot.com",
  messagingSenderId: "785954551487",
  appId: "1:785954551487:web:cc2a6d45800714b39f380a",
  measurementId: "G-JZCSSDLLRD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);