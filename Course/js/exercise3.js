
'use strict';

/**
 * Prompts the user to enter two numbers and displays all the numbers between them.
 * 
 * @param {number} number1 - The first number entered by the user.
 * @param {number} number2 - The second number entered by the user.
 */
var number1 = parseInt(prompt("Introduce the first number: ", 0));
var number2 = parseInt(prompt("Introduce the second number: ", 0));

document.write("<h1> from " + number1 +" to "+ number2+ " we have this numbers:  </h1>")
for(var i = number1; i<= number2; i++){
document.write(i + "</br>");
} 
