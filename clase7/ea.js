//                                 Almacenar en Storage información ingresada por el usuario.
//                                 Puede ser un texto, números, o combinación. 
//                                 Luego mostrarla mediante alert o console.


// let nombre = prompt('Ingrese su nombre')
// let apellido = prompt('Ingrese su apellido')
// let edad = parseInt( prompt('Ingrese su edad') )

// localStorage.setItem('nombre', nombre)
// localStorage.setItem('apellido', apellido)
// localStorage.setItem('edad', edad)


// let nombreTraido = localStorage.getItem('nombre')
// let apellidoTraido = localStorage.getItem('apellido')
// let edadTraida = localStorage.getItem('edad')

// alert(`Su nombre es: ${nombreTraido}`)
// alert(`Su apellido es: ${apellidoTraido}`)
// alert(`Su edad es: ${edadTraida}`)



//                                 Declarar un array de objetos (literales, con funciòn
//                                 constructora o con clases) y almacenar el array en formato
//                                 JSON en el storage.



// arrow function:
const guardarEnLocalStorage = (clave, valor) => localStorage.setItem(clave, valor)

const traerDelLocalStorage = (clave) => localStorage.getItem(clave)


let producto1 = {id: 1, nombre: 'Tabla Creature', precio: 100000}
let producto2 = {id: 2, nombre: 'Tabla Seven', precio: 70000}

class Producto{
    constructor(id, nombre, precio){
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.vendido = false
    }

    vender(){
        this.vendido = true
    }
}

let producto3 = new Producto(3, 'Trucks Independent', 500000)
let producto4 = new Producto(4, 'Ruedas Bones', 150000)

producto3.vender()

const array = [producto1, producto2, producto3, producto4]

const arrayEnJson = JSON.stringify(array)

guardarEnLocalStorage('Productos', arrayEnJson)


let nombre = 'Ismael'

guardarEnLocalStorage('Alumno', nombre)

let alumnoTraido = traerDelLocalStorage('Alumno')

console.log( alumnoTraido )




