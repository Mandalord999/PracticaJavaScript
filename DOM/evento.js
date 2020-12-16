// function saludo(){
//     alert('Hola');
// }

function crearCaja(){
    var contenedor = document.getElementById('contenedor');
    var caja = document.createElement('div');
    caja.className = 'caja';
    contenedor.appendChild(caja);
}

var btn = document.getElementById('btn');

btn.addEventListener('click' , crearCaja);

// Funciones anonimas

//     btn.addEventListener('click' , function(){
//     CODIGO A EJECUTAR
//     });

