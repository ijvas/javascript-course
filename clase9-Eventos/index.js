//                                              Eventos

// elementoCapturado.evento = function






//                                          Forma de crear un evento número 1

// let respuestaClick = () => alert('Me clickeaste')

// let boton = document.getElementById('btnFooter')
// boton.addEventListener('click', respuestaClick)


//                                            Forma de crear un evento número 2
// let boton2 = document.getElementById('btnFooter2')
// boton2.onclick = () => {alert('Presionaste el boton 2')}







//                                              Eventos del mouse

// let respuestaClick = () => alert('Me clickeaste')

// let boton = document.getElementById('btnPracticaMouse')

// boton.onclick = respuestaClick
// boton.onmousemove = () => {alert('Pasaste moviendo el mouse sobre el boton')}







//                                               Eventos de Teclado

// let inputNombre = document.getElementById('nombrePracticaTeclado')
// let inputEdad = document.getElementById('edadPracticaTeclado')

// inputNombre.onkeyup = () => console.log('soltaste la tecla')
// inputEdad.onkeydown = () => alert('Apretaste una tecla')





//                                                 Evento CHANGE

// let inputNombreChange = document.getElementById('nombrePracticaChange')
// let inputEdadChange = document.getElementById('edadPracticaChange')


// inputNombreChange.onchange = () => console.log('valor 1')
// inputEdadChange.onchange = () => {
//     let array = ['Hola', 'CHAU']
//     for (const prod of array){
//         console.log(prod)
//     }
//     console.log(inputEdadChange.value)
// }





//                                              Evento Submit
// Js de la página contacto.html
let validarFormulario = (event) => {
    event.preventDefault()
    let formulario = event.target
    console.log(formulario.children[0].value)
    console.log(formulario.children[1].value)
}


let miformulario = document.getElementById('formulario')
miformulario.addEventListener('submit', validarFormulario)





    