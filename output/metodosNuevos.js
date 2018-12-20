"use strict";

var texto = 'Hola Mundo';
console.log(texto, 'empieza con h:', texto.toLowerCase().startsWith('h'));
console.log(texto, 'empieza con o:', texto.toLowerCase().endsWith('o'));
console.log(texto, 'incluye la palabra Daniel', texto.includes('Daniel'));
var amigos = ['Daniel', 'Alison', 'Flor', 'Alejandro'];
console.log(amigos.includes('Alison'));
console.log(amigos.find(function (amigo) {
  return amigo.length > 6;
})); // console.log(amigos.find( amigo => amigo === 'Manuel' ));

console.log(amigos.findIndex(function (amigo) {
  return amigo === 'Alejandro';
}));