
var meses = ['Enero' , 'Febrero' , 'Marzo' , 'Abril' , 'Mayo' , 'Junio' , 'Julio' , 'Agosto' , 'Septiembre' , 'Octubre' , 'Noviembre' , 'Diciembre'];

// for (mes in meses ){
//     document.write(meses[mes] + ' ');

//     if(meses[mes] == 'Julio'){
//         break;

//     }
// }

// console.log('Fin del ciclo');

for (mes in meses ){
    
    if(meses[mes] == 'Marzo'){
        continue;
    }
    document.write(meses[mes] + ' ');
}
console.log('Fin del ciclo');
