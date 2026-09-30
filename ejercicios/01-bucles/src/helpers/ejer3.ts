//Ejercici uso de filter map y otros en TypeScript
//Crear programa que muestre el nombre de todos los alumnos
//Calcule la nota media de cada alumno
//Mostrar alumno con nota media mas alta
//Calcular la media global en clase
//    {nombre: "Luis", edad: 22, notas: [5,4,6,3]}
//    {nombre: "Caudia", edad: 19, notas [9,2,7,5]}
//    {nombre: "Daniel", edad: 23, notas [9,6,7,5]}
//    {nombre: "Fran", edad: 17, notas [1,9,3,2]}
//    {nombre: "Elisa", edad: 20, notas [4,7,9,6]}
//    {nombre: "Ramon", edad: 25, notas [9,8,6,9]}
//Para declarar tipo de objetos en typescript uso type y el objeto comienza siempre en mayuscula.

//---- declaracion de tipo ----
type Alumno = {
nombre: string;
edad: number;
notas: number[];
}
//-------declaracion de variables-------------
const alumnado: Alumno[]=[
    {nombre: "Luis", edad: 22, notas: [5,4,6,3]},
    {nombre: "Caudia", edad: 19, notas [9,2,7,5]},
    {nombre: "Daniel", edad: 23, notas [9,6,7,5]},
    {nombre: "Fran", edad: 17, notas [1,9,3,2]},
  {nombre: "Elisa", edad: 20, notas [4,7,9,6]},
  {nombre: "Ramon", edad: 25, notas [9,8,6,9]},
]

//Obten los nombres de los alumnos (solo los nombres)
function obtenerNombres(alumnos: Alumno[]){
return alumnos.map((alumno)=> alumno.nombre)
}
const obtenerNombreV2=(alumnos: Alumno[])=> alumnos.map((alumno)=>alumno.nombre)

//-------Inicializar el ejercicio-----------
console.log("El nombre de los alumnos es: ")
console.log(obtenerNombres(alumnado))
