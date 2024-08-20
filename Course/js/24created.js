'use strict'

//  Templates of text 

var name = prompt("Give your Name: ");
var lastname = prompt("Last name: ");

//var text = "Your name is: " + name + "lastname : " + lastname;

var text = `
    <h1> Hi, how are you? </h1>
    <h3> Your name is: ${name}</h3>
    <h3> Your lastname is: ${lastname}</h3>
    
`;
document.write(text); 

