// function saludo(){
//     alert('Hola');
// }

// function crearCaja(){
//     var contenedor = document.getElementById('contenedor');
//     var caja = document.createElement('div');
//     caja.className = 'caja';
//     contenedor.appendChild(caja);
// }

// var btn = document.getElementById('btn');

// btn.addEventListener('click' , crearCaja);

// Funciones anonimas

//     btn.addEventListener('click' , function(){
//     CODIGO A EJECUTAR
//     });
var cajas = document.getElementsByClassName('caja');

function color(){
    // cajas[0].classList.toggle('amarillo');
    this.classList.toggle('amarillo');
}

// cajas[0].addEventListener('click' , color);

for (var i = 0; i < cajas.length;i++){
    cajas[i].addEventListener('click' , color);
}