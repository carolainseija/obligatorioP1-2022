function guardarReserva() {
    let idLocal = this.getAttribute("data-local");

    let cantidad = document.querySelector("#select").value;
    if (select != null) {
        for (let locales of arrayLocal) {
            if (locales.id == idLocal) {
                locales.cupomax = locales.cupomax - cantidad;
                misReservas.push(altaReserva(userLogin, locales, cantidad, "pendiente"))
            }
        }
    }
    mostrarEnReservas()
}


function cancelarReserva() {
    let idLocal = this.getAttribute("data-reserva");

    if (select != null) {
        for (let res of misReservas) {
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
    for (reserva of misReservas) {
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

    botonesConfirmar = document.querySelectorAll(".btn-cancelar");
    for (boton of botonesConfirmar) {
        boton.addEventListener("click", cancelarReserva)
    }
    verLocales()
}


function confirmarReserva() {
    let idLocal = this.getAttribute("data-reserva");

    if (select != null) {
        for (let res of misReservas) {
            console.log(idLocal)
            if (res.id == idLocal) {
                res.estado = "confirmado"
            }
        }
    }
    mostrarEnReservas()
}