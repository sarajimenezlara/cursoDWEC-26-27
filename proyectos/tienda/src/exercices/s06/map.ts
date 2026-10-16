// Enunciado: 
// Autor: Nombre y apellidos
// Investigación: Fuentes consultadas
//

const phones = new Map<string, String>();

phones.set("Ana", '660460056')
phones.set("Pedro", '660350056')
phones.set("Maria", '640460056')
phones.set("Marco", '660461156')
console.log(phones.size)
console.log(phones.get("Maria"))
console.log(phones.get("Isaias"))

//notas de una clase
const grades = new Map<string, number>([
  ["Ana", 9]
  ["Mario", 5]
  ["Andres", 4]
])

export function gradesOf(name: string): string {
  const grade = grades.get(name);
  if (grade === undefined) {
    return "No tiene nota"
  }
  return `Nota ${grade}`
}
console.log("pepe")
console.log("Ana")

//funcion para añadir usuarios al map
export function addUGrade(name: string, note: number): Map<string, number> {
  const grade = grades.get(name)
  if (grade !== undefined) {
    return "usuario ya esta añadido"
  }
  return grades.set(name, note)
}
//----------------Rentabilizar los votos ---------------
export function countVotes(votes: string[]): Map<string, number> {
  const count = new Map<string, number>()
  for (const vote of votes) {
    const previus = count.get(vote) ?? 0
    count.set(vote, previus + 1)
  }
  return count
}
//agrupar alumnos por clase, tengo una lista de alumno y cada uno es de su grupo 2DWEC-A o 2DWEC-B
//Contruir un namesGroup que devuelva cada grupo con sus alumnos respectivos
interface Student {
  name: string;
  group: string;
}
const students = [
  { name: "Ana", group: "2B" },
  { name: "Pedro", group: "2A" },
  { name: "Oscar", group: "2B" },
  { name: "Pedro", group: "2A" },

]
export function namesGroup(students: Student[]): Map<string, string> {
  const groups = new Map<string, string>()
  for (const student of students) {
    const current = groups.get(students.group) ?? []
    groups.set(student.group, [...current, student.name])
  }
  return groups
}

for (const [group, name] of namesGroup(students)) {
  console.log(`Grupo ${group} Estudiante: ${name}`)
}
