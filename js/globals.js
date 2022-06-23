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
    console.log(validacion)
    return validacion;
}

function verificarExiste(iUsuario, icontraseña) {
    let userencontrado = null;
    for (let persona of arrayPersonas) {
        //si encuentro que Array persona tiene person.name
        if (persona.nombre == iUsuario && persona.contraseña == icontraseña) {
            //una pocicion del array es igual a esta que declaraste en el input"
            userencontrado = persona;
        }
    }
    for (let local of arrayLocal) {
        //si encuentro que Array persona tiene person.name
        if (local.usuario == iUsuario && local.contraseña == icontraseña) {
            //una pocicion del array es igual a esta que declaraste en el input
            userencontrado = local;

        }
    }
    return userencontrado;
}

let userType = null;
function verificarType(name, password) {
    for (let persona of arrayPersonas) {
        //si encuentro que Array persona tiene person.name
        if (persona.nombre == name && persona.contraseña == password) {
            //una pocicion del array es igual a esta que declaraste en el input"
            userType = "persona";
        }
    }
    for (let local of arrayLocal) {
        //si encuentro que Array persona tiene person.name
        if (local.nombre == name && local.contraseña == password) {
            //una pocicion del array es igual a esta que declaraste en el input
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
            console.log(local)
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
    // newFunction("btn-cupos", ajustarCupos)
    return LocalLogueado
}


function desabilitar() {
    userLogin.estado = false;
    console.log(userLogin.estado)
    mostrarDisplayLocales()
}

function ajusteCupos() {
    userLogin.cupomax = "3";
    console.log(userLogin.cupomax)
    mostrarDisplayLocales()
}


function verPromedios(){
  let reservasPendientes = 0;
  let cantidad = null;
  for (let res of arrayReservas){
    if (res.local.id == userLogin.id){
        arrayReservas++
    }
console.log(reservasPendientes)
  }
}

verPromedios()