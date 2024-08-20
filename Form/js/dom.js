'use strict'

window.addEventListener('load', function(){
    console.log("DOM Charged");

    var form = document.querySelector("#Formularie");
    var box_dashed = document.querySelector("#box_dashed");
    box_dashed.style.display = "none";

    form.addEventListener('submit', function(event){
        event.preventDefault(); // prevent default form submission behavior
        console.log("Event is done");

        var fields = {
            name: document.querySelector("#name").value.trim(),
            lastname: document.querySelector("#lastname").value.trim(),
            age: document.querySelector("#age").value.trim(),
        };

        if(fields.name == null || fields.name.length == 0){
            alert("Please enter your name");
            document.querySelector("#errorname").innerHTML = "The name is incorrect";
            document.querySelector("#errorname").style.display = "red";
        }
        else{
            document.querySelector("#errorname").style.display = "none";
        }
        if(fields.lastname == null || fields.lastname.length == 0){
            alert("Please enter your lastname");
            return false;
        }

        if(isNaN(fields.age) || fields.age <= 0){
            alert("Invalid age");
            return false;
        }

        box_dashed.style.display = "block";
        box_dashed.innerHTML = ""; // clear previous content

        for (var field in fields) {
            var parraf = document.createElement("p");
            parraf.textContent = `${field.charAt(0).toUpperCase() + field.slice(1)}: ${fields[field]}`;
            box_dashed.appendChild(parraf);
        }
    })
});