// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
console.log("Ejercicio 12");

const numeroPrimo = (numero = undefined) =>{
    if (!numero) return console.warn("No has ingresado ningun numero");

    if (typeof numero !== "number") return console.error(`El valor "${numero}" ingresado. No es un numero`);

    if (Math.sign(numero) === -1) return console.error("El numero no puede ser negativo"); 

    if (numero === 0) return console.warn("El numero no puede ser 0");

    if (numero === 1) return console.warn("El numero no puede ser 1");

    let divisible = false;
    
    for (let i = 2; i < numero; i++){
        if ((numero % i) === 0) {
            divisible = true;
            break;
        }
    }
   return (divisible)
    ? console.info(`El numero ${numero}, No es un primo`)
    : console.info(`El numero ${numero}, Si es un primo`)
}

numeroPrimo();
numeroPrimo("320");
numeroPrimo(0);
numeroPrimo(1);
numeroPrimo(-50);
numeroPrimo(true);
numeroPrimo(7);
numeroPrimo(6);

// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
console.log("Ejercicio 13");

const numeroParEImpar = (numero = undefined) =>{
    if (numero === undefined) return console.warn("No has ingresado ningun numero");

    if (typeof numero !== "number") return console.error(`El valor "${numero}" ingresado. No es un numero`);

   return (numero % 2 === 0)
    ? console.info(`El numero ${numero}, Si es par`)
    : console.info(`El numero ${numero}, No es par`)
}

numeroParEImpar();
numeroParEImpar("320");
numeroParEImpar(0);
numeroParEImpar(1);
numeroParEImpar(-50);
numeroParEImpar(true);
numeroParEImpar(7);
numeroParEImpar(6);

// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
console.log("Ejercicio 13");

const convertirGrados = (grados = undefined, unidad = undefined) =>{
    if (grados === undefined) return console.warn("No has ingresado grados a convertir");

    if (typeof grados !== "number") return console.error(`El valor "${grados}" ingresado. No es un numero`);

    if (unidad === undefined) return console.warn("No has ingresado tipo de grado a convertir");

    if (typeof unidad !== "string") return console.warn(`El valor ${unidad}. No es una cadena de texto`);

    if(unidad.length !== 1 || !/(C|F)/.test(unidad)) return console.warn("Valor de unidad no reconocido");

    if(unidad === "C"){
        return console.info(`${grados} C = ${Math.round((grados*(9/5))+32)} F`)
    }else if(unidad === "F"){
        return console.info(`${grados} F = ${Math.round(((grados-32) * (9/5)))} C`)
    }
};

convertirGrados();
convertirGrados("hola","hola");
convertirGrados(10,true);
convertirGrados(10,10);
convertirGrados(10,"E");
convertirGrados(0,"C");
convertirGrados(32,"F");