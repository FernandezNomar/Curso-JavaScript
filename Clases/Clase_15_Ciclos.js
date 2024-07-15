
let contador = 0;

/* ciclo while */
while(contador < 10){
 console.log("while " + contador);
 contador++;
};

/* Do while se va realizar una vez aunque la condicion no se cumpla */
do{
 console.log("Do while " + contador);
 contador++;
}while(contador < 10);

/* Ciclo for */
for (let i = 1; i < 10; i++) {
        console.log("for " + i);
    };

/* Ciclo for con array */
let numeros = [10,20,30,40,50,60,70,80,90];

for( let i = 0; i < numeros.length; i++){
    console.log("For arry " + numeros[i]);
};

/* Ciclo forin */
/* Un forin nos permite visualisar las propiedades de un objeto */

const json = {
    nombre: "Nomar",
    apellido: "Ferandnez",
    edad: 21,
};

/* Para poder llamar los valores de cada modulo se debe usr "[]" no
llamarlo con el punto porque daria undefine */

for (const propiedad in json) {
 console.log(`Key: ${propiedad}, Value: ${json
[propiedad]}`);
};

/* Ciclo forof */
/* Me permite recorrer cualquier objeto que sea iterable 
en javascript llamese una cedana de texto un array */

let cadena = "Hello world"

for (const elemento of numeros) {
    console.log("Forof " + elemento);
};

for (const caracter of cadena) {
    console.log("Forof " + caracter);
};