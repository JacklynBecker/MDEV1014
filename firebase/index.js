// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSKFwx9WPhiDiYrG1JDhjafdpp2xFU8bU",
  authDomain: "crossdevelopment-assign2.firebaseapp.com",
  projectId: "crossdevelopment-assign2",
  storageBucket: "crossdevelopment-assign2.firebasestorage.app",
  messagingSenderId: "873362158632",
  appId: "1:873362158632:web:31368d3c4b6d0cff33311d",
  measurementId: "G-YP8TCYN24R"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

//register user with email and password
export const register = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

//login user with email and password
export const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

//logout user
export const logout = () => {
  return auth.signOut();
};

export { app, auth };