//                                          localStorage


// almacenar información
localStorage.setItem('bienvenida', '¡Hola Guacho!');
localStorage.setItem('seleccionados', [1,2,3]);
localStorage.setItem('esValido', false);
localStorage.setItem('holaQuehace', 'hola')
localStorage.setItem('UoO', 'es magike')

// //acceder a información
// let mensaje = localStorage.getItem('bienvenida')

// alert(mensaje)






//                                            sessionStorage


// // almacenar información
sessionStorage.setItem('seleccionados', [1,2,3]);
sessionStorage.setItem('esValido', false);
sessionStorage.setItem('email', 'info@mail.com');



// //acceder a información
// let lista = sessionStorage.getItem('seleccionados').split(',');
// let bandera = (sessionStorage.getItem('esValido') == 'true');
// let email = sessionStorage.getItem('email')

// console.log(typeof lista)




//                                                 Recorrer el local o session Storage

// for (let i = 0; i < localStorage.length; i++){
//     let variable = localStorage.key(i)
//     console.log('Clave: ' + variable)
// }





//                                          Borrar información de los Storage

localStorage.removeItem('UoO')
localStorage.removeItem('holaQuehace')

sessionStorage.clear()