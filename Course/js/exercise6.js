'use strict'

/*
Tells us that is divisible by 2 or not 
*/
var number = parseInt(prompt("Give a number", 1));
if (number % 2 == 0) {
    document.write("<h2> The number is divisible by 2</h2>");
}
else {
    document.write("<h2> The number is not divisible by 2</h2>");
}
