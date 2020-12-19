function saludo (){
    alert("Hola Mundo");
}

// var tiempo = setTimeout(saludo , 3000);
// clearTimeout(tiempo); //parar timeout

// saludo ();
//            llamamos al btn          | agregamos el evento click | funcion anonima                  


document.getElementById('btn-iniciar').addEventListener('click' , function(){
    setTimeout(saludo , 2000);
});

// setInterval(saludo, 3000); Intervalo de forma infinita

var intervalo = setInterval(saludo, 3000);

document.getElementById('btn-detener').addEventListener('click' , function(){
    clearInterval(intervalo);
});

