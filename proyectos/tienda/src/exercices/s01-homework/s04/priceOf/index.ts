// Enunciado: guardar por id cada producto
// Autor: Sara Jimenez Lara
// Investigación: Fuentes consultadas
//

import type { Product } from "../../../types/product";

//--------Importados---------

export function priceOf(myProducts: Product[], id: number): number | null {
  return myProducts
    .find(product => product.id === id)?.price ?? null
}

