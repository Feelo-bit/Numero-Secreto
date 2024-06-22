let num = 0;
let intentos=0;
let lista =[];
let numeromax = 1;

function AsignarTextoElemento(elemento, texto) {
    let elementoHTML =document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function random1() {
    let numeroGenerado = Math.floor(Math.random() * numeromax) + 1;
    console.log(numeroGenerado);
    console.log(lista);

    if (lista.length == numeromax) {
        AsignarTextoElemento('p', "¡Ya has intentado todos los números!");
        document.querySelector('#prueba').setAttribute('disabled','');
        document.querySelector('#valorusuario').setAttribute('disabled','');
    }
    else {
        if (lista.includes(numeroGenerado)) {
            return random1();

        }
        else {
            lista.push(numeroGenerado);
            return numeroGenerado;
        }

    }
}

function verificarIntento() {
    let intento = parseInt(document.getElementById('valorusuario').value);
    
    console.log(num);
    
    if (intento === num){
        AsignarTextoElemento('p',`acertastes el numero en ${intentos} ${(intentos ===1) ? 'intento' : 'intentos'}` );
        document.querySelector('#reiniciar').removeAttribute('disabled');
    } else{
        if (num >intento){
            
            AsignarTextoElemento('p',`el numero es mayor, llevas  ${intentos} ${(intentos ===1) ? 'intento' : 'intentos'}` );
        } else{
            
            AsignarTextoElemento('p',`el numero es menor, llevas ${intentos} ${(intentos ===1) ? 'intento' : 'intentos'}`
        );

        }
        intentos++
        clear();
    }
    return;
}

function clear() {
    document.getElementById('valorusuario').value = '';
     //let caja =document.querySelector('#valorusuario');
     //caja.value = '';
}

clear()

function condiciones() {
    AsignarTextoElemento('h1','JS');
    AsignarTextoElemento('P',`Escribe un numero del 1 al ${numeromax}`);    
    num = random1();
    intentos = 1;
}

function nuevojuego() {   
    clear();
    condiciones();   
    //document.getElementById('reiniciar').setAttribute('disabled');
    document.getElementById('reiniciar').setAttribute('disabled','')
    
}

condiciones();



//DESAFIO 2

// function hola() {
//     console.log("hola")
// }
// hola();

// function verificarIntento() {
//     let nombre = document.getElementById('valorusuario').value ;
//     console.log(`Hola ${nombre}`);
// }

// function name(a) {
//     return a * 2;
// }
// let a = name(3);
// console.log(a);

// function name(a,b,c) {
//     return (a+b+c)/3;
// }
// let r = name(3,4,5);
// console.log(r);

// function name(a,b) {
//     return a >b ? a : b;
// }
// let r = name(3,4);
// console.log(r);

// function name(a, b) {
//     if (a > b) {
//         return a;
//     }
//     else {
//         return b;
//     }
// }
// let r2 = name(3,4);
// console.log(r2);

// function name(a) {
//     return a*a;  
// }
// let r =name(2);
//console.log(r);  // imprime 4

//DESAFIO 1

// function name(ELEMENT,text) {
//     let element = document.querySelector('h1')
//     element.innerHTML = text;
//     return;
// }
// name('h1','Hora del Desafío')

// function verificarIntento(){
//     console.log("hola")
//     return
// }

// function verificarIntento() {
//     let a = prompt("ciudad")
//     alert(`estuve en ${a} y me acorde de ti` )
//     return
// }

// function verificarIntento(){
//     alert("text")
    
// }

//verificarIntento()

// function verificarIntento() {
//     let a = parseInt(prompt(""));
//     let b = parseInt(prompt(""));
//     let c = a + b;
//     alert(c);
// }


// DESAFIO 3

// function name(altura,peso) {
//     return (peso / (altura * altura))*100;
// }
// let resultado = name(165,85);
// let conversion = resultado * 100;
// console.log(conversion);


// function name(altura,peso) {
//     let imc = (peso / (altura * altura))*100;
//     return imc *100;
// }
// let resultado = name(165,85);
// console.log(resultado);




// function factorialize(a) {
//     let inicial =1;
//     if ( a < a ){
//         return 1
//     }
//     else {
//         for (let i = 1; i <= a; i++) {  
//             inicial *= i;
//     }
//     return inicial
        
// }}

// let resultado = factorialize(4);
// console.log (resultado);


// function name(num) {
//     var resultado = num;
//     if (num===0 || num===1)
//         return 1;
    
//     while (num>1) {
//        num --
//        resultado = resultado *num ;
        
//     }
//     return resultado;
// }


// let a = name(4);
// console.log(a)

// function name(a) {
//     let dolar = parseInt("1");
//     let cop = parseInt("3900")

//     return (a*cop) *dolar;
// }

// let resultado =name(2);
// console.log(resultado);