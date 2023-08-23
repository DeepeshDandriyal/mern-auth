// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-9d246.firebaseapp.com",
  projectId: "mern-auth-9d246",
  storageBucket: "mern-auth-9d246.appspot.com",
  messagingSenderId: "359704668228",
  appId: "1:359704668228:web:2782ee87b71df92bb47411",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
