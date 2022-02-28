var campoFiltro = document.querySelector("#filtrarPacientes");

campoFiltro.addEventListener("input", function(){

    var pacientes = document.querySelectorAll(".paciente")

    if(this.value.length > 0){
        for(var i=0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            var tdNombre = paciente.querySelector(".info-nombre");
            var nombre = tdNombre.textContent;
            var expresion = new RegExp(this.value, "i");
    
            //el metodo test verifica si la variable nombre es parte de expresion
            if(!expresion.test(nombre)){
                paciente.classList.add("invisible");
            }
            else{
                paciente.classList.remove("invisible");
            }
        }

    }
    else{
        for(var i=0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            paciente.classList.remove("invisible");
        }
    }
});