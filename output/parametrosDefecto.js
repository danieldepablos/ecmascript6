"use strict";

function registrarUsuario(nombre, pais, correo) {
  var telefono = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
  return "Nombre : ".concat(nombre, ", Pais: ").concat(pais, ", Correo:").concat(correo, ", Tel\xE9fono:").concat(telefono);
}

console.log(registrarUsuario('Daniel', 'Venezuela', 'ddepabloss@gmail.com'));