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
