
import saludar, {Saludar,PI,usuario} from "./Clase_33_complementos/constante.js";
//se pueden utilizar alias cuando se llama un modulo
import {aritmetica as calculos} from "./Clase_33_complementos/aritmetica.js";

console.log("Archivos modulos");

console.log(PI,usuario);

/* 
console.log(aritmetica.sumar(5,2));
console.log(aritmetica.restar(5,2)); 
*/
console.log(calculos.sumar(5,2));
console.log(calculos.restar(5,2)); 


saludar();
let saludo = new Saludar();
saludo;