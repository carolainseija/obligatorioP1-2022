Precargar()

function Precargar() {
    let persona1 = altaPersona("carolain", "caro", "contraseña")
    let persona2 = altaPersona("Marcos", "marcos02", "contraseña2")
    let persona3 = altaPersona("Romina", "romi", "romi12")
    let persona4 = altaPersona("Marcos", "marcos", "contraseña2")
    let persona5 = altaPersona("Maximiliano", "maxi", "Maxi22")
    let persona6 = altaPersona("Marcos", "marcos02", "Marcos1")
    let persona7 = altaPersona("rodri", "rodri", "Rodri12")

    let reserva1 = altaReserva("persona", "local", "3", "pendiente")
    let reserva2 = altaReserva("persona", "local", "2", "pendiente")
    let reserva3 = altaReserva("persona", "local", "1", "pendiente")

    let local1 = altaLocal("museo de la memoria", "museomemoria", "memoria452", "museo", " Av. de las Instrucciones 1057, 12900 Montevideo, Departamento de Montevideo", "40", "memoria.jpg", "true")
    let local2 = altaLocal("blanes", "blanes", "blanes123", "museo", "Av. Millán 4015, 11700 Montevideo, Departamento de Montevideo", "3", "blanes.jpg", "true")
    let local3 = altaLocal("solis", "museos", "solis", "teatro", "Buenos Aires s/n esquina Bartolomé Mitre. 1950 3323", "3", "solis.webp", "true")
    let local4 = altaLocal("galpon", "galpon", "teatrogal1", "teatro", " Av. 18 de Julio 1618, 11200 Montevideo, Departamento de Montevideo", "5", "galpon.jpg", "true")
    let local5  = altaLocal("Hard rock café", "hard", "hard22", "restaurante", "Rbla. Armenia 1624, 11300 Montevideo", "15", "hard.jpg","true" )
    let local6 = altaLocal("rumba bar", "rumba", "rumbabar122", "restaurante", "Dr. Héctor Miranda 2427, 11300 Montevideo, Departamento de Montevideo", "10", "rumba.jpg", "true")
    let local7 = altaLocal("Mc donals", "mcdonals", "cajitafeliz", "restaurante", "Bv. Gral. Artigas 1504 ·", "17", "mcdonals.webp", "true")
   
    let local8 = altaLocal("sofitel Athens airport", "sofitel", "sofi", "hotel", "Rambla Republica de Mexico s/n, Carrasco, 11500 Montevideo, Uruguay", "30", "sofitel.jpg", "true")
 
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
//estado tru del lñocal boton no disabled
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
  <div class="card-content">
  <div>
    <img class="imagen" src="../images/${locales.foto}" alt="imagen de local" >
  </div>
  <div class="card-textos">
  <div class="estrellas">Reservas</div>
    <h6>${locales.nombre}</h6>
    <p class="paragraph">${locales.direccion}</p>
    <select id="select">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    </select>
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
        for (res of arrayReservas) {
            if (res.estado != "pendiente") {
                button.disabled = true;
            }
        }
    }
}
verLocales()
