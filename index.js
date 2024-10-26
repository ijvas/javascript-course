
//                                                                   FUNCIONES:

// function solicitarNombre() {

//     nombre = prompt('Ingrese su nombre: ');
//     alert(`Su nombre es ${nombre}`);

// }


// solicitarNombre();
// solicitarNombre();
// solicitarNombre();



//                                                       PARAMETROS

// function sumar(parametro1, parametro2) {

//     let suma = parametro1 + parametro2;
//     console.log(suma);

// }

// sumar(5,3);
// sumar(3,10);




//                                                       RETURN


// function promedioTrimestral(param1, param2, param3) {

//     return (param1 + param2 + param3)/3

// }

// function promedioCuatrimestral(param1, param2, param3, param4) {

//     return (param1 + param2 + param3 + param4)/4
// }


// let trimestre= promedioTrimestral(10, 4, 7)
// let cuatrimestre = promedioCuatrimestral(4, 4, 4, 8)


// console.log(trimestre)
// console.log(cuatrimestre)







//                                                         CALCULADORA

// function calculadora(param1, param2, operacion) {
//     switch(operacion){
//         case('+'):
//             return param1 + param2;
//             break;
//         case('-'):
//             return param1 - param2;
//             break
//         case('*'):
//             return param1 * param2;
//             break;
//         case('/'):
//             return param1 / param2;
//             break;
//         default:
//             return 0;
//             break;
//     }

// }

// let calculo = calculadora(10, 20, '*');

// console.log(calculo)




//                                      SCOPES GLObaLES Y LOCALES

// let nombre = 'Isma'

// function mostrarWally(){

//     let COMOVA = 'Wally'
//     console.log(COMOVA)
    
// }

// function comova(){

//     let COMOVA1 = 'Jesus'
//     console.log(COMOVA1)

// }

// mostrarWally();
// comova();






//                                     Funciones anónimas


// const suma = function (a, b) {return a + b}

// const resta = function (a, b) {return a - b}


// console.log(suma(15, 20));
// console.log(resta(15, 5));






//                                        FUNCIONES FLECHA


// const suma = (a, b) => {return a + b}

// //Si lo que realiza la función se hace en una sola línea podemos evitar el return y las llaves
// const resta = (a, b) => a - b


// Si la funcion tiene una sola línea, con UN solo parámetro podemos evitar escribir los ()
//const iva = x => x * 0.21







//                                                  Ejemplo de compra con iva y descuento

// const suma = (a, b) => a + b

// const resta = (a, b) => a - b

// const iva = x => x * 0.21

// let precioProducto = 500
// let precioDescuento = 50



// let ivaPrecioProducto = iva(precioProducto)

// let precioMasIva = suma(precioProducto, ivaPrecioProducto)

// let precioConDescuento = resta(precioMasIva, precioDescuento) 

// console.log(precioConDescuento)









//                        Ejemplo de simulador "Changuito de compras"


// alert('Que quiere ingresar a su carrito de compras? ')

// let producto1 = prompt('Producto 1: ')
// let precioProd1 = parseFloat(prompt('Precio: '))


// let producto2 = prompt('Producto 2: ')
// let precioProd2 = parseFloat(prompt('Precio: '))


// let producto3 = prompt('Producto 3: ')
// let precioProd3 = parseFloat(prompt('Precio: '))


// let producto4 = prompt('Producto 4: ')
// let precioProd4 = parseFloat(prompt('Precio: '))

// alert(`Los productos del carrito son: ${producto1}, ${producto2}, ${producto3}, ${producto4} `)

// const costo = (a, b, c, d) => {
//     let total = a + b + c + d
//     alert(`El costo total de los productos es: ${total}`)
// }


// costo(precioProd1, precioProd2, precioProd3, precioProd4)





//                                            Objetos



// function Persona(nombre, edad, sexo, direccion){

//     this.nombre = nombre;
//     this.edad = edad;
//     this.sexo = sexo;
//     this.direccion = direccion;

//     this.saludar = function() { console.log(`Hola, mi nombre es ${this.nombre}`) }

// }

// const persona1 = new Persona('Ismael', 35, 'Hombre', '9 de Julio 2987');
// const persona2 = new Persona('Wally', 37, 'Hombre', 'Neuquen 151');
// const persona3 = new Persona('Vero', 37, 'Mujer', 'Dean Funes 1953');








//                 IN  (Vemos si dentro del objeto existe o no una propiedad llamada de esa manera)
// console.log('nombre' in persona1)
// console.log('apellido' in persona1)





//                                FOR..IN ( RECORRER UN OBJETO, VER SUS PROPIEDADES...)

// for( prop in persona2) {

//     console.log(persona2[prop])

// }



// class Persona{
//     constructor(nombre, edad, direccion){

//         this.nombre = nombre;
//         this.edad = edad;
//         this.direccion = direccion;

//     }

//     saludar(){
//         console.log(`Hola, me llamo ${this.nombre}`)
//     }

// }


// const persona1 = new Persona('Isma', 35, '9 de Julio 2987')

// for ( prop in persona1) {
//     console.log(persona1[prop])
// }




class Producto {

    constructor(nombre, precio) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.vendido = false;
    }

    sumaIva() {
        this.precio = this.precio * 1.21;
    }

    vender() {
        this.vendido = true;
    }

}

const producto1 = new Producto('arroz', 125);
const producto2 = new Producto('fideos', 50);

producto1.sumaIva();
producto2.sumaIva();

producto1.vender();


for (e in producto1){
    console.log(` ${e}: ${producto1[e]} `)
}