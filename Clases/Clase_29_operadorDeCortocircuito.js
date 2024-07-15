
/* 
 Cortocircuito con OR - cuando el valor de la izquierda en la 
 expresion siempre pueda validar a true, es el valor que se 
 cargara por defecto.

 Cortocircuito con AND - cuando el valor de la izquierda en 
 la expresion siempre pueda validar a false, es el valor
 que se cargara por defecto.
*/

//Parametro por defecto
function saludar(nombre = "Desconocido") {
    console.log(`Hola ${nombre}`);
};

saludar("Nomar");
saludar();

//Como se hacia antes
function saludar(nombre) {
    nombre = nombre || "Desconocido"
    console.log(`Hola ${nombre}`);
};

saludar("Nomar");
saludar();

// recuerda que existen valores que tienden a verdero 
// Con Or va dar los resultados que sean verdaderos
console.log("Cadena" || "Valor de la derecha");
console.log(21 || "Valor de la derecha");
console.log({} || "Valor de la derecha");
console.log([] || "Valor de la derecha");
console.log(0 || "Valor de la derecha");
console.log("" || "Valor de la derecha");
console.log(undefined || "Valor de la derecha");

console.log("Valores con AND &&")

// Con AND va dar los resultados que sean falso
console.log("Cadena" && "Valor de la derecha");
console.log(21 && "Valor de la derecha");
console.log({} && "Valor de la derecha");
console.log([] && "Valor de la derecha");
console.log(0 && "Valor de la derecha");
console.log("" && "Valor de la derecha");
console.log(undefined && "Valor de la derecha");