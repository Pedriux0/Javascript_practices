'use strict'

// REST AND SPREAD 

function listOfFruits(fruit1,fruit2, ...rest_of_fruits){
    document.write("Fruit 1 :" + fruit1);
    document.write("<br>");
    document.write("Fruit 2 :" + fruit2);
    document.write("<br>");
    document.write("Rest of Fruits :" + rest_of_fruits);
}
listOfFruits("Apple","Banana","Mango","Orange","Grapes");
console.log(listOfFruits);
