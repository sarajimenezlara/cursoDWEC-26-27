// Enunciado: Ejercicios repaso de metodos de los arrays
// Autor: Sara Jimenez Lara
// Investigación: Fuentes consultadas
//--------------------declaracion de variables-----------
const notas: number[] = [6, 8, 4, 9, 7]
//-------------------declaracion de funciones------------
//funcion que muestre todas las notas
/**
 *  funcion que muestra el valor de las notas pasadas como parametros
 * @param notes Descripción
 */
function showNotes(notes: number[]): void {
  console.log(...notes)// verificarlo
}
//funcion que calcule la media de las notas
function calculateAverage(notes: number[]): void {
  let suma = 0
  for (const note of notes) {
    suma += note
  }
  console.log("La media es: ", suma / notes.length)
}
const calculateAveragePro = (notes: number[]) => {
  let suma: number = 0
  notes.forEach((note: number) => suma += note)
  console.log("La media es: ", suma / notes.length)
}
//1 funcion que muestre la mayor nota y la posicion de esa nota
function bestNote(notes: number[]): void {
  let mejor = 0
  let posicion = 0
  for (let i = 0; i < notes.length; i++) {
    if (notes[i] > mejor) {
      mejor = notes[i]
      posicion = i
    }
  }
  console.log("La nota mas alta es: ", mejor, " y la posicion es: ", posicion)
}
//2 funcion que calcule la mediana de las notas
function calculateMedium(notes: number[]): void {
  const ordenado = [...notes].sort((a, b) => a - b)
  const medio = Math.floor(ordenado.length / 2)
  let numMedio = 0
  if (ordenado.length % 2 === 0) {
    numMedio = (ordenado[medio - 1] + ordenado[medio]) / 2
  } else {
    numMedio = ordenado[medio]
  }
  console.log("La mediana es de: ", numMedio)
}
//3 funcion que devuelva un array con notas junto con la nota pasada como parametro
function addNote(notes: number[], newNote: number): number[] {
  return [...notes, newNote]
}
//4 funcion que elimina una nota, recibe 
//el array de notas y como segundo parametro 1 o -1, si es 1 elimina la primera posicion del array y devuelve una copia, si es -1 se 
//elimina la ultima posicion del array y devuelve una copia. NO mutamos el array del parametro, ojo, y me lo demostrais haciendo un clg del array del parametro para asegurar que
//no lo has mutado
function deleteGrade(notes: number[], t: (1 | -1)): void {
  const copyNotes = [...notes]
  if (t === 1) {
    copyNotes.shift()
  } else if (t === -1) {
    copyNotes.pop()
  }
  console.log("CopyNotes: ", copyNotes)
  console.log(notes)
}
//--------------------funcion de ejercucion------------
export function ejercicio2(): void {
  showNotes(notas)
  calculateAverage(notas)
  calculateAveragePro(notas)
  deleteGrade(notas, 1)
  bestNote(notas)
  calculateMedium(notas)
  console.log(addNote(notas, 5))
}
