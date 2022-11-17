// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDOqOFgvLxixousyRqM5X_bzDHBsFNzygY",
    authDomain: "teclatonapp.firebaseapp.com",
    projectId: "teclatonapp",
    storageBucket: "teclatonapp.appspot.com",
    messagingSenderId: "821918063760",
    appId: "1:821918063760:web:4904a838e9c590c8650c15"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
