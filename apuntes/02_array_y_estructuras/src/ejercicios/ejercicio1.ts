// Enunciado: Ejercicio uso de array y tipado
// Autor: Sara Jimenez Lara
// Investigación: Fuentes consultadas

//como tipabamos un array:
const activos: boolean[] = [true, false, true, true];
cosnt nombres: string[] = ["pepe", "luis", "carlos"];
// nueva forma:
const edades: Array<number> = [12, 22, 18];
const precios = [65, 34, 23];
console.log(typeof precios);
//array con mas de un tipo
const valores: (string | number)[] = ["Ana", 25, "luis", 56]
//comodo pero para empezar mejor mo
const persona: [string, number] = ["Ana", 45]
//leer elemento de un array
console.log(nombres[0]) //<-- "pepe"
nombres[0] = "Don Pepe"
//insertar eliminar en ultimo lugar y al comienzo del array
//El metodo push mut el array (modifica el contenido del array, prohibido en react)
nombres.push("Sara")
//eliminar el ultimo elemento de un array
console.log(nombres.pop())//<-- ademas este devuelve el nuevo array modificado
//añadir el comienzo de array
nombres.unshift("pedro")
//eliminar el comienzo del array
nombres.shift()
//metodos que mutan y no mutan
//push(),pop(),shift(),unshift(),splice(),sort(),reverse() <-- todos estos mutan el array
//metodo slice() <-- devuelve una parte del array sin mutarlo
const numeros: number[] = [10, 20, 30, 40, 50]
const parte: Array<number> = numeros.slice(1, 4) //[20,30,40] <-- coge la primera posicion pero no coge la ultima
//metodo splice <-- elimina, añade o sustituye elementeos del array
numeros.splice(1, 2) // <-- [10,40,50]
//Copiar arryas Spreand Operator **********************************************
const num: number[] = [1, 2, 3]
const copia: number[] = [...num] // <-- tiene una copia con [1,2,3]
const copia2 = [...num, ...copia]
//Recorrer un array:
//for(i=0;i<num.length;i++)
// for of
for (const precio of precios) {
  console.log(precio)
}
//forEach() se usa mucho en react
//Se usara el forEach() cda vez que queramo hacer algo con cada uno de los elementos de un array..
//Se parece al map pero el map es mas potente en muchas cosas
precios.forEach((precio: number, indice: number) => {
  console.log(`Precio: ${precio ** 2} - Posicion: ${indice}`)
})
//metodos que usan funciones CallBack
//forEach(),map(),flter(),find() <-- ****** muy importantes para react
//un callback es una funcion por tanto esos metodos reciben como parametro una funcion

