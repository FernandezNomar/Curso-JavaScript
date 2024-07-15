
/* No se puede crear una clase privada en Javascript, ¿Que es una clase
privada? Que una clase tenga atributos o metodos privados significa
que dichos atributos o metodos solo los vamos a poder utilizar dentro
del cuerpo de la clase, es decir si la invocamos a fuera no la podemos 
utiizar, todas la clases que generamos en Javascript son publicas */

class Animal {
constructor (nombre, genero){
    this.nombre = nombre;
    this.genero = genero; 
    this.raza = null;
};

    sonar() {
        console.log("Hago sonidos porque estoy vivo");
      };
      
    saludar() {
        console.log(`Hello my name is ${this.nombre}`);
      };
    };

class Perro extends Animal {
    constructor(nombre,genero,tamanio){
        super(nombre,genero);
        this.tamanio = tamanio;
    }
    sonar(){
        console.log(`Soy un perro y mi sonido es un ladrido`);
    }
    
    ladrar(){
        console.log("Guauuuu Guauuu !!!!");
    }
    /* Un metodo estatico se puede ejecutar sin necesidad de
    instanciar la clase */

    //Metodo estatico
    static queErres(){
console.log(`Los perros somos animales mamiferos que 
pertenecemos a la familia de los caninos. 
Somos considerados los mejores amigos del hombre`);
    }
    /* Los setters y getters son metodos especiales que permiten
    establecer y obtener los valores de atributos de nuestra clase */

    // get y set se convierten en atributos no en metodos
   get getRaza(){
        return this.raza
    }

   set setRaza(raza){
    this.raza = raza
    }
}

Perro.queErres();
const belle = new Perro("Belle","Hembra","Pequeño");
const cocacola = new Animal("Cocacola","Macho");

// Aunque es un metodo lo tenemos que tratar como un atributo
console.log(belle.getRaza);
belle.setRaza = "Pomeranian";
console.log(belle.getRaza);