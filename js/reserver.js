mostrarEnReservas()
function guardarReserva() {
    let idLocal = this.getAttribute("data-local");
    let cantidad = document.querySelector("#select").value;
    if (select != null) {
        for (let locales of arrayLocal) {
            if (locales.id == idLocal) {
                locales.cupomax = locales.cupomax - cantidad;
                altaReserva(userLogin, locales, cantidad, "pendiente");
            }
        }
    }
    mostrarEnReservas()
}


function cancelarReserva() {
    let idLocal = this.getAttribute("data-reserva");

    if (select != null) {
        for (let res of arrayReservas) {
            if (res.id == idLocal) {
                res.estado = "cancelado"
            }
        }
    }
    mostrarEnReservas()
}

function mostrarEnReservas() {
    let cadaReserva = "";
    for (reserva of arrayReservas) {
        if (reserva.persona.id == userLogin.id && reserva.estado == "pendiente") {
            cadaReserva += `
            <div class="menu-item">                  
            <div class="card">
            <div class="card-content">
            <div>
            <img class="imagen-reservas" src="../images/${reserva.local.foto}" alt="imagen de local" >
            </div>
            <div class="card-textos">
                <h6>${reserva.local.nombre}</h6>               
                <p class="paragraph">${reserva.local.direccion}</p>
                <p>${reserva.estado}</p>
                <button class="btn btn-confirmar" id="btn-${reserva.id}" data-reserva="${reserva.id}">confirmar</button>
                <button class="btn btn-cancelar" id="btn-${reserva.id}" data-reserva="${reserva.id}">Cancelar</button>
                <p id="error-reserva"></p> 
                <div id="estrellas-er"></div>
            </div>
            </div>      
            </div>
            </div>`
            let botoneslim = document.querySelector("#botones-reservas")
            if (reserva.estado == "Cancelada") {
                botoneslim.innerHTML = `<p>kjfsd</p>`
            }
        }
        idDivReserva.innerHTML = cadaReserva;
        botonesConfirmar = document.querySelectorAll(".btn-confirmar");
        for (boton of botonesConfirmar) {
            boton.addEventListener("click", confirmarReserva)
        }

        botonesCancelar = document.querySelectorAll(".btn-cancelar");
        for (boton of botonesCancelar) {
            boton.addEventListener("click", cancelarReserva)
        }

        botonesCalificar = document.querySelectorAll("#btn-calificar");
        for (let btnCali of botonesCalificar) {
            btnCali.addEventListener("click", calificando)
        }
    }
    verLocales()
}

function confirmarReserva() {
    let idLocal = this.getAttribute("data-reserva");
    if (select != null) {
        for (let res of arrayReservas) {
            if (res.id == idLocal) {
                res.estado = "confirmado"
                arrayConfirmadas.push(res)
            }
        }
    }
    mostrarEnReservas()
    mostrarConfirmadas()
}


function mostrarConfirmadas() {
    classes(classreservasConfirmadas, "content-hidden", "content")
    let cadaReservaConfirmada = "";
    for (let reserva of arrayConfirmadas) {
        cadaReservaConfirmada +=
            `
 <div class="card">                  
         <h6>${reserva.local.nombre}</h6>               
    <p class="paragraph">${reserva.local.direccion}</p>
         <p>${reserva.estado}</p>
         <select id="selectCalificador">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
         </select>
         <button class="btn"  id="btn-calificar">Calificar</button>
 </div>`
        botonesCalificar = document.querySelectorAll("#btn-calificar");
        for (let btnCali of botonesCalificar) {
            btnCali.addEventListener("click", calificando)
        }
        reservasConfirmadas.innerHTML = cadaReservaConfirmada;
    }
}