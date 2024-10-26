                                                                  FUNCIONES:

function solicitarNombre() {

    nombre = prompt('Ingrese su nombre: ');
    alert(`Su nombre es ${nombre}`);

}


solicitarNombre();
solicitarNombre();
solicitarNombre();



                                                      PARAMETROS

function sumar(parametro1, parametro2) {

    let suma = parametro1 + parametro2;
    console.log(suma);

}

sumar(5,3);
sumar(3,10);




                                                      RETURN


function promedioTrimestral(param1, param2, param3) {

    return (param1 + param2 + param3)/3

}

function promedioCuatrimestral(param1, param2, param3, param4) {

    return (param1 + param2 + param3 + param4)/4
}


let trimestre= promedioTrimestral(10, 4, 7)
let cuatrimestre = promedioCuatrimestral(4, 4, 4, 8)


console.log(trimestre)
console.log(cuatrimestre)







                                                        CALCULADORA

function calculadora(param1, param2, operacion) {
    switch(operacion){
        case('+'):
            return param1 + param2;
            break;
        case('-'):
            return param1 - param2;
            break
        case('*'):
            return param1 * param2;
            break;
        case('/'):
            return param1 / param2;
            break;
        default:
            return 0;
            break;
    }

}

let calculo = calculadora(10, 20, '*');

console.log(calculo)




//                                     SCOPES GLObaLES Y LOCALES

let nombre = 'Isma'

function mostrarWally(){

    let COMOVA = 'Wally'
    console.log(COMOVA)
    
}

function comova(){

    let COMOVA1 = 'Jesus'
    console.log(COMOVA1)

}

mostrarWally();
comova();






//                                    Funciones anónimas


const suma1 = function (a, b) {return a + b}

const resta1 = function (a, b) {return a - b}


console.log(suma1(15, 20));
console.log(resta1(15, 5));






//                                       FUNCIONES FLECHA


const suma2 = (a, b) => {return a + b}

//Si lo que realiza la función se hace en una sola línea podemos evitar el return y las llaves
const resta2 = (a, b) => a - b


//      Si la funcion tiene una sola línea, con UN solo parámetro podemos evitar escribir los ()
const iva1 = x => x * 0.21







//                                                 Ejemplo de compra con iva y descuento

const suma = (a, b) => a + b

const resta = (a, b) => a - b

const iva2 = x => x * 0.21

let precioProducto = 500
let precioDescuento = 50



let ivaPrecioProducto = iva2(precioProducto)

let precioMasIva = suma(precioProducto, ivaPrecioProducto)

let precioConDescuento = resta(precioMasIva, precioDescuento) 

console.log(precioConDescuento)









//                       Ejemplo de simulador "Changuito de compras"


alert('Que quiere ingresar a su carrito de compras? ')

let producto1 = prompt('Producto 1: ')
let precioProd1 = parseFloat(prompt('Precio: '))


let producto2 = prompt('Producto 2: ')
let precioProd2 = parseFloat(prompt('Precio: '))


let producto3 = prompt('Producto 3: ')
let precioProd3 = parseFloat(prompt('Precio: '))


let producto4 = prompt('Producto 4: ')
let precioProd4 = parseFloat(prompt('Precio: '))

alert(`Los productos del carrito son: ${producto1}, ${producto2}, ${producto3}, ${producto4} `)

const costo = (a, b, c, d) => {
    let total = a + b + c + d
    alert(`El costo total de los productos es: ${total}`)
}


costo(precioProd1, precioProd2, precioProd3, precioProd4)





