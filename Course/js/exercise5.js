'use strict'

/*
Show all the numbers divisibles from a prompt
*/
var number = parseInt(prompt("Give a number", 1));

for (var i = 1; i <= number; i++){
    if(number%i == 0){
    document.write("<h2> Disivible " + i +"</h2>");
    }
}