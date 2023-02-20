// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDr4uMe2wfxSluJKEhhW2XZ6Fy78335zFI",
  authDomain: "techno-acadey.firebaseapp.com",
  projectId: "techno-acadey",
  storageBucket: "techno-acadey.appspot.com",
  messagingSenderId: "711158740576",
  appId: "1:711158740576:web:2c0bb8fd50d941f570b505"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();