/**
* calcstula el average de las notas de todos los alumnos
* @param student[] array de estudiantes
* @returns Number Average fatal
* */

import type { Student } from "../types/Student";

//crear una funcion obtenga la media de las notasde los estudiantes
export function average(list: readonly Student[]): number {
  if (list.length === 0) return 0;   // dividir entre 0 daría NaN
  const total = list.reduce((sum, s) => sum + s.grade, 0);
  return total / list.length;
}
/**
 *  
 * @param student Descripción
 * @returns Descripción
 */
export function isPassed(student: Student): boolean {
  return student.grade >= 5;
}

export function passedStudents(list: Student): Student[] {
  return list.filter(isPassed);
}


