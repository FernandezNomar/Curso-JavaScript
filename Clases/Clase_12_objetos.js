
const b = {}
console.log(b);

/*dentro de un obejeto a las variable se le llamara atributos 
y a las funciones se le llamara metodos*/
const json = {
    nombre: "Nomar",
    apellido: "Ferandnez",
    edad: 21,
    pasatiempos: ["Comer", "Hacer ejercicio",
                 "Dar clases"],
    soltero: true,
    contactos: {
        email: "TuPutaMadre@gmail.com",
        twitter: "@TuPutaMadre",
        movil: "(555) 840-7056"
    },
    saludar: function () {
        console.log("Hola >:(");
    },
/*Aqui "this" se utiliza para decir que dentro del mismo objeto
coja el nombre, el apellido, la edad, etc. es como si dijera "json"
usa esto que esta dentro de ti*/
    decirMiNombre: function () {
console.log(`Hola me llamo ${this.nombre} ${this.apellido} 
y tengo ${this.edad} años y tu puta madre ${this.nombre}, 
sigueme como ${this.contactos.twitter} en twitter ahora x`);
    }
}
/*Podemos llamar uun obejto con "Nombre del objeto con "[]"
atributos/metodos" */
console.log(json);
console.log(json["nombre"]);
console.log(json["apellido"]);

/*Pero debemos hacerla a partir de puntos*/
console.log(json.contactos.email);
console.log(json.soltero);
console.log(json.pasatiempos[1]);
console.log(json.pasatiempos);

/*Como ya hay un console.log dentro de la function sola la llamamos*/
json.saludar();
json.decirMiNombre();

/*Object.keys(json) es un metodo de object que le permite listar todas
las llaves del objeto, esto como un arreglo*/
console.log(Object.keys(json));

/*Object.values(json) es un metodo de object que le permite listar todas
los valores del obejecto, esto como un array*/
console.log(Object.values(json));

/*json.hasOwnProperty es un metodo de object que le permite saber si
si tiene la propiedad que le estamos pidiendo*/
console.log(json.hasOwnProperty("nombre"));//true
console.log(json.hasOwnProperty("nacimiento"));//false porque no hay 