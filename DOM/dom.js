var cajas = document.getElementsByTagName('div');
// var cajas = document.getElementsByClassName('caja');
var primeracaja = document.getElementById('primeracaja');

// primeracaja.textContent = 'Heeeey!!';
// cajas[0].innerHTML = '<h1> Hey!!! </h1>';

// Creando Nodos

//1.-  Crear el elemento 
var caja = document.createElement('div');
// 2.- Crear un nodo de texto
var contenido = document.createTextNode('Heeeeeey!!');
// 3.- Añadir el nodo de texto al elemento
caja.appendChild(contenido);
// 4.- Agregar atributos a las cajas
caja.setAttribute('class' , 'caja naranja');
// 5.- Agregar el elemento al documento
var contenedor = document.getElementById('contenedor');
contenedor.appendChild(caja);

// Modificando la clase o id del elemento

caja.id = 'primera';
caja.className = 'caja naranja';

// Conociendo el elemento padre
var padre = cajas[0].parentNode;
// padre.insertBefore(caja, primeracaja)
padre.replaceChild(caja, cajas [2]);

padre.removeChild(cajas [3]);









