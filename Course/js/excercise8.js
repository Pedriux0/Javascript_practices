'use strict'

/*
Calculator:
- It should take two numbers as input from the user.
- It should take an operator as input from the user.
- It should perform the operation and show the result.
- It should handle the division by zero case.
*/
var number1 = parseInt(prompt("Tell me a number: " , 0));
var number2 = parseInt(prompt("Tell me another number: " , 0));
var operator = prompt("Tell me the operator: " , "+");
function Calculator(number1,number2,operator){
    var result;
    switch( operator){
        case "+":
            result = number1 + number2;
            break;
        case "-":
            result = number1 - number2;
            break;
        case "*":
            result = number1 * number2;
            break;
        case "/":
            if (number2 ==0){
                result = "Not possible gil"
            }
            else{
                result = number1 / number2;
            }
            break;
        default:
            result = "Operator not valid";
            break;
        }

        return result}

    document.write(Calculator(number1,number2,operator));
