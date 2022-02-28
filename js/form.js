var botonAdicionar = document.querySelector("#adicionar-paciente");

botonAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adicionar");
    var paciente = capturarDatosPaciente(form);
    

    var errores = validarPaciente(paciente);

    var erroresMensajes = document.querySelector("#erroresMensajes");
    
    //valido si los datos no son correctos, imprimo por pantalla
    if(errores.length > 0){
        mostrarMensajesErrores(errores);
        return;
    }

    adicionarPaciente(paciente);

    form.reset();

    erroresMensajes.innerHTML = "";

});

function adicionarPaciente(paciente){
    var pacienteTr = crearTr(paciente);
    var tabla = document.querySelector("#tabla-pacientes");
    tabla.appendChild(pacienteTr);
}

function capturarDatosPaciente(form){

    //capturando los datos del formulario y creando clase paciente
    var paciente = {
        nombre: form.nombre.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcularIMC(form.peso, form.altura)
    }
    return paciente;
};

function crearTr(paciente){

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    //agregamos los tds al tr
    pacienteTr.appendChild(counstruirTd(paciente.nombre, "info-nombre"));
    pacienteTr.appendChild(counstruirTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(counstruirTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(counstruirTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(counstruirTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function counstruirTd(dato, nombreClase){
    //simplificacion de creacion de tds
    var td = document.createElement("td");
    td.classList.add(nombreClase);
    td.textContent = dato;
    return td;
}


//funcion que me permite verificar si los datos del paciente son correctos
function validarPaciente(paciente){
    var errores = [];

    //controles de campo vacio
    if(paciente.nombre.length == 0){
        errores.push("El campo nombre esta vacio");
    }
    if(paciente.peso.length == 0){
        errores.push("El campo peso esta vacio");
    }
    if(paciente.altura.length == 0){
        errores.push("El campo altura esta vacio");
    }
    if(paciente.gordura.length == 0){
        errores.push("El campo gordura esta vacio");
    }
    
    //control de campos ingresados correctamente
    if(!validarPeso(paciente.peso)){
        errores.push("El peso es incorrecto");
    }
    if(!validarAltura(paciente.altura)){
        errores.push("La altura es incorrecta");
    }
    return errores;
}

//funcion que recorre el array y por cada elemento que tiene, imprime un mensaje de error que se ubica en un li
function mostrarMensajesErrores(errores){
    var ul = document.querySelector("#erroresMensaje");
    ul.innerHTML = "";

    errores.forEach(function(error){
        //creo elemento li para mi ul
        var li = document.createElement("li");
        li.textContent = error;
        //anexo el li con el ul
        ul.appendChild(li);
    })
}
