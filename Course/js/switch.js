'use strict'

// Switch

var age = 21;
var print = " ";
switch(age){
    case 19 :
        print = "Now you're an adult";
    break;

    case 20 :
        print = "Now you're an adul " + 21;
    break;

    case 21 :
        print = "Now you're an adult 21";
    break;

    default: 
        print  = "IDK;"
}

alert(print);