// Enunciado:  Ejercicio del uso Crud en un carrito
// Autor: Sara Jimenez Lara
// Investigación: Fuentes consultadas
//

import type { Cart } from "../../types/cart";

export function addToCart(cart: Cart, productId: number): Cart {
  const exits = cart.some(p => p.productId === productId)
  if (exits) {
    return cart
      .map(p => {
        return p.productId === productId ? { ...p.quantity + 1 } : p
      })
  } else {
    [...cart, { productId, quantity: 1 }]
  }
}

export function removeFromCart(cart: Cart, productId: number, cantidad: number): Cart[] {
  return cart
    .filter(p => p.productId !== id)
}

export function cartTotal(cart: Cart[]) {

}
