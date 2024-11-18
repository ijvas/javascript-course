//                                             ANIMACIONES




//                     elemento.animación(opcional:velocidad, opcional:callback)





//                                            SHOW

$("body").prepend('<h3 style="display: none" >¡Hola Coder1!</h3>');
$("body").append('<button style="display: none" >BOTON</button>');

$("h3, button").show(1000);






//                                          HIDE

// $("h3").hide();





//                                           fadeIN
// $("h3").fadeIn();







//                                          fadeOut
// $("h3").fadeOut();





//                                     Velocidad del FADE 

// fadeIn('slow')   fadeIn('fast')      fadeIn(1000)





//                                      Callback del fade


// //Ocultamos con fadeOut() todos los <h3>
// $("h3").fadeOut("slow", function(){
//     //Cuando termina de ocultarse el elemento lo mostramos nuevamente
//     $("h3").fadeIn(1000);
//    }); 




// //                                      slideDown
// //Agregamos un botón y un div con jQuery
// $("body").prepend('<button id="btn1">Mostrar</button>');
// $("body").prepend(`<div id="div1" style="height: 120px">
//  <h3>¡Hola Coder!</h3>
//  <h4>Sorpresa 2</h4>
//  </div>`);
// //Usamos slideDown sobre div1 en respuesta al click del boton btn1
// $("#btn1").click(() => {
//  $("#div1").slideDown("fast");
// });





//                                          slideUp
//Agregamos un botón y un div con jQuery
$("body").prepend('<button id="btn1">Mostrar</button>');
$("body").prepend(`<div id="div1" style="height: 120px">
 <h3>¡Hola Coder!</h3>
 <h4>Sorpresa 2</h4>
 </div>`);
//Usamos slideUp sobre div1 en respuesta al click del boton btn1
$("#btn1").click(() => {
 $("#div1").slideUp("fast");
});





//                                          slideToggle()
//Agregamos un botón y un div con jQuery
$("body").prepend('<button id="btn1">Mostrar</button>');
$("body").prepend(`<div id="div1" style="height: 120px">
 <h3>¡Hola Coder!</h3>
 <h4>Sorpresa</h4>
 </div>`);
//Usamos toggle sobre div1 en respuesta al click del botòn btn1
$("#btn1").click(() => {
 $("#div1").toggle("fast");
});