// Enunciado: catalogo agrupado por categorias y precios de menor a mayor
// Autor: Sara Jimenez Lara
// Investigación: Fuentes consultadas
//

import type { Product } from "../../../types/product";


export function catalog(myProducts: Product[]): string[] {
  return myProducts
    .toSorted((a, b) => a.category.localeCompare(b.category) || a.price - b.price)
    .map(product => `${product.category}. ${product.name}. ${product.price}€`)
}
