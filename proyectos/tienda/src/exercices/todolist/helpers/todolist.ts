/**
 - createTask
- toggleDone
- rename
- removeDone
- editTask
- pendingByPriority
*/

import type { Priority, Task } from "../../../types/task";
/**
 *  Funcion que crea una nueva tarea
 * @param list Array de Tareas
 * @param title:string titulo de la tarea
 * @param priority:Priority prioridad de la tarea
 */
export function createTask(list: Task[], title: string, priority: Priority): Task[] {
  const id = list.reduce((max, t) => Math.max(max, t.id), 0) + 1
  return [...list, { id, title, priority, done: False }]
}
export const toggleDone = (list: Task[], id: number): Task[] => list
  .map(t => t.id === id ? { ...t.done } : t)

/**
 *  Renombra una tarea 
 * @param list:Task[] array de task
 * @param id:number id de la lista
 
 */
export function rename(list: Task[], id: number, title: String): Task[] {
  return list.map(t => {
    const clean = title.trim()
    if (clean === '') return list
    return list.map(t => { t.id === id ? { ...t, title: clean } : t })
  }
}
/**
 *  Quita el elemento de la lista de tareas terminada
 * @param list:Task[] lista de tarea
 * @param id:number id de la lista
 */
export const removeDone = (list: Task[], id: number): Task[] => {
  return list.filter(t => t.id === id)[0]?.done ? list.filter(t => t.id !== id) : list
}
/**
 * Edita algun elemento del objeto dentro del array
 * @param list:Task[] lista de tareas
 * @param id:number id de la tarea
 * @param change :Partial<OMit<task,'id'>>
 */
export function editTask(list: Task[], id: number, changes: Partial<Omit<Task, 'id'>>): Task[] {
  return list.map(t => {
    return t.id === id ? { ...t, ...changes } : t
  })
}

const order: Record<Priority, number> = high:2, medium: 1, low: 0
export const pendingByPriority = (list: Task[]): string[] => {
  return list
    .filter(t => !t.done)
    .toSorted((a, b) => order[b.priority] - order[a.priority])
    .map(t => t.title)
}
