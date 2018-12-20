"use strict";

var promesa = new Promise(function (resolve, reject) {
  setTimeout(function () {
    var exito = false;

    if (exito) {
      resolve('Ok Dokey!!');
    } else {
      reject('Neeeeein!!');
    }
  }, 4000);
}); // promesa.then(()=>{
//     console.log('Exito!!');
// }).catch(()=>{
//     console.log('Declined!!')
// });

promesa.then(function (mensaje) {
  console.log(mensaje);
}).catch(function (mensaje) {
  console.log(mensaje);
});