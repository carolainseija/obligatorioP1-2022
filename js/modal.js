let classModalLogin = document.querySelector("#modal").classList;
let classModalRegister = document.querySelector("#modal-signIn").classList;

newFunction("btn-login", openModal)

function openModal() {
  classes(classModalLogin, "close", "open")
  classModalRegister.remove("open")
}

newFunction("btn-signIn", openModalSign)

function openModalSign() {
  classes(classModalRegister, "close", "open")
  classModalLogin.remove("open")
}

newFunction("cruce", changeStateModal)
newFunction("cruce2", changeStateModal)

function changeStateModal() {
  classModalLogin.add("close")
  classModalRegister.add("close")
}

