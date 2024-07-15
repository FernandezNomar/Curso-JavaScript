
console.log(Date());

let fecha = new Date();

// Dia del mes
console.log(fecha.getDate());

/* Dia de la semana D L M Mi J V S -> 0 1 2 3 4 5 6 */
console.log(fecha.getDay());

/* Mes Ene Feb Mar Abr May Jun Jul Ago Sep Oct Nov Dic
-> 0 1 2 3 4 5 6 7 8 9 10 11 */
console.log(fecha.getMonth());

// Año en l que estamos
console.log(fecha.getFullYear());

// Horas, minutos, segundos
console.log(fecha.getHours());
console.log(fecha.getMinutes());
console.log(fecha.getSeconds());

// Milisegundos
console.log(fecha.getMilliseconds());

// da la fecha
console.log(fecha.toString());
// solo la fecha
console.log(fecha.toDateString());
// Hora local de una forma Humana 
console.log(fecha.toLocaleDateString());
console.log(fecha.toLocaleString());
console.log(fecha.toLocaleTimeString());


console.log(fecha.getTimezoneOffset());

// Hora Londres, es decir hora del meridiano 0
console.log(fecha.getUTCDate());
console.log(fecha.getUTCHours());

// cuanto segundos han pasado desde el primero de enero de 1970
// esto nos sirve para hacer operacion con fechas 
console.log(Date.now());

//para poder hacer operacion con el tiempo la mejor libreria es Moment.js

let cumpleNomar = new Date(2002,2,20,7,45);
console.log(cumpleNomar);
console.log(cumpleNomar.toLocaleString());