/* 
// export default//

Si es constanteo variable primero haces la asigancion 
y al final exportar

y si es una funcion o una clase puedes colgar la palabra default
despues antes de crearla
*/

export const PI = Math.PI;

export let usuario = "Nomar";

const password = "14201013";
// export default password;

//Esto esta mal :
// export default let  password = "14201013";


//funcion expresada
const hello = ()=> console.log("hola");

/* No se pueden tener dos "export default", 
solo se puede tener uno */ 

//funcion definida
export default function saludar() {
    console.log("Hola Modulo +ES6");
};

export class Saludar {
 constructor(){
    console.log("Hola Clases +ES6");
 }
};


