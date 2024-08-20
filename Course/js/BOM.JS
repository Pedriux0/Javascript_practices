'use strict'

// BOM - Browser Object Model
function getBom(){
console.log(window.innerHeight);
console.log(window.innerWidth);
console.log(screen.width);
console.log(screen.height);
console.log(window.location);

};

function redirect(){
    window.location.href = url;
}

function openwindow(){
    window.open(url,"","width=400, height = 400");
}
getBom();


