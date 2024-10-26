//                                          localStorage


// almacenar información
// localStorage.setItem('bienvenida', '¡Hola Guacho!');
// localStorage.setItem('seleccionados', [1,2,3]);
// localStorage.setItem('esValido', false);
// localStorage.setItem('holaQuehace', 'hola')
// localStorage.setItem('UoO', 'es magike')

// //acceder a información
// let mensaje = localStorage.getItem('bienvenida')

// alert(mensaje)






//                                            sessionStorage


// // almacenar información
// sessionStorage.setItem('seleccionados', [1,2,3]);
// sessionStorage.setItem('esValido', false);
// sessionStorage.setItem('email', 'info@mail.com');



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

// localStorage.removeItem('UoO')
// localStorage.removeItem('holaQuehace')

// sessionStorage.clear()






//                                          Ejemplo aplicado: Almacenar tabla de multiplicar



// const multiplicar = (a, b) => a * b
// const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) }

// alert('Vamos a crear la tabla de un numero')
// let ingresarNumero = parseInt(prompt('Ud quiere ver la tabla del: '))


// for(i = 0; i <= 100; i++){
//     guardarLocal(i , multiplicar(ingresarNumero, i) )
// }












//                                       JSON.stringify()

// const objeto1 = {id: 2, producto: 'Arroz'};

// const objetoPasadoAJson = JSON.stringify(objeto1)

// localStorage.setItem('producto1', objetoPasadoAJson )





// //                                        JSON.parse()

// // const objetoParseado = JSON.parse(objetoPasadoAJson)


// const producto2 = JSON.parse( localStorage.getItem('producto1') )

// console.log(producto2.id)
// console.log(producto2['producto'])









//                                      Ejemplo aplicado: Almacenar array de objetos


// const productos = [ 
//     {id: 1, producto: 'Arroz', precio: 125},
//     {id: 2, producto: 'Fideo', precio: 70},
//     {id: 3, producto: 'Pan', precio: 50},
//     {id: 4, producto: 'Flan', precio: 100}
// ]


// const guardarLocal = (clave, valor) => {localStorage.setItem(clave, valor)}


//Almacenar producto por producto
// for (producto of productos){
//     guardarLocal(producto.id, JSON.stringify(producto))
// }


//Almacena el array completo
// guardarLocal('listaProductos', JSON.stringify(productos))








//                                 Ejemplo aplicado: Obtener array almacenado


class Producto{
    constructor(obj){
        this.nombre = obj.producto.toUpperCase()
        this.precio = parseFloat(obj.precio)
    }

    sumaIva(){
        this.precio = this.precio * 1.21
    }
}


const productos = [ 
    {id: 1, producto: 'Arroz', precio: 125},
    {id: 2, producto: 'Fideo', precio: 70},
    {id: 3, producto: 'Pan', precio: 50},
    {id: 4, producto: 'Flan', precio: 100}
]


const guardarLocal = (clave, valor) => {localStorage.setItem(clave, valor)}

guardarLocal('listaProductos', JSON.stringify(productos))



const arrayAlmacenado = JSON.parse(localStorage.getItem('listaProductos'))

const productosTraidos = []

for (const objeto of arrayAlmacenado){
    productosTraidos.push(new Producto(objeto))
}

// Al pushear objetos con new Producto, vamos a poder traer los objetos y agregarle métodos al traerlos.
for (const obj of productosTraidos){
    obj.sumaIva()
}

// Con esto le sumamos el Iva a un solo objeto del arrayFinal, usando su posición en el array:
// arrayFinal[1].sumarIva()


// Con esto le sumamos el Iva a todos los objetos del Array final:
// for(const x of arrayFinal){
//     x.sumarIva()
// }




