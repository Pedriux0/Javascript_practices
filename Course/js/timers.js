'use strict'
// timers
window.addEventListener('load',function(){
    var time = setInterval(function(){
        console.log("Set interval executed");
        var h1s = document.querySelector("h1");

        if(h1s.style.fontSize == "50px"){
            h1s.style.fontSize = "20px";
        }else
        {
            h1s.style.fontSize = "50px";
        }
    },1000);
    
    var stop = document.querySelector("#stop");
    stop.addEventListener('click',function(){
        alert("STOPED")
        clearInterval(time);
    });
    var start = document.querySelector("#start");
    start.addEventListener('click',function(){
        alert("STARTED")
        time = setInterval(function(){
            console.log("Set interval executed");
            var h1s = document.querySelector("h1");
    
            if(h1s.style.fontSize == "50px"){
                h1s.style.fontSize = "20px";
            }else
            {
                h1s.style.fontSize = "50px";
            }
        },1000);
    })
});