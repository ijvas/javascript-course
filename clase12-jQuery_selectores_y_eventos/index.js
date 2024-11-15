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

// $(function() { console.log('Forma corta con function')})



// //                          Forma corta del ready, con función flecha( arrow function )

// $(() => console.log('Forma corta con funcion flecha'))





//                              Metodo ON


// $('body').prepend(` <button id="btnjQuery">CLICK!</button>`).on('click', function() {console.log('Respuesta a un click!')})



// $('#btnjQuery').on('dblclick', ()=>{console.log('Respuesta al doble click!')})





// //                           Ejemplo aplicado: Asociar evento a botón creado



// const productos = [
//     {id:1, nombre: 'Arroz', precio: 125},
//     {id:2, nombre: 'Fideo', precio: 70},
//     {id:3, nombre: 'Pan', precio: 50},
//     {id:4, nombre: 'Flan', precio: 100}
// ]

// for (const producto of productos){
//     $('#app').append(`  <div>
//                            <h4>Nombre: ${producto.nombre}</h4>
//                            <b>$${producto.precio}</b>
//                            <br>
//                            <button id="btn${producto.id}">Comprar</button>
//                         </div>
//                         <br>`)

//     $(`#btn${producto.id}`).on('click', ()=> {console.log(` Compraste ${producto.nombre}`)} )
// }





// //                                              SHORTCUTS



// //                     CLICK()


// //Agregamos dos botones con jQuery
// $("body").prepend('<button id="btn1">BUTTON</button>');
// $("body").prepend('<button id="btn2">BUTTON</button>');
// //Asociamos el evento click para btn1
// $("#btn1").click(function () {
//  console.log(this);
// });
// //Evento click para btn2 con Arrow function y parámetro e
// $("#btn2").click((e) => {
//  console.log(e.target);
// });





//                     CHANGE()       



$("body").prepend(`<input type="text" class="inputsClass">
    <input type="number" class="inputsClass">
    <select class="inputsClass">
    <option value="1" selected >Opcion 1</option>
    <option value="2">Opcion 2</option>
    <option value="3">Opcion 3</option>
    </select>`);
   //Asociamos el evento change a todos los inputs
   $(".inputsClass").change(function (e) {
    console.log(this.value);
   });






//                      SUBMIT()

//Agregamos un formulario con jQuery
$("body").prepend(`<form id="myForm">
 <input type="text" >
 <input type="number">
 <input type="submit">
 </form>`);
//Asociamos el evento submit al formulario
$("#myForm").submit(function (e) {
 //Prevenimos el comportamiento de submit
 e.preventDefault();
 //Obtenemos hijos del formulario
 let hijos = $(e.target).children();
 //Primer input type="text"
 console.log(hijos[0].value);
 //Primer input type="number"
 console.log(hijos[1].value);
});