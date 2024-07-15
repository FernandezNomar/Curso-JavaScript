
/* Funcion Anonima Autoejecutable: Siginifica que es una funcion 
en la que englobas todo el codigo que quieras ejecutar y como su 
nombre da a entender no tienen nombre. Ademas esta debe siempre tener
su ";" ya que si no se concatenan con la siguientes funciones y estas
se comporta de formas extrañas */

// Funcion anonima autoejecutable

(function (){
console.log("Mi primer IIFE: Immediately Invoked Function Expression");
})();

/* Esto nos puede servir en caso de que tengamos que tratar mucho 
con HTML por ejemplo a la hora de hacer un carrucel de imagenes 
trendeme que llamar mucho a document asi es una forma de abreviar 
porque dentro de esta funcion anonima los mismo pasa con windows y 
consoles ahora se puede poner como c.log("hola") */
(function (d, w, c){
console.log("Mi segunda IIFE: Immediately Invoked Function Expression");
console.log(d);
console.log(w);
c.log("Este es un console.log");

})(document,window,console);

/* Formas de escribir las funciones Anonimas Autoejecutables */

//Clasica
(function (){
    console.log("Version CLasica");
})();

//La Crockford (JavaScript The Good Patrs)
((function (){
    console.log(`Version Crockford`);
})());

//Unaria
+function(){
    console.log("Version Unaria");
}();

//Facebook
!function (){
    console.log("Version Facebook");
}();