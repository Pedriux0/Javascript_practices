'use strict '
// events of mouse 
//load 
window.addEventListener('load',function(){
function changeColorButton(){
    console.log("Click");
    var bg = boton.style.backgroundColor ;
    if(bg == "green"){
        boton.style.backgroundColor = "red";
        boton.style.padding = "10px";
        boton.style.border = "1px solid";
    }else{
        boton.style.backgroundColor = "green";
    }
    return true;
}


var boton = document.querySelector("#boton");
//click
boton.addEventListener('click', function(){
    changeColorButton;
});
// mouseover
boton.addEventListener('mouseover',function () {
    boton.style.background = "#ccc";
});
//focus
var input = document.querySelector("#input")
input.addEventListener('focus',function(){
    console.log("Inside input");
});

//blur
input.addEventListener('blur',function(){
    console.log("Out of input");
});
//keydown
input.addEventListener('keydown',function(event){
    console.log("Pressing key",String.fromCharCode(event.keyCode));
});
//keypress
input.addEventListener('keypress',function(event){
    console.log("Pressed key",String.fromCharCode(event.keyCode));
});

//keyup
input.addEventListener('keyup',function(event){
    console.log("Leaved key",String.fromCharCode(event.keyCode));
})
});