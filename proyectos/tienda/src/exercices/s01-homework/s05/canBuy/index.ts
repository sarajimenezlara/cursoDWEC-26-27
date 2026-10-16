// Enunciado: es posible comprar algo antes de añadirlo al carrito?
// Autor: Sara Jimenez Lara
// Investigación: Fuentes consultadas
//

import type { Product } from "../../../types/product";

//-------Importados-------

export function canBuy(myProduct: Product[], id: number, quantity: number): boolean {
  const product = myProduct.find(producto => producto.id == id)
  if (product !== undefined && quantity > 0 && product.stock >= quantity) {
    return true
  } else {
    return false
  }
}
