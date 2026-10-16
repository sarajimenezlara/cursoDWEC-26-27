// Enunciado: opcion economica para comprar
// Autor: Sara Jimenez Lara
// Investigación: Fuentes consultadas
//

import type { Product } from "../../../types/product";

export function cheapestAvailable(myProducts: Product[]): Product | undefined {
  return myProducts
    .filter(product => product.stock > 0)
    .toSorted((a, b) => a.price - b.price)[0]
}
