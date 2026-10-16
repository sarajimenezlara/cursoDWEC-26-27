// Enunciado: conseguir la categoria de los productos
// Autor: Sara Jimenez Lara 
// Investigación: Fuentes consultadas
//
// ----------Importados--------

import type { Category, Product } from "../../../types/product";

export function byCategory(myProducts: Product[], category: Category): Product[] {
  return myProducts
    .filter(product => product.category === category)
}

