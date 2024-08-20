


/*
Create a program that use 2 functions one inside the other to 
create a happy birthday text with colors
*/
'use strict';

function createBirthdayText() {
    function addColorEffect(text) {
        return '\x1b[31m' + text + '\x1b[0m'; // Adding red color effect
    }

    const birthdayText = 'Happy Birthday';
    const coloredText = addColorEffect(birthdayText);

    return coloredText;
}

console.log(createBirthdayText());