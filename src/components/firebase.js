// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfJte5zE8VXSAMVjOQL18epvc8SKscCo8",
  authDomain: "therapy-inter-project.firebaseapp.com",
  projectId: "therapy-inter-project",
  storageBucket: "therapy-inter-project.appspot.com",
  messagingSenderId: "674845759065",
  appId: "1:674845759065:web:a8263121a6f7382620c348",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
