// Enunciado: 
// Autor: Sara Jimenez Lara
// Investigación: Fuentes consultadas
//
//
export type Priority = 'low' | 'medium' | 'high';

export interface Task {
  readonly id: number;
  title: string;
  priority: Priority;
  done: boolean;
}
