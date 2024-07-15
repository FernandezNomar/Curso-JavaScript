
const a = [];
const b = [1, true, "Hola", ["A", "B", "C", [1, 2, 3]]];

console.log(b);
console.log(b.length);
console.log(b[3][2]);
console.log(b[3][3][0]);

const c = Array.of("X", "Y", "Z", 9, 8, 7);
console.log(c);

const d = Array(10).fill(false);
console.log(d);

const colores = ["Azul", "Verde", "Rojo"];
console.log(colores);

colores.push("Negro");
console.log(colores);

colores.pop();
console.log(colores);

//Nos permite ejecutar una funcion para elemento del array
colores.forEach(function (el, index) {
    console.log(`<li id="${index}"> ${el} </li>`);
})