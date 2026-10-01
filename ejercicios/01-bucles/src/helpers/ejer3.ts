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

//Obten las medias de todos los alumnos(solo la media)
const obtenerMedias=(alumnado:Alumno[]):number[]=>{
  const medias: number[]= []
  for(const notas of alumnado){
    let suma = 0
    for(const nota of notas.notas){
      suma += nota
    }
    medias.push(suma/notas.notas.length)
  }
  return medias
}
//Obtener el alumno con mejor media
const obtenerMejorAlumno=(alumnado:Alumno[]):string=>{
  let mediaAlta = 0
  let alumnoMas = ''
  const medias = obtenerMedias(alumnado)
  const nombres = obtenerNombreV2(alumnado)
  for(let i=0;i< medias.length; i++){
    if(mediaAlta<medias[i]){
      mediaAlta=medias[i]
      alumnoMas=nombres[i]
    }
  }
  return alumnoMas
}
//-------Inicializar el ejercicio-----------
console.log("El nombre de los alumnos es: ")
console.log(obtenerNombreV2(alumnado))
console.log("Las medias de las notas de los alumnos son: ")
console.log(obtenerMedias(alumnado))
console.log("Y el alumno con mas media es: ")
console.log(obtenerMejorAlumno(alumnado))

