newFunction("btn-acceder", login)

function login() {
  eventsLogin()
}
let tipo = null;
function eventsLogin() {
  let usu = document.querySelector("#txt-usuarioLogin").value;
  let usuario = usu.toLowerCase();
  let password = document.querySelector("#txt-passwordLogin").value;
  let encontrado = verificarExiste(usuario, password);
  tipo = verificarType(usuario, password);
  if (encontrado != null) {
    userLogin = encontrado;
    if (tipo == "persona") {
      displayusuario()
    } else if (tipo == "local") {
      displaylocal()
    }

  } else {
    msj(idParrafo, "El usuario y/o la contraseña no son válidos")
  }
}


function displaylocal() {
  classes(classContent, "content-hidden", "content")
  classes(classModalLogin, "open", "close")
  classNav.add("content-hidden")
  classes(classNavUsuario, "content-hidden", "content")
  textoUsuario.innerHTML = "Usuario: " + " " + userLogin.nombre;
  mostrarDisplayLocales(userLogin)
}
function displayusuario() {
  classes(classModalLogin, "open", "close")
  classNav.add("content-hidden")
  classes(classNavUsuario, "content-hidden", "content")
  classes(classContentLocal, "content-hidden", "content")
  mostrarEnReservas()
  textoUsuario.innerHTML = "Usuario: " + " " + userLogin.nombre;
}

