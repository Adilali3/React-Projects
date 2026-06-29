// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getfirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6eKLTg4AuIJw2xgQtgxOba1VeJm94IPI",
  authDomain: "vitecontact-6d5e8.firebaseapp.com",
  projectId: "vitecontact-6d5e8",
  storageBucket: "vitecontact-6d5e8.firebasestorage.app",
  messagingSenderId: "1092370625259",
  appId: "1:1092370625259:web:d3a9c50a7ca77a645c44ae"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getfirestore(app);