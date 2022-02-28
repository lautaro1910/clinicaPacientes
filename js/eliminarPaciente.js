//var pacientes = document.querySelectorAll(".paciente");

var tabla = document.querySelector("#tabla-pacientes");

tabla.addEventListener("dblclick", function(event){
    //event.target es donde ocurrio el evento, con el parentNode le digo que vaya al padre y lo elimine
    //esta propiedad se llama event bubbling
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function(){
        event.target.parentNode.remove();
    },500);
})

//en el css esta la parte visual
