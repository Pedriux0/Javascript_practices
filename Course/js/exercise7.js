'use strict'

// multiplication tables of a number from the user 
//create a function that makes that everyime that the 5 is showed add "congratulations"

var number = parseInt(prompt("Tell me a number" , 1));

function multiplyAndCongratulate(number) {
    for (var i = 0; i <= 10; i++) {
        var result = i * number;
        if (result === 5) {
            document.write("The number " + number + " multiplied by " + i + " is " + result + " - Congratulations!</br>");
        } else {
            document.write("The number " + number + " multiplied by " + i + " is " + result + "</br>");
        }
    }
}
multiplyAndCongratulate(number);