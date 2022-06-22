
function classes(vble, classe, classe2) {
    vble.remove(classe)
    vble.add(classe2)
}


function newFunction(id, name) {
    document.querySelector(`#${id}`).addEventListener("click", name)
}




function validar(texto, comparacion) {
    validacion = false;
    for (let i = 0; i < texto.length; i++) {
        console.log("leng", texto.length)
        if (texto.charAt(i) != comparacion && texto.length < 6) {
            validacion = false;
        }else {
            validacion = true;
        }
    }
    console.log(validacion)
    return validacion;
}

//no es necesario pasar el usuario.
function verificarExiste(name, password) {
    let userencontrado = null;
    for (let persona of arrayPersonas) {
        //si encuentro que Array persona tiene person.name
        if (persona.nombre == name && persona.contraseña == password) {
            console.log("per.nom", persona.nombre)
            console.log("name", name)
            //una pocicion del array es igual a esta que declaraste en el input
            userencontrado = persona;
        }
    }
    for (let local of arrayLocal) {
        //si encuentro que Array persona tiene person.name
        if (local.nombre == name && local.contraseña == password) {
            //una pocicion del array es igual a esta que declaraste en el input
            userencontrado = local;
        }
    }
    return userencontrado;
}


function msj(id, msj) {
    id.innerHTML = `${msj}`
}


// function For(array, id, option) {
//     let string = "";
//     for (index of array) {
//         if (option == 1) {
//             string += `<div><h6>${index.nombre}</h6>
//             <p>opcion 2</p>
//             <button clas="btn-confirm" id="btn-${index.id} data-local="${index.id}">confirmar</button>
//             </div>`
//             let allbtn2 = document.querySelectorAll(".btn-confirm");
//             for (let button of allbtn2) {
//                 button.addEventListener("click", cancelReser)
//             }
//         } else if (option == 2) {
//             string += `<div role="listitem" class="menu-item">                  
//         <div class="card">
//           <a href="#" class="card-image-square w-inline-block"><img src="" alt="" class="card-image"></a>
//           <div class="card-content">
//             <a href="#" class="title-wrap w-inline-block">
//               <h6>${index.nombre}</h6>
//               <div class="price">90$</div>
//             </a>
//             <p class="paragraph">${index.direccion}</p>
//             <button class="btn-reserve" id="btn${index.id}" data-local="${index.id}">Reservar</button>
//             <div class="add-to-cart">
//             <p class="red" >solo quedan ${index.cupomax} lugares!</p>
//         </div>
//         </div>      
//         </div>
//         </div>  `
//         }
//         let allbtn = document.querySelectorAll(".button.reserve");
//          //querySelectorAll para que me traiga de todas sino no es iterable me dice
//          for (let button of allbtn) {
//             button.addEventListener("click", guardarReserva)
//         }
//     }

//     return id.innerHTML = string;
// }


