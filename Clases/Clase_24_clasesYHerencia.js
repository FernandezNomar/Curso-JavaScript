/* Javascript trabaja los objetos con prototipos, es un lenguaje 
orientado a objetos basado en prototipos */

/* Las clases no resciben parametros */
class Animal {

/* Para recibir parametros tienen un metodo especial llamado
constructor */

constructor (nombre, genero){
    this.nombre = nombre;
    this.genero = genero; 
};

    sonar() {
        console.log("Hago sonidos porque estoy vivo");
      };
      
    saludar() {
        console.log(`Hello my name is ${this.nombre}`);
      };
    };

// Hwerencia en las clases

class Perro extends Animal {
    constructor(nombre,genero,tamanio){
    /* Con el metodo "super()" se manda a llamar el constructor 
    de la clase padre */
        super(nombre,genero);
        this.tamanio = tamanio;
    }
//Aqui se sobre escribe el metodo sonar de la clase padre que es Animal
    sonar(){
        console.log(`Soy un perro y mi sonido es un ladrido`);
    }
    
    ladrar(){
        console.log("Guauuuu Guauuu !!!!");
    }
    
}

const belle = new Perro("Belle","Hembra","Pequeño");
const cocacola = new Animal("Cocacola","Macho");

console.log(belle);
belle.sonar();
belle.saludar();
belle.ladrar();

console.log(cocacola);
cocacola.sonar();
cocacola.saludar();