//                                   DOM



//                                 document.getElementById('')
let titulo = document.getElementById('titulo')

console.log(titulo.innerHTML)



//                                 document.getElementsByClassName('')
let paises = document.getElementsByClassName('paises')

console.log(paises[0].innerHTML)



//                                 document.getElementsByTagName('')
let contenedores = document.getElementsByTagName('div')

console.log(contenedores[0].innerHTML)
console.log(contenedores[1].innerHTML)
console.log(contenedores[2].innerHTML)






//                               Crear Nodos
let parrafo = document.createElement('p')
//                               Metemos contenido al nodo
parrafo.innerHTML = '<h2 id="prueba">¡Hola Coder!</h2>'
//                               Metemos el nodo creado al HTML
document.body.appendChild(parrafo)









//                               Remover nodos
let h2 = document.getElementById('prueba')

h2.parentNode.removeChild(h2)










//                                Dar datos a los Input de un form
document.getElementById('nombre').value = 'HOMERO'
document.getElementById('edad').value = 39


//                                Obtener datos de los Input de un form
let inputNombre = document.getElementById('nombre').value
let inputEdad = document.getElementById('edad').value

console.log(inputNombre)
console.log(inputEdad)









//                       Ejemplo aplicado: creando opciones desde un array
let personas = ['HOMERO', 'MARGE', 'BART', 'LISA', 'MAGGIE']

let ul = document.getElementById('personas')

for(const persona of personas){
    let li = document.createElement('li')
    li.innerHTML = persona
    ul.appendChild(li)
}





//Practicamos meter unas palabras adentro de un p creado. Y eso, adentro de un div que estaba en el HTML
let palabras = 'PALABRAS QUE METEMOS'

let espacioAsignado = document.getElementById('palabraAgregada')

let pe = document.createElement('p')
pe.innerHTML = palabras
espacioAsignado.appendChild(pe)