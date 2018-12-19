function registrarUsuario(nombre, pais, correo, telefono=''){
    return `Nombre : ${nombre}, Pais: ${pais}, Correo:${correo}, Teléfono:${telefono}`
}

console.log(registrarUsuario('Daniel', 'Venezuela', 'ddepabloss@gmail.com'))