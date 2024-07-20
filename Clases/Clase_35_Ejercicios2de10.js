// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
console.log("Ejercicio 5");

const invertirCadena = (cadena = "") => 
    (!cadena)
    ?console.warn("No ingrasaste ninguna cadena")
    :console.info(cadena.split("").reverse().join(""));

invertirCadena("Hola mundo");

// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
console.log("Ejercicio 6");

const textoEnCadena = (cadena = "", texto = "") => {

   if (!cadena) return console.info("No ingresaste el texto largo");

   if (!texto) return console.info("No ingresaste la palabra a evaluar");

    let i = 0,
        contador = 0

// indexOf busca texto que quieres buscar en otro y si no lo encuentra te va a devolver un -1, en cambio si lo encuentra pondra la posicion del caracter en la que el texto a buscar

    while (i !== -1) {
        i= cadena.indexOf(texto,i);
       
        if (i !== -1) {
         i++;
         contador++;      
        }
    }
        return console.info(`La palabra ${texto} se repite ${contador} verces`);
};

textoEnCadena();
textoEnCadena("","mundo");
textoEnCadena("Hola mundo adios mundo","");
textoEnCadena("Hola mundo adios mundo","mundo");

// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
console.log("Ejercicio 7");

const cadenaPalindromo = (cadena = "") =>{
    
    if (!cadena) return console.info("No ingresaste ninguna palabra");

     cadena = cadena.toLowerCase();
     let alReves = cadena.split("").reverse().join("")

    return ( alReves === cadena) 
       ?console.info(`La palabra ${cadena} es un palindromo, palabra al reves ${alReves}`)
       :console.info(`La palabra ${cadena}  no es un palindromo, palabra al reves ${alReves}`);
};

cadenaPalindromo();
cadenaPalindromo("Hola");
cadenaPalindromo("Salas");


// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
console.log("Ejercicio 6");

const eliminarCaracteres = (texto = "", patron = "") =>
    (!texto)
    ?console.warn("No ingresaste un texto")
    :(!patron)
        ?console.warn("No ingresaste un patron")
        :console.info(texto.replace(new RegExp(patron,"ig"),""));
        
eliminarCaracteres();
eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5");
eliminarCaracteres("","xyz");
eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5","xyz");

//Como estamos evaluando expresione regulares podemos utilizar "[a-z]", para eliminar todas la letras de nuestra cadena de texto
eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5","[a-z]")