//  //esto es todo lo que podra hacer el local

//  function verMiLocal(){
//      for (loc of arrayLocal){
//          if (loc.id == userLogin.id){
//          console.log("el local se encontro")
//          }
//      }
//  }

// verMiLocal()


// //cambiar cantidad de numeros maximo de reservas.


function mostrarLocales() {
    let losLocales = null;
    for (local of arrayLocal) {
        losLocales += `
        <div>
        <h1>
        ${local.nombre}</h1>
        <div id="estrellas"></div>
        </div>`
    }
    document.querySelector("#mislocales").innerHTML = losLocales;
}

mostrarLocales()