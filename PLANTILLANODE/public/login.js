import { getUsers } from "./llamadosuser.js";

const email = document.getElementById("email");
const password = document.getElementById("password");
const iniciar = document.getElementById("iniciar");


iniciar.addEventListener("click", async function () {

    const usuariosRegistrados = await getUsers()
    
    for (let index = 0; index < usuariosRegistrados.length; index++) {

        if (email.value === usuariosRegistrados[index].email && password.value === usuariosRegistrados[index].pass) {
           
            if (usuariosRegistrados[index].tipoUsuario==="Profesor") {
                window.location.href="adminpage.html"
                
            }else{
                window.location.href="student.html"
        }

    }

    };

});