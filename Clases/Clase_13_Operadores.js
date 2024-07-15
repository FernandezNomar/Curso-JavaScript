
/*Operadores*/
/*Artiemticos: +, -, *, /, %, () */

let a = 5 + (5  -10) * 3;

/* El modulo "%" siempre nos dara el residuo de la division */
let modulo = 5 % 2;

console.log(a);
console.log(modulo);

/* Relacionales: <, >, >=, <=, ==, ===, !=, !== */

console.log(8 < 9);
console.log(8 > 9);
console.log(8 >= 9);
console.log(8 <= 9);
console.log(7 < 7);
console.log(7 <= 7);

/* 
= 1 igual es asignacion de varibales 
== 2 igaules es comparacion de valores
=== 3 iguales es comparacion de tipo de dato y de valor
*/

console.log(7 == 7);
console.log("7" == 7);
console.log(0 == false);
console.log(7 === 7);
console.log("7" === 7);
console.log(0 === false);

/* Incremento y Decremento */

let i = 1;

//i = i + 2;
/* Tambien se puede poner como, taambien se puede hacer con otros 
operadores como i /= 2 o i*=2 */  
i += 2

console.log(i);

/* Operadores unario */
// Es igual para expresar el --(Nombre de la variable)
let b = 1;

/* Lo que nos dice el ++ depues de la variable es que primero imprime la
variable y despues sumale 1 */
// Nota: Este es el que se debe usar el otro es considerado mala practica
console.log(b++);

/* Lo que nos dice el ++ antes de la variable es que primero le sume 1
y despues imprima la variable*/
console.log(++b);

/* Logicos
! - Not, Es decir lo que es verdadero lo vuelve falso
|| - Or, Cuando tengo 2 o mas condicones con que una se cumpla
el Or lo dara como verdaero
&& - And, Cuando tengo 2 o mas condicones todas se deben cumplir
el And lo dara como verdaero, si alguna es falso todas daran falso*/

console.log(!true);
console.log(!false);
console.log((9 === 9)||("9" === 9));
console.log((9 === 9)&&("9" === 9));
console.log((9 === 9)&&("9" === "9"));


