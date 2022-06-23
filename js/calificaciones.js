let estrellas = document.querySelector("#estrellas");
let numeros = [];

function sumarCalificacion(personas) {
    let suma = 0;
    let calificacionDecimal = 0;
    calificacion = 0;
    for (let i = 0; i < personas.length; i++) {
        suma += personas[i];
    }
    calificacionDecimal = suma / personas.length;
    calificacion = Math.round(calificacionDecimal)
    return calificacion
}

function mostrarCalificacion(calificacion) {
    let personasCalificaron = numeros.length;
    let valorIdeal = 5 * personasCalificaron;
    let valorMedio = 5 * personasCalificaron / 2;
    let valorChico = 5 * personasCalificaron / 3
    if (calificacion >= valorIdeal) {
        estrellas.innerHTML = `<div><img src="../images/estrella.svg" alt="estrellas"><img src="../images/estrella.svg" alt="estrellas"><img src="../images/estrella.svg" alt="estrellas"></div>`
    } else if (calificacion > valorMedio && calificacion < valorIdeal) {
        estrellas.innerHTML = `<div><img src="../images/estrella.svg" alt="estrellas"><img src="../images/estrella.svg" alt="estrellas"></div>`
    } else if (calificacion <= valorChico) {

        estrellas.innerHTML = `<div><img src="../images/estrella.svg" alt="estrellas"></div>`
    }
}


function calificando() {
    let valorUsuario = document.querySelector("#selectCalificador").value;
    numeros.push(valorUsuario)
    let califica = sumarCalificacion(numeros)
    mostrarCalificacion(califica)
}



