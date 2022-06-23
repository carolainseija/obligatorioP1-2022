Precargar()

function Precargar() {
    let p1 = altaPersona("carolain", "caro", "contraseña")
    let p2 = altaPersona("Marcos", "marcos02", "contraseña2")

    let r1 = altaReserva("persona", "local", "3", "pendiente")
    let r2 = altaReserva("persona", "local", "2", "pendiente")
    let r3 = altaReserva("persona", "local", "1", "pendiente")

    let l1 = altaLocal("museo america", "museodeamerica", "contraeñaamerica", "museo", "Av. Millán 4015, 11700 Montevideo, Departamento de Montevideo", "3", "blanes.jpg", "true")
    let a2 = altaLocal("rumbabar", "rumbabar", "rumbabar", "restaurante", "Dr. Héctor Miranda 2427, 11300 Montevideo, Departamento de Montevideo", "3", "rumba.jpg", "true")
    let a3 = altaLocal("sofitel Athens airport", "sofitel", "sofi", "restaurante", "Rambla Republica de Mexico s/n, Carrasco, 11500 Montevideo, Uruguay", "3", "sofitel.jpg", "true")
    let a4 = altaLocal("solis", "museos", "solis", "teatro", "Buenos Aires s/n esquina Bartolomé Mitre. 1950 3323", "3", "solis.webp", "true")
}

function altaPersona(nombre, usuario, contraseña) {
    let persona = null;
    if (nombre != " " & usuario != " " & contraseña != " ") {
        let personaNueva = new Persona(nombre, usuario, contraseña)
        persona = personaNueva;
        arrayPersonas.push(persona)
    }
    return persona;
}

function altaReserva(nombre, estado, cupos, promedio) {
    let reserva = null
    if (nombre != " " & estado != " " & cupos != " ", promedio != " ") {
        let nuevaReserva = new Reserva(nombre, estado, cupos, promedio)
        reserva = nuevaReserva;
        arrayReservas.push(reserva)
    }
    return reserva;
}

function altaLocal(nombre, usuario, contraseña, tipo, direccion, cupomax, foto, estado) {
    let local = " ";
    if (nombre != " " & usuario != " " & contraseña != " " & tipo != " " & direccion != " " && cupomax != " " && foto != " " && estado != " ") {
        let nuevoLocal = new Local(nombre, usuario, contraseña, tipo, direccion, cupomax, foto, estado)
        local = nuevoLocal;
        arrayLocal.push(local)
    }
    return local;
}

function verLocales() {
    let losLocales = "";
    for (let locales of arrayLocal) {
        losLocales += `
<div class="menu-item">                  
<div class="card">
  <a href="#" class="card-image-square w-inline-block"><img src="" alt="" class="card-image"></a>
  <div class="card-content">
    <a href="#" class="title-wrap w-inline-block">
      <h6>${locales.nombre}</h6>
      <div class="price">Reservas</div>
    </a>
    <p class="paragraph">${locales.direccion}</p>
    <select id="select">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    </select>
    <div class="add-to-cart">
    <p class="advertencia">solo quedan ${locales.cupomax} lugares!</p>
    <input type="button" class="btn-reservas" id="btn${locales.id}" data-local="${locales.id}" value="Reservar ahora">
    <p id="error-reserva"></p> 
</div>
</div>      
</div>
</div>`}
    document.querySelector("#services").innerHTML = losLocales;
    let losBotones = document.querySelectorAll(".btn-reservas");
    for (let button of losBotones) {
        button.addEventListener("click", guardarReserva)
        for (res of arrayReservas){
            if (res.estado != "pendiente"){
                button.disabled = true;
            }
        }
    }
}
verLocales()
