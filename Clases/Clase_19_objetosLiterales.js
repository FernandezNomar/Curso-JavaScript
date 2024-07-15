
let nombre = "Nomar",
    edad = 17;

const perro = {
    nombre: nombre,
    edad: edad,
    ladrar: function(){
        console.log("Guauu Guauu");
    }
};

console.log(perro);
perro.ladrar();

/* al crear una propiedad y ya existe una variable con ese mismo nombre
 la podemos expresar solo con el nombre de la variable y no afecta 
 al codigo, tambien funciona con metodos */
const dog = {
    nombre,
    edad,
    raza: "Callejero",
    ladrar(){
        console.log("Guauu Guauu Guauu!!!");
    }
};

console.log(dog);
dog.ladrar();
