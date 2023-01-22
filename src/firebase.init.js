// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAn08eHMevXOWwW3_0P1saP6jeSGU2U5o",
  authDomain: "hotel-relax-47dca.firebaseapp.com",
  projectId: "hotel-relax-47dca",
  storageBucket: "hotel-relax-47dca.appspot.com",
  messagingSenderId: "105570527611",
  appId: "1:105570527611:web:5c70742c9d175f6ffbb5de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;