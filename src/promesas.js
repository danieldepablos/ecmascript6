const promesa = new Promise( (resolve, reject) => {
    setTimeout( () => {
        const exito = false;
        if (exito) {
            resolve('Ok Dokey!!');
        }  else {
            reject('Neeeeein!!');
        }
    }, 4000 );
});

// promesa.then(()=>{
//     console.log('Exito!!');
// }).catch(()=>{
//     console.log('Declined!!')
// });

promesa.then((mensaje)=>{
    console.log(mensaje);
}).catch((mensaje)=>{
    console.log(mensaje);
});