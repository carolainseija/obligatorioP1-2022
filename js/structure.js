let arrayPersonas = [];
let arrayReservas = [];
let arrayLocal = [];

let classContent = document.querySelector("#contentUser").classList;
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
//hago una tabla con los locales
//genero el boton dinamicamente que quede con el id asociado

let ultimoIdLocal = 1;
class Local {
  constructor(nombre, usuario, contraseña, tipo, direccion,cupomax, foto, estado) {
    //el id no lo muestro ene l constructor porque no viene de afuera, ya se genera automaticamente.
    this.id = ultimoIdLocal;
    ultimoIdLocal++;
    this.nombre = nombre;
    this.usuario = usuario;
    this.contraseña = contraseña;
    this.tipo = tipo;
    this.direccion = direccion;
    this.cupomax = cupomax ;  
    this.foto = foto;
    this.estado = true; //habilitado o desabilotado, pero siempre por ahora lo vamos a habiltar
}
}


let ultimoIdPersona = 1;
//en el constructor solo va lo que llega de afuera, por ejemplo id no tieen porque se van a generar automaticamente,
class Persona {
  constructor(usuario, nombre, contraseña) {
    this.id = ultimoIdPersona;
    ultimoIdPersona++;
    this.nombre = nombre;
    this.usuario = usuario;
    this.contraseña = contraseña;
  }
}

//las reservas son en base al local
//con los ids puedo recorrer el array y encontrar os demas datos.

let ultimaIdReservas = 1;
//las reservas pueden tener pendientes , finalizadas, canceladas
class Reserva {
  //ID RESERVAS, PERSONA, LOCAL   
  constructor(persona, local, cupos) {
    this.id = ultimaIdReservas;
    ultimaIdReservas++;
    // this.idlocal = idlocal;
    // this.idpersona = idpersona
    this.persona = persona;
    this.local = local;
    this.cupos = cupos; // cuantos quiero reservar
    this.estado = "pendiente"; 
  
  }
}