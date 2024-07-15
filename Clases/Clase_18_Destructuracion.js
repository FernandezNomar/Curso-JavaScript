
let numeros = [1,2,3];

//Sin destructuracion
let uno = numeros[0],
    dos = numeros[1],
    tres = numeros[2];

console.log(uno, dos, tres);

//Con destructuracion
const [one, two, three] = numeros;
console.log(one, two, three);

/* Es importante que la variable que voy a crear tenga el mismo nombre
tanto en el objeto como en la variable si no, no funcionara como cuando
se imprime "age" */
let persona ={
    nombre: "Nomar",
    apellido: "Fernandez",
    edad: 21
};

/* No importa el orden en el que la llamemos por eso tienen que tener 
el mismo nombre */
let {nombre, age, apellido} = persona;
console.log(nombre, apellido, age);