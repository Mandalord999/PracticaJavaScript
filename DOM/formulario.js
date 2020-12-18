(function(){
    var formulario = document.getElementById('formulario'),
        nombre = formulario.nombre,
        correo = formulario.correo,
        sexo = formulario.sexo,
        terminos = formulario.terminos,
        error = document.getElementById('error');
    
    function validarNombre(e){
        // Valimadmos el nombre
       if (nombre.value == '' || nombre.value == null){
            // alert('Por favor ingresa un nombre');
            error.style.display = 'block';
            error.innerHTML = error.innerHTML + '<li>Por Favor completa el nombre</li>';
            e.preventDefault();
        } else {
            error.style.display = 'none';
        }
        
    }
    function validarCorreo(e){
        // Valimadmos el nombre
       if (correo.value == '' || correo.value == null){
            // alert('Por favor ingresa un nombre');
            error.style.display = 'block';
            error.innerHTML = error.innerHTML + '<li>Por Favor completa el correo</li>';
            e.preventDefault();
        }else {
            error.style.display = 'none';
        }
        
    }
    function validarSexo(e){
        // Valimadmos el nombre
       if (sexo.value == '' || sexo.value == null){
            // alert('Por favor ingresa un nombre');
            error.style.display = 'block';
            error.innerHTML = error.innerHTML + '<li>Por Favor seleccionar sexo</li>';
            e.preventDefault();
        }else {
            error.style.display = 'none';
        }
        
    }
    function validarTerminos(e){
        // Valimadmos el nombre
       if (terminos.checked == false){
            // alert('Por favor ingresa un nombre');
            error.style.display = 'block';
            error.innerHTML = error.innerHTML + '<li>Por Favor aceptar terminos</li>';
            e.preventDefault();
        }else {
            error.style.display = 'none';
        }
        
    }
    function validarFormulario(e){
        error.innerHTML= '';
        validarNombre(e);
        validarCorreo(e);
        validarSexo(e);
        validarTerminos(e);

    }
    formulario.addEventListener('submit', validarFormulario);
}())
