//esto es todo lo que podra hacer el local

function verMiLocal(){
    for (loc of arrayLocal){
        if (loc.id == userLogin.id){
        console.log("el local se encontro")
        }
    }
}

verMiLocal()


//cambiar cantidad de numeros maximo de reservas.