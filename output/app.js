"use strict";

var _mensajeAlerta = require("./modules/mensajeAlerta");

var _clasePersona = _interopRequireDefault(require("./modules/clasePersona"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// mensajeAlerta('Hola Daniel');
// saludo();
var daniel = new _clasePersona.default('Daniel José', 44);
daniel.mostrarInfo();