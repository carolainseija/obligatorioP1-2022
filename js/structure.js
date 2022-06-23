let arrayPersonas = [];
let arrayReservas = [];
let arrayLocal = [];
let arrayConfirmadas = [];

let reservasConfirmadas = document.querySelector("#reservasConfirmadas")
let classreservasConfirmadas = reservasConfirmadas.classList;

let classContent = document.querySelector("#contentUser").classList;
let classContentLocal = document.querySelector("#contentLocal").classList;
let classNavUsuario = document.querySelector("#nav-usuario").classList;
let textoUsuario = document.querySelector("#texto-usuario");
let classNav = document.querySelector("#nav-botones").classList;

let idParrafo = document.querySelector("#txt-errorLg");
let parrafoerror = document.querySelector("#error-reserva");

let idParrafoError = document.querySelector("#txt-errorRg");
let idParrafoCorrecto = document.querySelector(".txt-correcto");

let idDivReserva = document.querySelector("#list");
let idDivServicios = document.querySelector("#services");

let userLogin = null;

let ultimoIdLocal = 1;
class Local {
  constructor(nombre, usuario, contraseña, tipo, direccion, cupomax, foto, estado) {
    this.id = ultimoIdLocal;
    ultimoIdLocal++;
    this.nombre = nombre;
    this.usuario = usuario;
    this.contraseña = contraseña;
    this.tipo = tipo;
    this.direccion = direccion;
    this.cupomax = cupomax;
    this.foto = foto;
    this.estado = true;
  }
}


let ultimoIdPersona = 1;
class Persona {
  constructor(usuario, nombre, contraseña) {
    this.id = ultimoIdPersona;
    ultimoIdPersona++;
    this.nombre = nombre;
    this.usuario = usuario;
    this.contraseña = contraseña;
  }
}

let ultimaIdReservas = 1;
class Reserva {
  constructor(persona, local, cupos) {
    this.id = ultimaIdReservas;
    ultimaIdReservas++;
    this.persona = persona;
    this.local = local;
    this.cupos = cupos;
    this.estado = "pendiente";
  }
}