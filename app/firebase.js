// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
//import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBsoVY1OuziKwMj2rwOYz3xRZC1QeL3IQk",
    authDomain: "fir-app-tuto-5c20f.firebaseapp.com",
    projectId: "fir-app-tuto-5c20f",
    storageBucket: "fir-app-tuto-5c20f.appspot.com",
    messagingSenderId: "464717605656",
    appId: "1:464717605656:web:03e31531db8fed6379cc6d",
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig); //recordar export es para poder importar app en otros archivos
//console.log(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
//export const db = getFirestore(app);
