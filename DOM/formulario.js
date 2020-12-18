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
    // Validamos los radio button
    if (sexo[0].checked == false && sexo [1].checked == false){
        alert('Por favor ingresa un sexo');
    }

    // Validamos los terminos y condiciones

    if (!terminos.checked){
        alert('Acepta los terminos');

    }
    






    e.preventDefault();
}

formulario.addEventListener('submit', validar);


