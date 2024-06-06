'use strict'

/*
Program that ask two numbers and tell us which one is bigger than,less than, equals
*/

var number = parseInt(prompt("Please tell me a number: ",0));
var number1 = parseInt(prompt("Give the second number", 0));
console.log(number,number1);

if(number == number1){
    alert("They are equal");
}

if(number < number1){
    alert("first is less than second");
}


if(number > number1){
    alert("first is bigger than second");
}
document.write(number + " ");
document.write(number1);
