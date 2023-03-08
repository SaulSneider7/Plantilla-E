import { onAuthStateChanged  } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
import { auth, OngetTasks } from "./app/firebase.js";
import { loginCheck } from "./app/loginCheck.js";


import "./app/signinForm";
import "./app/signupForm";
import "./app/logout.js";
import "./app/postList.js";


import {
    saveTask, 
    getTask, 
    deleteTask,
    getTasks, 
    updateTask
} from "./app/firebase.js";

let editSatus = false;
let id = "";

onAuthStateChanged(auth, async (user)=>{
    if(user){
        loginCheck(user);
        const correo = user.email;

        try {
            const  taskform = document.getElementById("task-form");
            taskform.addEventListener("submit",(e) => {
                e.preventDefault(); //evita que recargue la pag
                const title = taskform["task-title"];
                const description = taskform["task-description"];
            })

            if(editSatus){
                updateTask(id,{
                    title: title.value,
                    description: description.value,
                    userMail: user.email,
                });
                editSatus=false;
                id = "";
                taskForm["btn-task-form"].innerHtml = "Save";
            } else{
                saveTask(title.value, description.value, user.email);
            }
            taskform.reset();
        } catch (error) {
            console.log(error);
        }
        console.log(correo);
    }
})