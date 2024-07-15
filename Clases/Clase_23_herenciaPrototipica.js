

function Animal (nombre,genero){
    this.nombre = nombre;
    this.genero = genero;
};

    Animal.prototype.sonar = function() {
        console.log("Hago sonidos porque estoy vivo");
      }
      
    Animal.prototype.saludar = function() {
        console.log(`Hello my name is ${this.nombre}`);
      }
// Herencia Prototipica

 function Perro (nombre, genero, tamanio) {
 // aqui se invoca el prototipo "Animal"
    this.super = Animal;
    this.super(nombre, genero);
    this.tamanio = tamanio;
 }

 //Perro esta heredando de Animal 
 Perro.prototype = new Animal();
 Perro.prototype.constructor = Perro;
 
 //Sobre escritura de metodos del Prototipo del padre en el hijo
Perro.prototype.sonar = function (){
    console.log(`Soy un perro y mi sonido es un ladrido`);
}; 

Perro.prototype.ladrar = function() {
    console.log("Guauuuu Guauuu !!!!");
};

const firu = new Perro("Firu","Hembra", "Pequeño");
    lolaBunny = new Animal("Lola Bunny","Hembra");

console.log(firu);
console.log(lolaBunny);

firu.saludar();
firu.sonar();
firu.ladrar();

lolaBunny.saludar();
lolaBunny.sonar();