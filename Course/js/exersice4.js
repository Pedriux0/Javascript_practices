/**
 * Prompts the user to enter two numbers and checks if the numbers between them are divisible by the second number.
 * If a number is not divisible, it is printed to the document.
 */
'use strict'



var number1 = parseInt(prompt("Enter the first number", 0));
var number2 = parseInt(prompt("Enter the second number", 0));
while(number1 < number2 ){
    number1++;
    if(number1%2 !=0){
        document.write("The number "+ number1 +  " is not divisible by " + number2 +"</br>");
    }
}