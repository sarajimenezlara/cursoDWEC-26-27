/* ejercicio 1 de JavaScript
//
console.log("Hola mundo");
//tipos de datos en Js 
//
//String y Number
// ' ' " " ` `
//var se ve donde sea(NO usar), let(USAR) ,const es constante (USAR)
let nombre = "Sara"
let apellidos = "JL"
let aniosTrabajo = 25
console.log(`Hola a todos, me llamo ${nombre},${apellidos} y llevo trabajando ${aniosTrabajo} años`) 
console.log(typeoff(String(aniosTrabajo)))
console.log(typeoff(Number(apellidos)))

//validaciones basicas == ===
//
//== <-- significa si el valor de la izquierda es igual al valor de la derecha
//
//'a' == 'b' //da false 
//'5' == 5 //da true 

//=== <-- signfica si el valor y tipo de la izquierda coincide con el valor y tipo de la derecha
//
//'a' === 'a' //da true 
//'5' === 5 //da false 

//ternarias evaluacion_expresion ? verdadero : falso 
// 
const edad = "23"
edad > 18 ? console.log("Eres mayor de edad") : console.log("Eres menor de edad")
*/

//Dada la edad los minutos y los segundos. Comprobar, primero, si la edad es un numero positivo y mayor que 18, segundo, comprobar si la hora y los minutos son validos de mi sistema de numeracion
//
let edad = 16
edad > 0 && <= 18 ? console.log("Eres mayor de edad"): console.log("Eres menor de edad")
let hora = 12 
let minutos =34
hora < 24 && >= 0 ? console.log("La hora esta correcta"): console-log("La hora esta incorrecta")
minutos <= 60 && >= 0 ? console.log("Los minutos estan correctos"): console.log("Los minutos estan incorrectos") 
