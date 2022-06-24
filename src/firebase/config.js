// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGjI3zxu8rQzQXp59bTFVAlwXfIzOrJ30",
  authDomain: "dereemii-store.firebaseapp.com",
  projectId: "dereemii-store",
  storageBucket: "dereemii-store.appspot.com",
  messagingSenderId: "1007735169515",
  appId: "1:1007735169515:web:1b8ea1fc068302fa47f9ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)