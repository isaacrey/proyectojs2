import { getUsers, postUsers } from "../llamadossoli.js"

const user_id = document.getElementById("user_id")
const sede = document.getElementById("sede")
const fecha_salida = document.getElementById("fecha_salida")
const fecha_regreso = document.getElementById("fecha_regreso")
const codigo_computadora = document.getElementById("codigo_computadora")
const envio = document.getElementById("envio")


envio.addEventListener("click", function () {

    console.log(user_id.value, sede.value, fecha_salida.value, fecha_regreso.value, codigo_computadora.value,)
    postUsers(user_id.value, sede.value, fecha_salida.value, fecha_regreso.value, codigo_computadora.value,)

});


