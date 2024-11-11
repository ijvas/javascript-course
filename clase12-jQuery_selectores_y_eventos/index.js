//                                     Método .ready()
// El método ready, nos asegura que el DOM del usuario ya está listo para manipularse.



//ready con JS Vanilla
// window.addEventListener('DOMContentLoaded'
//     , function () {
//      console.log('El DOM esta listo');
//     });



//ready con jQuery
// $( document ).ready(function(){  console.log( "El DOM esta listo" ) });



//ready con JS VANILLA pero con el evento LOAD ('ESTE ESPERA A QUE TODAS LAS IMAGENES Y RECURSOS EXTERNOS ESTEN CORRECTAMENTE CARGADOS ANTES DE EJECUTARSE)
// window.addEventListener ('load', function() {
//     console.log( 'Todos los elementos de la ventana están cargados ' );
//    });
   



//                          Forma corta de escribir el ready()

$(function() { console.log('Forma corta con function')})



//                          Forma corta del ready, con función flecha( arrow function )

$(() => console.log('Forma corta con funcion flecha'))








