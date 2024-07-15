/* Depues que el try catch encuentra un error no imprime ni realiza 
lo que este por debajo de este pero si lo que esta por ensima */

try {
   console.log("En el try se agrega el codigo aevaluar"); 
   noExiste
   console.log("Segundo mensaje en el try");
} catch (error) {
    console.log("catch captura cualquier error captado en el try");
    console.log(error);
}finally{
    console.log("El bloque finally se ejecutara sienmpre al final de un bloque try-catch")
};

/* isNaN es una funcion que si tu le pasas un numero en el cual si 
es un numero false y si no es un numero te devuelve un true */

try {
    let numero = "y";

    if (isNaN(numero)){
      throw new Error("El carapter introducido no es un Numero");  
    }
    console.log(numero * numero);
} catch (error) {
    console.log(`Se produjo el siguiente error: ${error}`);
}