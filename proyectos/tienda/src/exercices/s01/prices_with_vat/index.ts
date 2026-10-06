// Enunciado: un array con los precio de los productos que tengo y el IVA
// Autor: Sara Jimenez Lara
// Investigación: Fuentes consultadas
//
//------------------Importaciones--------------
import type { Product } from "../../../types/product";


//Recibe una lista de productos y promete devolver una lista de numeros con el precio incluyendo al IVA
const vat = 0.21
export function pricesWithVat(myProducts: Product[]): number[] {
  myProducts.map(product => Math.round(product.price * (1 + vat)))
}
