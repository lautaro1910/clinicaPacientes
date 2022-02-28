//practicando requesiciones ajax

var botonBuscar = document.querySelector("#buscarPaciente");

botonBuscar.addEventListener("click", function(){
    
    var xhlr = new XMLHttpRequest;
    xhlr.open("GET", "https://alura-es-cursos.github.io/api-pacientes/pacientes.json");
    xhlr.addEventListener("load", function(){
        var errorAjax = document.querySelector("#errorAjax");

        if(xhlr.status == 200){
            var respuesta = xhlr.responseText;
            var pacientes = JSON.parse(respuesta);

            errorAjax.classList.add("invisible");
            pacientes.forEach(paciente => {
                adicionarPaciente(paciente);
            });
        }
        else{
            errorAjax.classList.remove("invisible");
            console.log(xhlr.status);
            console.log(xhlr.responseText);
        }
        

    })

    xhlr.send;

})