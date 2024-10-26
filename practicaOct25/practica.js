//                   Guardar array del localStorage uno por uno


const array = []

class Objeto{
    constructor(id, nombre, precio){
        this.id = parseInt(id)
        this.nombre = nombre
        this.precio = precio
    }
}

const obj1 = new Objeto('1', 'Tabla de Skate', 50000)
const obj2 = new Objeto('2', 'Trucks', 200000)

array.push(obj1)
array.push(obj2)

for(const prod of array){
    localStorage.setItem(prod.id, JSON.stringify(prod))
}




// const arrayTraido = JSON.parse( localStorage.getItem('Array') )

    




