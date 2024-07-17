// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
console.log("Ejercicio 1");

const contarCaracteres = (cadena = "") => 
    (!cadena)
        ?console.warn("No ingrasaste ninguna cadena")
        :console.info(`La cadena "${cadena}" tiene "${cadena.length}" caracteres`);


contarCaracteres("Hola mundo");
contarCaracteres();

// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
console.log("Ejercicio 2");

const recortarCaracteres = (cadena = "", longitud = undefined) =>
    (!cadena)
        ?console.warn("No ingrasaste ninguna cadena")
        :(longitud === undefined)
        ?console.warn("No ingrasaste la longitud para recortar el texto")
        :console.info(`La cadena "${cadena}" ahora es "${cadena.slice(0,longitud)}"`);

recortarCaracteres();
recortarCaracteres("Hola mundo",4);
recortarCaracteres("Hola Hola");
recortarCaracteres("",4);

// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
console.log("Ejercicio 3");

const dividirCadena = (cadenaADividir = "", separador = undefined) =>
    (!cadenaADividir)
    ?console.warn("No ingrasaste ninguna cadena")  
    :(separador === undefined)
        ?console.warn("No ingrasaste el caracter separador")
        :console.info(cadenaADividir.split(separador));

dividirCadena();
dividirCadena("Hola que tal"," ")
dividirCadena("Hola mundo")
dividirCadena(""," ")

// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
console.log("Ejercicio 4");

const repetirCadena = (cadenaARepetir = "", repetidor = undefined) =>{
    if (!cadenaARepetir) return console.warn("No ingrasaste ninguna cadena");
    
    if (repetidor === undefined) return console.warn("No ingresaste el numero de veces a repetir el texto");
    
    if (repetidor === 0) return console.error("El numero de veces no puede ser 0");
    
    if (Math.sign(repetidor) === -1) return console.error("El numero de veces no puede ser negativo"); 

    for (let i = 1; i < repetidor; i++) console.info(`${cadenaARepetir}, ${repetidor}`)

};

repetirCadena();
repetirCadena("Hola mundo", 3);
repetirCadena("Hola mundo", 0);
repetirCadena("", 3);
repetirCadena("Hola mundo", -1);