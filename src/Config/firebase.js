// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAY6DqdcSHFhdSeIUmkt3qku66yx4JLOdc",
  authDomain: "vite-contact-2378c.firebaseapp.com",
  projectId: "vite-contact-2378c",
  storageBucket: "vite-contact-2378c.appspot.com",
  messagingSenderId: "134841354410",
  appId: "1:134841354410:web:c8f4eb7eda8b319a4068d3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 