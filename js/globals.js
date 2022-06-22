function classes(vble, classe, classe2) {
    vble.remove(classe)
    vble.add(classe2)
}


function newFunction(id, name) {
    document.querySelector(`#${id}`).addEventListener("click", name)
}


function validar(texto, comparacion) {
    validacion = false;
    for (let i = 0; i < texto.length; i++) {
        if (texto.charAt(i) != comparacion && texto.length < 6) {
            validacion = false;
        }else {
            validacion = true;
        }
    }
    console.log(validacion)
    return validacion;
}

//no es necesario pasar el usuario.
function verificarExiste(name, password) {
    let userencontrado = null;
    for (let persona of arrayPersonas) {
        //si encuentro que Array persona tiene person.name
        if (persona.nombre == name && persona.contraseña == password) {
            console.log("per.nom", persona.nombre)
            console.log("name", name)
            //una pocicion del array es igual a esta que declaraste en el input
            userencontrado = persona;
        }
    }
    for (let local of arrayLocal) {
        //si encuentro que Array persona tiene person.name
        if (local.nombre == name && local.contraseña == password) {
            console.log("per.nom", local.nombre)
            //una pocicion del array es igual a esta que declaraste en el input
            userencontrado = local;
        }
    }
    return userencontrado;
}


function msj(id, msj) {
    id.innerHTML = `${msj}`
}
