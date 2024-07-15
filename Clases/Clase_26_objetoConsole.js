
console.log(console);
console.error("Esto es un aviso");
console.warn("Esto es un aviso");
console.info("Esto es un mensaje informativo");
console.log("Un registro de lo que ha pasado en nuestra aplicacion");

let nombre = "Nomar",
    apellido = "Fernandez",
    edad = 16;

console.log(nombre);
console.log(apellido);
console.log(edad);

console.log(nombre, apellido, edad);
console.log(`Hola mi nombre es ${nombre} ${apellido} y tengo
${edad} años.`);

/*  %s es un comido para decir que lo que le pasaremos es una 
cadena de texto */
/* %d es un comido para decir que lo que le pasaremos es un numero */
console.log(`Hola mi nombre es %s %s y tengo %d años.`, 
nombre, apellido, edad);

/* Limpia la consola  */
console.clear();

// El document es la representacion del documento html en javascript
console.log(document);

// muestras las propiedades del document
console.dir(document);

console.clear();

// son lo mismo solo que group aparecera abierto y groupCollapsed cerrado
console.group("Este curso a durado mucho");
console.log("Ahora mismo estoy en el de Javascript y apenas llevo 25/162");
console.log("Despues quiero hacer el de dise;o y programacion web");
console.log("Lueo quiero hacer el de React.js");
console.log("y por utilmo el de flexbox");
console.groupEnd();

console.groupCollapsed("Este curso a durado mucho");
console.log("Ahora mismo estoy en el de Javascript y apenas llevo 25/162");
console.log("Despues quiero hacer el de dise;o y programacion web");
console.log("Lueo quiero hacer el de React.js");
console.log("y por utilmo el de flexbox");
console.groupEnd();

console.clear();

// Mostras las propiedades en una tablita
// sort() organiza los elemento en formato alfabetico
console.log(console);
console.table(Object.entries(console).sort());

console.clear();

// console.table con un arreglo
const numeros = [1,2,3,4,5],
    vocales = ["a","b","c","d","e"];

console.table(numeros);
console.table(vocales);

// console.table con un objeto 
const perro = {
    nombre: "Firu",
    raza: "Chihuahua",
    color: "Marron"
};

console.table(perro);

console.clear();

/* Con console.time y console.timeEnd crometramos el tiempo 
que tarda en ejecutarse nuestro codigo */ 
console.time(`Cuanto tiempo tarda mi codigo`);
 const arreglo = Array(1000000);

 for (let i = 0; i < arreglo.length; i++) {   
    arreglo[i] = i;
 };

 console.timeEnd(`Cuanto tiempo tarda mi codigo`);

 console.clear();

/* Con console.count podemos llevar un cierto control de la vees que se 
ejecuta nuestro codigo */
 for (let i = 1; i <= 10; i++) {   
    console.count("codigo for");
    console.log(i)
 };

 console.clear();

/* Con console.assert es para hacer pruebas de nuestro codigo */
let x = 1,
 y = 2,
 pruebaXY = "Se esperaba que X siempre sea menor que Y";

console.assert(x > y , [x,y,pruebaXY]);

// Con console.clear limpiamos la consola
console.clear();