'use strict'
// Anonymus Functions 
var name = prompt("Give me a movie: ");
let movie = function nameofMovie(name){
    document.write("The movie is: " + name + "</br>");
}
movie(name);

function plus(number1, number2, plustip, plustwo){
    var add = number1 + number2;
    plustip(add);
    plustwo(add);
    return add;
}
plus(5, 7, data =>  {
    console.log("The result is", data);
}, data =>  {
    console.log("The plus by 2 is:", (data * 2));
});
