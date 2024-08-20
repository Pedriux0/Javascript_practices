'use strict'


// Pruebas con var
var numero = 40;
console.log(numero);

if(true){
    var numero = 50;
    console.log(numero);
}

console.log(numero); 

// Prueba con Let

var text = "Course Javascript";

console.log(text); // Valor ''

if(true){
    let text = "Course Lavael";
    console.log(text);
}