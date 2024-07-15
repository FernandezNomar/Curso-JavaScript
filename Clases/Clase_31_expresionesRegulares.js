
/* 
 Expresiones regulares:
    Son una secuencia de caracteres que forman un patron de busqueda
    principalmente utilizadas para la busqueda de patrones de cadenas 
    de caracteres.  
*/

let cadena= `Lorem ipsum dolor sit amet consectetur
adipisicing elit. Voluptatem fuga cupiditate dolores
saepe, praesentium sit eaque recusandae id sapiente
similique, kaudantium voluptatum perferendis ea iure
ad odio doloremque earum coluptate 21`;

//constructor
let expReg = new RegExp("lorem","ig");

//forma normal de hacer una expresion regular
// las banderas se expresan despues de "//"
let expReg2 = /lorem/ig;

// test prueba que esta expresion regular exista dentro de la cadena
console.log(expReg.test(cadena));

// exec devuelve un arreglo con los datos del arry en cada coincidencia 
console.log(expReg.exec(cadena));

// muestra con la forma normal
console.log(expReg2.test(cadena));
console.log(expReg2.exec(cadena));



/* las banderas son comodines que me van a permitir hacer pequelas 
modificaciones a mi expresion regular

Por ejemplo: "g" significa global y esta va a buscar todas 
             las coincidencias.

             "i" ignora mayuscular y minusculas.
*/

// Los "[]" significan un listado valido
let expReg3 = /[0-9]/;
console.log(expReg3.test(cadena));
console.log(expReg3.exec(cadena));


// Los "{}" significan repeticion 
let expReg4 = /lorem{1}/;
console.log(expReg4.test(cadena));
console.log(expReg4.exec(cadena));

// "{1,2}" eso significa que la palabra"lorem esta entre 1 y 2 veces"
let expReg5 = /lorem{1,2}/;
console.log(expReg5.test(cadena));
console.log(expReg5.exec(cadena));

let expReg6 = /lorem{3}/;
console.log(expReg6.test(cadena));
console.log(expReg6.exec(cadena));

