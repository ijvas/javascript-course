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


//Ocultamos con fadeOut() todos los <h3>
$("h3").fadeOut("slow", function(){
    //Cuando termina de ocultarse el elemento lo mostramos nuevamente
    $("h3").fadeIn(1000);
   }); 