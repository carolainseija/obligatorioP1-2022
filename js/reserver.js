

function guardarReserva() {
    let idLocal = this.getAttribute("data-local");

    let cantidad = document.querySelector("#select").value;
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
        console.log("reeserva", reserva)
        if (reserva.persona.id == userLogin.id && reserva.estado == "pendiente") {
            cadaReserva += 

                `
<div class="menu-item">                  
<div class="card">
<div class="card-content">
<div>
<img class="imagen-reservas" src="../images/${reserva.local.foto}" alt="imagen de local" >
</div>
<div class="card-textos">
<div class="estrellas">Reservas</div>
    <h6>${reserva.local.nombre}</h6>               
    <p class="paragraph">${reserva.local.direccion}</p>
    /*esto va aparecer solo si se confirmo*/
 <select id="selectCalificador">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
 </select>
 <button id="btn-calificar">Calificar</button>
                <button class="btn btn-confirmar" id="btn-${reserva.id}" data-reserva="${reserva.id}">confirmar</button>
                <button class="btn btn-cancelar" id="btn-${reserva.id}" data-reserva="${reserva.id}">Cancelar</button>
    <p id="error-reserva"></p> 
</div>
</div>      
</div>
</div>`





            //ver esto porque ya esta debajo
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
        for (btnCali of botonesCalificar) {
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
            }
        }
    }
    mostrarEnReservas()
}



// function para el raiting