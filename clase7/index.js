//                                          localStorage


// almacenar información
// localStorage.setItem('bienvenida', '¡Hola Guacho!');


// //acceder a información
// let mensaje = localStorage.getItem('bienvenida')

// alert(mensaje)






//                                            sessionStorage


// almacenar información
sessionStorage.setItem('seleccionados', [1,2,3]);
sessionStorage.setItem('esValido', false);
sessionStorage.setItem('email', 'info@mail.com');



//acceder a información
let lista = sessionStorage.getItem('seleccionados').split(',');
let bandera = (sessionStorage.getItem('esValido') == 'true');
let email = sessionStorage.getItem('email')

console.log(typeof lista)