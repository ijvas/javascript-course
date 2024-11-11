//                                     Método .ready()
// El método ready, nos asegura que el DOM del usuario ya está listo para manipularse.


//ready con JS Vanilla
// window.addEventListener('DOMContentLoaded'
//     , function () {
//      console.log('El DOM esta listo');
//     });
    

//ready con jQuery
// $( document ).ready(function(){  console.log( "El DOM esta listo" ) });




//                          Forma corta de escribir el ready()

$(function() { console.log('Forma corta con function')})



//                              Forma corta del ready, con función flecha( arrow function )

$(() => console.log('Forma corta con funcion flecha'))
