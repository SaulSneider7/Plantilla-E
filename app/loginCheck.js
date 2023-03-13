const loggedOutLinks = document.querySelectorAll(".logged-out");
const loggedInLinks = document.querySelectorAll(".logged-in");

// crear variable
const loggedInputs = document.querySelectorAll(".card");

export const loginCheck = (user) => {
    if (user) {
        loggedInLinks.forEach((link) => (link.style.display = "block"));
        loggedOutLinks.forEach((link) => (link.style.display = "none"));
        // Agregar
        loggedInputs.forEach((div) => (div.style.display = "block"));
    } else {
        loggedInLinks.forEach((link) => (link.style.display = "none"));
        loggedOutLinks.forEach((link) => (link.style.display = "block"));
         // Agregar
         loggedInputs.forEach((div) => (div.style.display = "none"));
    }
};
