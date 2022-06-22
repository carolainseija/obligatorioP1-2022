

function guardarReserva() {
    let idLocal = this.getAttribute("data-local");

    let cantidad = document.querySelector("#select").value;
    console.log("cantidad", cantidad)
    if (select != null) {
        for (let locales of arrayLocal) {
            if (locales.id == idLocal) {
                console.log("cupo max", locales.cupomax)
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
            console.log(idLocal)
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
        if (reserva.persona.id == userLogin.id) {
            cadaReserva += `<div class="reservas"><p>${reserva.local.nombre}</p>
            <p>${reserva.estado}</p>
            <p>Lugares ${reserva.cupos}</p>
            <div id="botones-reservas">
            <button class="btn btn-confirmar" id="btn-${reserva.id}" data-reserva="${reserva.id}">confirmar</button>
            <button class="btn btn-cancelar" id="btn-${reserva.id}" data-reserva="${reserva.id}">Cancelar</button>
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
    }

    verLocales()
}


function confirmarReserva() {
    let idLocal = this.getAttribute("data-reserva");

    if (select != null) {
        for (let res of arrayReservas) {
            console.log(idLocal)
            if (res.id == idLocal) {
                res.estado = "confirmado"
            }
        }
    }
    mostrarEnReservas()
}