// Import the functions you need from the SDKs you need
import { FirebaseError, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDW7WVLSf8uFm5YIViHVtL-YuOaAUfCpE",
  authDomain: "quiz-8f052.firebaseapp.com",
  projectId: "quiz-8f052",
  storageBucket: "quiz-8f052.appspot.com",
  messagingSenderId: "548041590496",
  appId: "1:548041590496:web:197dd9ee9504405e613285",
  measurementId: "G-LPF2QJTR9J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export {app, auth, db ,FirebaseError};
