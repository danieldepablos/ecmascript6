"use strict";

var nombres = ['Daniel', 'José', 'Alison', 'Desiree']; // const numero_caracteres = nombres.map(function(nombre){
//     console.log(`El nombre ${nombre} tiene ${nombre.length} caracteres`)
// })
// (parametro) => {
//     return // codigo a ejecutar
// }

var numero_caracteres = nombres.map(function (nombre) {
  return "".concat(nombre, " tiene ").concat(nombre.length, " caracteres");
});
console.log(numero_caracteres);