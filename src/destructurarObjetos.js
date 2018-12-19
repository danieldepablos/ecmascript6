const usuario = {
    nombre:'Daniel',
    correo:'ddepabloss@gmail.com',
    edad:44,
    pais:'Venezuela',
    profesion: 'Desarrollador Web'
}

const {nombre, correo, estadocivil = 'N/A'} = usuario

// console.log(`${nombre} tiene el correo ${correo} y estado civil ${estadocivil}`)

// const mostrarInfo = ( {nombre, profesion} ) => {
//     console.log( nombre, profesion )
// }

const mostrarInfo = ( {nombre, profesion} ) => console.log( nombre, profesion )

mostrarInfo(usuario)