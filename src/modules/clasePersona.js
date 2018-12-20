export default class Persona {
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    mostrarInfo(){
        console.log(`${this.nombre} tiene ${this.edad} años.`);
    }
}


// export default Persona; // agregar al final de la clase y omitir en el inicio de la clase.