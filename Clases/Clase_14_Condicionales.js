
let edad = 21;

/* if - else */
if(edad > 17){
 console.log("Eres mayor de edad");
}else{
 console.log("Eres menor de edad");
};

if(edad >= 18){
 console.log("Eres mayor de edad");
}else{
 console.log("Eres menor de edad");
};

if(edad < 18){
 console.log("Eres menor de edad");
}else{
 console.log("Eres mayor de edad");
};

if(edad <= 17){
 console.log("Eres menor de edad");
}else{
 console.log("Eres mayor de edad");
};

/* if - else if - else */

/* 
Dejame Dormir 0hrs - 5hrs
Buenos dias 6hrs - 11hrs
Buenas tardes 12hrs - 18hrs
Buenas noches 19hrs - 23hrs
*/

let hora = 15;

if(hora >= 6 && hora <= 11){
    console.log("Buenos dias");
}
else if(hora >= 12 && hora <= 18){
    console.log("Buenos tardes");
}
else if(hora >= 19 && hora <= 23){
    console.log("Buenas noches");
}
else{
    console.log("Dejame Dormir")
};

/* Operador Ternario, (condicion) ? verdadero : falso */

let eresMayor = (edad >= 18) 
    ?"Eres mayor de edad"
    :"Eres menor de edad";
console.log(eresMayor);

/* switch - case */
/* 
Domingo - 0
Lunes - 1
Martes - 2
Miercoles - 3
Jueves - 4
Viernes - 5
Sabado - 6
*/

let dia = 0;
 switch (dia) {
    case 0:
    console.log("Domingo");        
     break;
     case 1:
    console.log("Lunes");      
     break;
     case 2:
    console.log("Martes");    
     break;
     case 3:
    console.log("Miercoles");        
     break;
     case 4:
    console.log("Jueves");      
     break;
     case 5:
    console.log("Viernes");        
     break;
     case 6:
    console.log("Sabado");        
     break;
 
    default:
        console.log("El dia no existe");
        break;
 }