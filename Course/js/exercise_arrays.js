'use strict'
/*
1.  Ask for 6 numbers and introduce them in an array
2.  Show the array in the body of the page and in the console
3.  Order the array and show it
4.  Invert the order and show it
5.  How many elements does the array have?
6.  Search for a value in the array and show the index
*/

//ask and show the numbers
var numbers = new Array(6);

for (let i = 0; i <5; i++){
    numbers[i] = parseInt(prompt("Introduce a number: ", 0));
}
document.write("<p>Array: " + numbers + "</p>");

//
// Ordened 
numbers.sort(function(a,b){return a-b});
console.log(numbers, "ordened");

// Inverted
numbers.reverse();
console.log(numbers, "inverted");
document.write("<p>Array inverted: " + numbers + "</p>");
// How many elements does the array have?   
console.log(numbers.length, "elements");
document.write("<p>Array length: " + numbers.length + "</p>");
// Search for a value in the array and show the index
var search = parseInt(prompt("Search a number: ", 0));
var searchIndex = numbers.findIndex(number => number == search);
document.write("<strong>"+searchIndex+"</strong>");
console.log(searchIndex, "index");

//displayy the array in the console 
console.log(numbers, "array");