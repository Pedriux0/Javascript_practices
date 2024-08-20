'use strict'

// Arrays
// Arrays are a special type of object that stores a list of things.
// Arrays are created using square brackets [].
// The items in the array are called elements.
// Each element in an array has a unique index, which is a number that represents the element's position in the array.
/*
var name = "Juan Naranjo";
var names = ["Juan", "Pepe", "Manolo", "Jose"];

create a small program that use these variables with an array function
var element = parseInt(prompt("What element do you want?"));
if(element >= names.length){
    alert("Introduce a number less than " + names.length);
}
else{
    alert(names[element]);
}

document.write("<h1> Countries </h1>");
for(var i = 0; i<languages.length; i++){
    document.write("<li>"+languages[i]+"</li>");
}
document.write("</ul>");

*/

var languages = new Array("Spanish", "English", "German", "French");

languages.forEach((element,index,data)=>{
    console.log(data);
    document.write("<li>" + index +" "+element+ "</li>");
});
document.write("</ul>");