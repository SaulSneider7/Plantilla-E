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
    apiKey: "AIzaSyCZkD-wjeZ0rZ1lPr4dWNb5jNhyyooiIuo",
    authDomain: "unidad4-84750.firebaseapp.com",
    projectId: "unidad4-84750",
    storageBucket: "unidad4-84750.appspot.com",
    messagingSenderId: "1011799768835",
    appId: "1:1011799768835:web:18620ddacb570b3265f336",
    measurementId: "G-Y4VC4BSMFX"
  };
// Initialize Firebase
export const app = initializeApp(firebaseConfig); //recordar export es para poder importar app en otros archivos
//console.log(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
//export const db = getFirestore(app);

// INICIAR CRUD
export const db = getFirestore(app);

// FUNCION PARA GUARDAR DATOS
export const saveTask = (title, description, userMail)=>{
    addDoc(collection(db,"task")); 
};
// FUNCION PARA TRAER VARIOS DATOS DE FIREBASE
export const getTasks = () => getDocs(collection(db,"task"));

//FUNCION QUE TRAER DATOS A TIEMPO REAL
export const OngetTasks = (callback) => onSnapshot(collection(db,"task"),(callback));

// FUNCION PARA ELIMINAR
export const deleteTask = (id) => deleteDoc(doc(db, "task", id));
        
//FUNCION PARA TRAER UN SOLO DATO
export const getTask = (id) => getDoc(doc(db, "task", id));

//FUNCION PARA ACTUALIZAR 
export const updateTask = (id, newFields) => updateDoc(doc(db, "task", id), newFields);