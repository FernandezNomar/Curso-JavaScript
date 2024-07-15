
/* alert: manda una laera */ 
let alerta = window.alert("Hola esto es una alerta"),

/* corfirm: manda un mensaje para corfirmar o negar */
confirmacion = window.confirm("Hola esto es una corfirmacion"),

/* prompt: permite que el usurio ingrese un valor */
aviso = window.prompt(`Hola esto es un prompt y le permite al usuario
ingresar un valor`);

/* alert siempre nos dara undefined por eso no es bueno guardarla 
en una variabñe */
console.log(alerta);

/* confirm nos deveolvera true o false dependiendo de lo que 
seleccione el susurio */
console.log(confirmacion);

/* propmt devolvera lo que usuario halla escrito y si lo deja vacio 
devolvera un array vacio */
console.log(aviso);

