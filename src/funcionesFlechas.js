const nombres = ['Daniel', 'José', 'Alison', 'Desiree']

// const numero_caracteres = nombres.map(function(nombre){
//     console.log(`El nombre ${nombre} tiene ${nombre.length} caracteres`)
// })

// (parametro) => {
//     return // codigo a ejecutar
// }

const numero_caracteres = nombres.map(nombre => `${nombre} tiene ${nombre.length} caracteres`)

console.log(numero_caracteres)