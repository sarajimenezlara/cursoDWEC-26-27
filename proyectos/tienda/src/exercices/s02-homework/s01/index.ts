// Enunciado: Unidades totales
// Autor: Sara Jimenez Lara
// Investigación: Fuentes consultadas

import type { Product } from "../../../types/product";

//
export function totalUnits(myProducts: Product[]): number {
  return myProducts
    .reduce((totalStock, product) => totalStock + product.stock, 0)
}

