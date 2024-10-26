for(let i = 1; i <= 10; i++){

    
    if(i == 4){
        continue;
    }
    
    alert(`${i}`)

}

alert('No hay mas turnos')


let numero = 'a';

do{
    numero = prompt('ingrese un numero')
    console.log(numero)
}while(parseInt(numero))

numero = parseFloat(prompt('Ingrese un numero: '))


switch(numero){
    case 5: 
        console.log('Este es el 5');
        break;
    case 8:
        console.log('Este es el 8');
        break;
    default:
        console.log('Es un numero, no joda!')
}



CICLOS:

let number = parseInt(prompt('Ingrese un número: '));

for (i = 0 ; i <= 10; i++){
    
    numeroRandom = Math.random();
    let total = number + numeroRandom;
    alert(total);
    
}


