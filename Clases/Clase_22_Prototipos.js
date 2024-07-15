
/* Programacion orientad a objetos = POO */
/* 
Clase: Modelo a seguir.
Objetos: Es una instancia de una clase.
    Atributos: Es una caracteristica o propiedad del objeto,
               Son variable dentro de un objeto.
    Metodos: Son las acciones que un obejeto puede realizar,
             Los metodo son funciones dentro de un objeto,
*/

console.log("Prototipo no funcional");
/* Prototipo no funcional */
const animal = {
    nombre: "Firu",
    sonar(){console.log("Hago sonidos porque estoy vivo");}
};

const animal2 = {
    nombre: "Lola Bunny",
    sonar(){console.log("Hago sonidos porque estoy vivo");}
};


console.log(animal);
console.log(animal2);

console.log("Prototipo funcional / constructor version 1");
/* Prototipo funcional */

/* Funcion constructora donde asignamos los metodos al
prototipo, no a la funcion como tal */
function Animal (nombre,genero){
    //Atributos
    this.nombre = nombre;
    this.genero = genero;
};

/* Metodos agregados al prototipo de la function, constructora */
    //Metodos
    Animal.prototype.sonar = function() {
        console.log("Hago sonidos porque estoy vivo");
      }
      
    Animal.prototype.saludar = function() {
        console.log(`Hello my name is ${this.nombre}`);
      }

const firu = new Animal("Firu","Hembra");
    lolaBunny = new Animal("Lola Bunny","Hembra");

console.log(firu);
console.log(lolaBunny);

firu.saludar();
firu.sonar();

lolaBunny.saludar();
lolaBunny.sonar();

//Esto se utliza para ahora memoria