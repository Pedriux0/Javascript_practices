/**
 * This file contains a JavaScript program that prompts the user to enter numbers until a negative number is entered.
 * It calculates the sum of all positive numbers entered and keeps track of the count of positive numbers.
 */
'use strict'

var sum = 0 
var counter = 0;

do{
    var number = parseInt(prompt("Introduce number until you get a negative"))
    if(isNaN(number)){
        number = 0;
    }else if(number >= 0){
        sum =+ number;

        counter++;
    }
    console.log(sum);
    console.log(counter);
    }while(number>= 0)

        