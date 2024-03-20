/* let titulo = document.querySelector('h1'); // document query llama el div del html
titulo.innerHTML = 'Juego del numero secreto :D';

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un numero del 1 al 10';

*/

let NumeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(NumeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){ 
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); // tambien puede ser document.querySelector('input');
     
    console.log(numeroDeUsuario === NumeroSecreto); // === igual valor y tipo!
    if (numeroDeUsuario === NumeroSecreto) {
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
   
    } else {

        if (numeroDeUsuario > NumeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        } else {
            asignarTextoElemento('p','El numero secreto es mayor');
        }

        intentos++;
        limpiarCaja();
    }
    return;
    
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
    //valorCaja.value = ''; tocaria antes con let value primero arriba
}

function generarNumeroSecreto(){ // recursividad!! 
    
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    
    if (listaNumerosSorteados.length == numeroMaximo){

        asignarTextoElemento('p', ' Ya se sortearon todos los numeros posible!')

    } else {

        if (listaNumerosSorteados.includes(numeroGenerado)){ //include mira si el numero esta en la lista, es un boolean
            return generarNumeroSecreto();
    
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }

    }

}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto!');
    asignarTextoElemento('p',` Indica un numero del 1 al ${numeroMaximo}`);
    NumeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar el numero aleatorio
    //inicializar el numero de intentos
    //desabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}

condicionesIniciales();


/* 
let numerosSorteados = []; --> creo una lista vacia
numerosSorteados.push(8); añade el numero 8 a la lista, lo pone de ultimas!!!!
console.log(numerosSorteados.length);
console.log(numerosSorteados[0]); --> lista:[5,8] --> da 5!
console.log(numerosSorteados[numerosSorteados-length-1]);

----

Creando un array
Puedes crear un array en JavaScript declarando una variable y asignándole valores entre corchetes [].
let frutas = ["Manzana", "Uva", "Naranja"];

console.log(frutas[0]); // Salida: "Manzana"
console.log(frutas[2]); // Salida: "Naranja"

Añadiendo nuevos elementos
Para agregar un elemento al final del array, puedes usar el método push.

frutas.push("Fresa");
console.log(frutas); // Salida: ["Manzana", "Uva", "Naranja", "Fresa"]


Eliminando el último elemento
Para eliminar el último elemento, puedes usar el método pop.
frutas.pop();
console.log(frutas); // Salida: ["Manzana", "Uva", "Naranja"]


*/