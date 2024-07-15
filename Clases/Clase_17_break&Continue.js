
/* Estas palabras nos ayudara a controlar nuestra estructura 
de control o loot */

const numero = [1,2,3,4,5,6,7,8,9,0];

console.log("Ejemplo con break");

for (let i = 0; i < numero.length; i++) {
    if (i === 5) {
 /* La usamos para salir en la estructua que esta */
        break
    }
 console.log(numero[i]);
 };
console.log("Ejemplo con continue");

 for (let i = 0; i < numero.length; i++) {
    if (i === 5) {
 /* La usamos para omitir el una iteracion del loot 
 pero sin salir de este */
        continue
    }
 console.log(numero[i]);
 };

console.log("Ejercicio imprimir numero impares del arreglo");

for (let i = 0; i < numero.length; i++) {
    if (i%2) {
        continue
    }
 console.log(numero[i]);
 };