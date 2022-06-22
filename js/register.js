newFunction("btn-registrarme", register)

function register() {
    eventsRegister()
}

function eventsRegister() {
    let nombreRegistro = document.querySelector("#txt-nombreRg").value;
    let usuarioRegistro = document.querySelector("#txt-usuarioRg").value;
    let contraseñaRegistro = document.querySelector("#txt-contraseñaRg").value;
    let validacion = validar(contraseñaRegistro, "3")
    let encontrado = verificarExiste(nombreRegistro, contraseñaRegistro);
    if (encontrado != null) {
        msj(idParrafoError, "Ya estas registrado con este usuario.")
    } else if (validacion == true) {
        altaPersona(nombreRegistro, usuarioRegistro, contraseñaRegistro)
        msj(idParrafoCorrecto, "¡Registro exitoso! Ya puede inicar sesion")
    }else if (validacion != true){
        msj(idParrafoError, "Escriba una contraseña valida.")
    }
}

let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

