"use strict";

var usuario = {
  nombre: 'Daniel',
  correo: 'ddepabloss@gmail.com',
  edad: 44,
  pais: 'Venezuela',
  profesion: 'Desarrollador Web'
};
var nombre = usuario.nombre,
    correo = usuario.correo,
    _usuario$estadocivil = usuario.estadocivil,
    estadocivil = _usuario$estadocivil === void 0 ? 'N/A' : _usuario$estadocivil; // console.log(`${nombre} tiene el correo ${correo} y estado civil ${estadocivil}`)
// const mostrarInfo = ( {nombre, profesion} ) => {
//     console.log( nombre, profesion )
// }

var mostrarInfo = function mostrarInfo(_ref) {
  var nombre = _ref.nombre,
      profesion = _ref.profesion;
  return console.log(nombre, profesion);
};

mostrarInfo(usuario);