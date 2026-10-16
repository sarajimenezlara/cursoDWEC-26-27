// Enunciado: mostrar cantidad de produtos distintos
// Autor: Sara Jimenez Lara
// Investigación: Fuentes consultadas
//

import type { Product } from "../../../types/product"

export interface Summary {
  products: number
  units: number
  value: number
}
export function summary(myProducts: Product[]): Summary {
  return myProducts.reduce((acumulador, p) => ({ products: acumulador.products + 1, units: acumulador.units + p.stock, value: acumulador.value + p.price * p.stock }), { products: 0, units: 0, value: 0 })
}
