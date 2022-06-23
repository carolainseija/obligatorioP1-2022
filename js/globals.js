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
        } else {
            validacion = true;
        }
    }
    return validacion;
}

function For(bus1, bus2 arrayIndex) {
    let busqueda = null;
    for (let index of arrayIndex) {
        if (index.`${bus1}` == bus1 && index.`${bus2}` == bus2) {
            return true;
        }
    }
    return busqueda;
}


function verificarExiste(iUsuario, icontraseña) {
    let userencontrado = null;
    for (let persona of arrayPersonas) {
        if (persona.nombre == iUsuario && persona.contraseña == icontraseña) {
            userencontrado = persona;
        }
    }
    for (let local of arrayLocal) {
        if (local.usuario == iUsuario && local.contraseña == icontraseña) {
            userencontrado = local;
        }
    }
    return userencontrado;
}

let userType = null;
function verificarType(name, password) {
    For(usuaio, contraseña, arrayPersonas)
    for (let local of arrayLocal) {
        if (local.nombre == name && local.contraseña == password) {
            userType = "local";
        }
    }
    return userType;
}


function msj(id, msj) {
    id.innerHTML = `${msj}`
}

function mostrarDisplayLocales() {
    let LocalLogueado = null;
    for (local of arrayLocal) {
        if (local.id == userLogin.id) {
            LocalLogueado = `
            <div>
            <h6>
            ${local.nombre}</h6>
            <p>Dirección: ${local.direccion}</p>
            <p>Tipo de local:${local.tipo}</p>
            <p>Cupos maximo personas: ${local.cupomax}</p>
            <button id="btn-cupos">cambiar cupos</button>
            <p>${local.estado} habilitado para reservar</p>
            <button id="btn-deshabilitar">deshabilitar</button>
            <p>Mi contraseña: *****</p>
            <div class="estrellass"></div>
            </div>`
        }
    }
    document.querySelector("#miLocal").innerHTML = LocalLogueado;
    newFunction("btn-deshabilitar", desabilitar)
    newFunction("btn-vcupos", ajusteCupos)
    return LocalLogueado
}

function desabilitar() {
    userLogin.estado = false;
    mostrarDisplayLocales()
}

function ajusteCupos() {
    userLogin.cupomax = "3";
    mostrarDisplayLocales()
}
