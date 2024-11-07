//                                         jQuery



// //              Selectores en Jquery

// //Seleccionamos por id:
// $('#jquery1')

// //Seleccionamos por class:
// $('.ulFooter')

// //Seleccionamos por tag:
// $('li')



// //              Combinación de selectores

// //selecciona todos los <li> de la página
// $('p')

// //selecciona todos los <a> de la pagina:
// $('a')

// //selecciona todos los <p> y los <a>:
// $('p , a')

// //selecciona un ul con clase ulFooter, que tenga un hijo <li>:
// $('ul.ulFooter li')









// //                               Selectores avanzados


// $( "p:last" ); //Selecciona el último <p> de la página

// $( "li:first-child" ); //Selecciona todos los <li> que son primeros hijos

// $( "li:last-child" ); //Selecciona todos los <li> que son últimos hijos

// $( "li:only-child" ); //Selecciona todos los <li> que sean hijos únicos

// $( "li:nth-child(3)" ); //Selecciona todos los <li> que sean el 3er elemento

// $( "tr:nth-child(odd)" ); //Selecciona todos los <tr> que sean impares

// $( "tr:nth-child(even)" ); //Selecciona todos los <tr> que sean pares

// $( "div:nth-child(3n)" ); //Selecciona cada tercer elemento <div>












// //                                      Selectores para formularios


// $( ":text" );

// $( ":checkbox" );

// $( ":radio" );

// $( ":image" );

// $( ":submit" );

// $( ":reset" );

// $( ":password" );

// $( ":file" );

// $( ":input" ); //Selecciona los elementos input, textarea,select y button

// $( ":button" ); //Selecciona los elementos button e input con atributo "type"="button"

// $( ":enabled" ); //Selecciona los elementos del formulario activados

// $( ":disabled" ); //Selecciona los elementos del formulario desactivados

// $( ":checked" ); //Selecciona los radio buttons y checkboxes que están pulsados

// $( ":selected" ); //Elementos de una lista de opciones que este seleccionados





//                                                  jQuery append()


let producto = {id: 1, nombre: 'Arroz', precio: 125}


$('#app').append(`<div>
    <h3>ID: ${producto.id}</h3>
                    <p> Producto: ${producto.nombre}</p>
                    <b> $${producto.precio}</b>
                    </div>`)
                    

                    
                    
                    
                    
                    
                    
//                                                  jQuery prepend()
                    
                    
let producto2 = {id: 2, nombre: 'Flan', precio: 150}

$('#app').prepend(`<div>
                    <h3>ID: ${producto2.id}</h3>
                    <p> Producto: ${producto2.nombre}</p>
                    <b> $${producto2.precio}</b>
                  </div>`)



                  

        
