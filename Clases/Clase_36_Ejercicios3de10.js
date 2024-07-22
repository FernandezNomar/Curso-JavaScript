// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
console.log("Ejercicio 9");

const aleatorio = () => console.info(Math.round(Math.random()*100)+500);

aleatorio();

// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
console.log("Ejercicio 10");

const capicua = (numero = 0) =>{
    if (!numero) return console.warn("No has ingresado ningun numero");

    if (typeof numero !== "number") return console.error(`El valor "${numero}" ingresado. No es un numero`);

    numero = numero.toString();
    let alReves = numero.split("").reverse().join("");

    return (numero === alReves)
    ?console.info(`La palabra ${numero} es un numero capicua, numero al reves ${alReves}`)
    :console.info(`La palabra ${numero} no es un numero capicua, numero al reves ${alReves}`);
}
capicua();
capicua("Hola");
capicua(2002);
capicua(2004);
capicua(212.212);

// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
console.log("Ejercicio 11");

const factorial = (numero = undefined) =>{
    if (!numero) return console.warn("No has ingresado ningun numero");

    if (typeof numero !== "number") return console.error(`El valor "${numero}" ingresado. No es un numero`);

    if (Math.sign(numero) === -1) return console.error("El numero no puede ser negativo"); 

    if (numero === 0) return console.warn("El numero no puede ser 0");
    
    let factorial = 1;

    for (let i = numero; i > 1; i--) {
        factorial *= i;
    }
    return console.info(`El factorial de ${numero} es ${factorial}`);
};

factorial();
factorial("5");
factorial([1,2,3]);
factorial(0);
factorial(-5);
factorial(5);
factorial(8);