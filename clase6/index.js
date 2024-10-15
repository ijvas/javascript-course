//                                  Clase 6: Arrays




// const seriesDelFinde = ['Prison Break', 'Los anillos de poder', 'Ted Lasso'];
// const pelisDelFinde = ['El Hoyo 2', 'Locomia', 'Spiderman']

//                                                                   Acceder a elementos del Array

// let serieIsma = seriesDelFinde[0]
// let serieHugo = seriesDelFinde[1]
// let serieWally = seriesDelFinde[2]

// console.log(serieWally)



//                                                                      Recorrer el array:

// for (i=0; i < seriesDelFinde.length; i++){

//     console.log(seriesDelFinde[i])

// }





//     Métodos y propiedades más comunes: .length  .toString()  .push()   .join()    .concat()    .slice()

// console.log(seriesDelFinde.length)
// console.log(seriesDelFinde.toString())
// seriesDelFinde.push('Agatha')
// console.log(seriesDelFinde)
// console.log(seriesDelFinde.join('+'))

// let finde = seriesDelFinde.concat(pelisDelFinde);
// console.log(finde.length)
// console.log(finde.slice(0,10))



//                                   Ejemplo aplicado: Crear array con entradas de usuario
// const listaNombres = []
// let contador = 5

// do{

//     let entrada = prompt('Ingrese un nombre: ')
//     listaNombres.push(entrada.toUpperCase())
    
// }while(listaNombres.length != contador)
    
// console.log(listaNombres)
// const listaNueva = listaNombres.concat(['ANA', 'EMA'])

// alert(listaNueva.join('\n'))


//                                             Tipos de datos

// const tiposDeDatos = ['String', 'Number', 'Boolean', 'Function', 'Object', 'Array']

// let miFunction = (a, b) => {a+b}
// let forma = '            redonda    '
// let tamano = 1

// console.log( typeof miFunction)
// console.log( typeof forma)
// console.log( typeof tamano)

// console.log(forma)

// // El método trim quita los espacios al principio y al final de una cadena.
// if (typeof forma == 'string'){
//     forma = forma.trim()
// }

// console.log(forma)




//                                                Array de Objetos:

// const objeto1 = {
//     id: 1,
//     producto: 'Arroz'
// }

// const arrayDeObjetos = [objeto1, {id: 2, producto: 'Fideo'}]

// arrayDeObjetos.push({id:3, producto: 'Pan'})







//                                               Recorrer un array con For...of

// for (const obj of arrayDeObjetos){
//     console.log(obj.id)
//     console.log(obj.producto)
// }








//                                          Ejemplo aplicado: Objetos, producto y array

class Producto{

    constructor(nombre, precio){
        this.nombre = nombre.toUpperCase()
        this.precio = parseFloat(precio)
        this.vendido = false
    }

    sumaIva(){
        this.precio = this.precio * 1.21
    }

    vender(){
        this.vendido = true
    }
}


const productos = []

const objeto1 = new Producto('arroz', 125)
const objeto2 = new Producto('fideo', 70)
const objeto3 = new Producto('pan', 50)

productos.push(objeto1)
productos.push(objeto2)
productos.push(objeto3)

console.log(productos)


for (prod of productos){
    prod.sumaIva()
}

console.log(productos)



