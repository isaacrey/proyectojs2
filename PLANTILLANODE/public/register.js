import { postUsers } from "./llamadosuser.js"

const username = document.getElementById("username")
const pass = document.getElementById("pass")
const email = document.getElementById("email")
const register = document.getElementById("register")

register.addEventListener("click",function () {

    postUsers(username.value,pass.value,email.value)

})