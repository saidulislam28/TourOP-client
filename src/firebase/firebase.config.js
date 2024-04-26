// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALhhGG5VATylN5iA7aP2fAylL2OI4wDpY",
  authDomain: "tour-op-authentication.firebaseapp.com",
  projectId: "tour-op-authentication",
  storageBucket: "tour-op-authentication.appspot.com",
  messagingSenderId: "223044425448",
  appId: "1:223044425448:web:cc444248b4e90460445b5d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;