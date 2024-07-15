
/* Los parametos REST: Es una forma de virtualmente ir agregando
parametros infinitos dentro de una funcion o una variable cuando 
no sabemos cuantos parametros vamos a recibir */

// Parametro REST: "..."

function sumar (a, b, ...c) {
    let resultados = a + b;

    c.forEach(function(n){
        resultados += n
    })

    return resultados;
}

/* Desde que le enviamos la tercera variable "...c" actua de esta manera
Podemos agregarle mas variables infinitamente */

console.log(sumar(1,2));
console.log(sumar(1,2,3));
console.log(sumar(1,2,3,4));
console.log(sumar(1,2,3,4,5));
console.log(sumar(1,2,3,4,5,6));
console.log(sumar(1,2,3,4,5,6,7));

/* El operador de propagacion sirve al igual que REST para agregar
Valores infinitamente pero REST es para funciones y el operador de 
propagacion para los arreglos */

const array1 = [1,2,3,4,5],
    array2 = [6,7,8,9,0];

console.log(array1, array2);

/*Como podemos ver si lo ponemos asi se convierte en un array
conformado por los "array1" y "array2" pero separados */

console.log("Sin Operador de propagacion");
const array3 = [array1, array2];
console.log(array3);

/* Ahora con el operador de propagacion podemos tomar los elementos
de los "array1" y "array2" y convertirlos en unos solo */

console.log("Con Operador de propagacion");
const array4 = [...array1, ...array2];
console.log(array4);