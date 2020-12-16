var formulario = document.getElementById('formulario');
var nombre = formulario.nombre;
var sexo = formulario.sexo;
var terminos = formulario.terminos;

function validar(e){

    // Valimadmos el nombre
    if(nombre.value > 18){
        alert('Maximo de caracteres permitidos');
        
    } else if (nombre.value == ''){
        alert('Por favor ingresa un nombre');

    }






    e.preventDefault();
}

formulario.addEventListener('submit', validar);


