// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOhLrZJ66ZzGndLvFe86uT5t3dW6-LJNE",
  authDomain: "alowebapp.firebaseapp.com",
  projectId: "alowebapp",
  storageBucket: "alowebapp.appspot.com",
  messagingSenderId: "279225459611",
  appId: "1:279225459611:web:2dea95e46b464267f1f73e",
  measurementId: "G-E1BSM0P4JZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  console.log(app);