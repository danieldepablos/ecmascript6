const persona = ['Daniel Depablos', 44, 'Venezuela', 'Desarrollador Web']

// const[nombre, edad, pais, profesional] = persona

const[nombre, , pais, profesional] = persona

// const mostrarInfo = ( [nombre, , pais]=persona ) => {
//     console.log(nombre, pais)
// }

// const mostrarInfo = ( [nombre, , pais, profesional] ) => {
//     console.log(nombre, pais, profesional)
// }

// const mostrarInfo = ( [nombre, , pais, profesional] ) => console.log(nombre, pais, profesional)

const mostrarInfo = ( [nombre, edad = 'No especificado', pais, profesional] ) => console.log(nombre, edad, pais, profesional)

mostrarInfo(persona)