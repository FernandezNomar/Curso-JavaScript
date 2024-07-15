
/* Uuna function expresada se genera cuando a un variable se le accina 
el valor de una function anonima */

//Funcion expresada

const saludar = function () {
    console.log("Hola");
};
saludar();

/* Este tipo de function se debe llamar depues de crear la varible 
si se hace antes dara error */

//Arrow functions

const saludar2 = () =>{
    console.log("Hola");
};
saludar2();

/* Arrow functions cuando tiene una sola linea de codigo 
no es necesario los "{}" */
const saludar3 = (nombre) => console.log(`Hola ${nombre}`);
saludar3("Nomar");

/* Arrow functions cuando resibe un solo parametro 
no es necesario los "()" */
const saludar4 = nombre => console.log(`Hola ${nombre}`);
saludar4("Nomar");

// Function sumar

const sumar = function(a, b) {
    return a + b;
};
console.log(sumar(1,2));

// Arrow function sumar

const sumar2 = (a, b) => a + b;
console.log(sumar2(3,4));

// Arrow function de varias lineas

const functionDeVariasLineas = () => {
    console.log("Uno");
    console.log("Dos");
    console.log("Tres");
};
functionDeVariasLineas();

// Iterar array usando el metodo forEach

const numero = [1,2,3,4,5];
numero.forEach(function(el,index){
    console.log(`${el} esta en la posicion ${index}`);
});

console.log(
`
Usando arrow function con el metodo forEach

`);

//  Iterar array usando el metodo forEach usando Arrow function
numero.forEach((el,index) => console.log(
`${el} esta en la posicion ${index}`));

/* Cuando utilizamos la palabra reservada "this" hace referencia 
al mismo object */
const perro = {
    nombre: "Nomar",
    ladrar: function(){
        console.log(this)
    }
};
perro.ladrar();

/* En las arrow function "this" se conveierten en el DOM de la pagina,
es decir la function normales respetan el contexto, las arrow function
se saltan el conxteto */ 
const perro2 = {
    nombre: "Nomar",
    ladrar2:() => console.log(this)
};
perro2.ladrar2();