// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8xsZ-erwNawQR91NCYRg0_TxZjF6LmI4",
  authDomain: "loginpage-95c2a.firebase.app",
  projectId: "loginpage-95c2a",
  storageBucket: "loginpage-95c2a.appspot.com",
  messagingSenderId: "623875442393",
  appId: "1:623875442393:web:8301b4acb8227f2a70e0c8",
  measurementId: "G-4HGJ1R094H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);