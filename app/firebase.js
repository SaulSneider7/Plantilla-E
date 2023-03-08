// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

import { getFirestore, collection, addDoc, getDocs, onSnapshot, deleteDoc, doc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js"
//import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.1/firebase-firestore.js"

//====================================================
//REEMPLAZAR POR TUS PROPIAR CREDENCIALES DE FIREBASE
//====================================================
const firebaseConfig = {
    apiKey: "AIzaSyDoqtjthHH4p41v-T_OSwZfjuWFDiqMx4A",
    authDomain: "fir-demo-47ca8.firebaseapp.com",
    projectId: "fir-demo-47ca8",
    storageBucket: "fir-demo-47ca8.appspot.com",
    messagingSenderId: "406464430604",
    appId: "1:406464430604:web:09e8800712d6dac9d26429",
    measurementId: "G-GRP5HLGXKY",
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig); //recordar export es para poder importar app en otros archivos
//console.log(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
//export const db = getFirestore(app);

// INICIAR CRUD
const db = getFirestore(app);
