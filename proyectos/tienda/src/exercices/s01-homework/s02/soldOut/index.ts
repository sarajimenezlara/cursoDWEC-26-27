// Enunciado: devolver productos agotados
// Autor: Sara Jimenez Lara
// Investigación: Fuentes consultadas
//

import type { Product } from "../../../types/product";

export function soldOut(myProducts: Product[]): string[] {
  return myProducts
    .filter(product => product.stock === 0)
    .map(product => product.name)
} 
