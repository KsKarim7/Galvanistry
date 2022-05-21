// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCkW5koBXrVjTG8-yYM6Ma9QE1CKBa65tQ",
    authDomain: "the-big-project-12.firebaseapp.com",
    projectId: "the-big-project-12",
    storageBucket: "the-big-project-12.appspot.com",
    messagingSenderId: "532359673393",
    appId: "1:532359673393:web:720754b518d483d0cc4710"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;