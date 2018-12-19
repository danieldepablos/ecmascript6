"use strict";

// const crearObjeto = (nombre, edad) => {
//     return {
//         nombre: nombre,
//         edad: edad
//     }
// }
var crearObjeto = function crearObjeto(nombre, edad) {
  return {
    nombre: nombre,
    edad: edad,
    // mostrarInfo: () => {
    //     return `${nombre} tiene ${edad} años.`
    // }
    mostrarInfo: function mostrarInfo() {
      return "".concat(nombre, " tiene ").concat(edad, " a\xF1os.");
    }
  };
};

console.log(crearObjeto('Daniel', 44).mostrarInfo());