newFunction("btn-acceder", login)

function login() {
  eventsLogin()
}

function eventsLogin() {
  let usu = document.querySelector("#txt-usuarioLogin").value;
  let usuario = usu.toLowerCase();
  let password = document.querySelector("#txt-passwordLogin").value;
  let encontrado = verificarExiste(usuario, password);

  if (encontrado != null ) {
    if ( encontrado = "persona"){
      console.log("mo")
    }else {
      console.log("si")
    }
    userLogin = encontrado;
    console.log("juse", userLogin)
    console.log("encin", encontrado )
    mostrarDisplayuser();
  } else {
    msj(idParrafo, "El usuario y/o la contraseña no son válidos")
  }
}


function mostrarDisplayuser() {
  if (userLogin != null) {
    classes(classContent, "content-hidden", "content")
    classes(classModalLogin, "open", "close")
    classNav.add("content-hidden")
    classes(classNavUsuario, "content-hidden", "content")
    textoUsuario.innerHTML = "Usuario: " + " " + userLogin.nombre;
  }
}
