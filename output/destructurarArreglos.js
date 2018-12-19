"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var persona = ['Daniel Depablos', 44, 'Venezuela', 'Desarrollador Web']; // const[nombre, edad, pais, profesional] = persona

var nombre = persona[0],
    pais = persona[2],
    profesional = persona[3]; // const mostrarInfo = ( [nombre, , pais]=persona ) => {
//     console.log(nombre, pais)
// }
// const mostrarInfo = ( [nombre, , pais, profesional] ) => {
//     console.log(nombre, pais, profesional)
// }
// const mostrarInfo = ( [nombre, , pais, profesional] ) => console.log(nombre, pais, profesional)

var mostrarInfo = function mostrarInfo(_ref) {
  var _ref2 = _slicedToArray(_ref, 4),
      nombre = _ref2[0],
      _ref2$ = _ref2[1],
      edad = _ref2$ === void 0 ? 'No especificado' : _ref2$,
      pais = _ref2[2],
      profesional = _ref2[3];

  return console.log(nombre, edad, pais, profesional);
};

mostrarInfo(persona);