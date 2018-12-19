class Usuario {
    constructor(nombre, edad){
        this.nombre = nombre,
        this.edad = edad
    }

    mostrarSaludo(){
        return `Hola ${this.nombre}`;
    }

    mostrarInfo(){
        return `Nombre : ${this.nombre} - Edad : ${this.edad}`;
    }

}

class Estudiante extends Usuario {

    constructor(nombre, edad, carrera){
        super(nombre, edad);
        this.carrera = carrera
    }

    mostrarInfo(){
        return `Nombre : ${this.nombre} - Edad : ${this.edad} - Carrera : ${this.carrera}`;
    }    

}

const daniel = new Usuario('Daniel Depablos', 44);
const alison = new Estudiante('Alison Depablos', 22, 'Diseño Gráfico');

console.log( daniel.mostrarInfo() )

console.log( alison.mostrarInfo() )