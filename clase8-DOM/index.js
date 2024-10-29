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



