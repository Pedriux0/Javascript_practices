'use strict'

// DOM manipulation
//get elemetns with id 
let box = document.getElementById("one");

box.style.backgroundColor = "blue";
box.style.padding = "20px";
box.style.color = "white";
box.className = "hello";
box.innerHTML = "Hello World";
box.style.border = "2px solid black";
box.style.borderRadius = "10px";
box.style.margin = "20px";
box.style.textAlign = "center";
box.style.fontSize = "20px";
box.style.fontWeight = "bold";

//get elements with class name
let box2 = document.getElementsByClassName("two");
for (let element in box2) {
  var parraf = document.createElement("p");
  var text = document.createTextNode(element.textContent);
  parraf.appendChild(text);
  document.querySelector("#mysection").appendChild(parraf);
}
//get elements with tags 
let box3 = document.getElementsByTagName("three");

function changeColor(){
    let bg = prompt("What color do you want?");
    box.style.backgroundColor = bg;
}
