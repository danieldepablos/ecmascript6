// const crearObjeto = (nombre, edad) => {
//     return {
//         nombre: nombre,
//         edad: edad
//     }
// }

const crearObjeto = (nombre, edad) => {
    return {
        nombre,
        edad,
        // mostrarInfo: () => {
        //     return `${nombre} tiene ${edad} años.`
        // }
        mostrarInfo() {
            return `${nombre} tiene ${edad} años.`
        }        
    }
}

console.log(crearObjeto('Daniel', 44).mostrarInfo());