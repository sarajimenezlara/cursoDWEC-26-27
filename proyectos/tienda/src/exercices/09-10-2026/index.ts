// Enunciado: Crear una funcion que permita añadir producto a mi Data
// Autor: Sara Jimenez Lara
// Investigación: Fuentes consultadas

import { products } from "../../data/products";
import type { Product } from "../../types/product";
import type { Cart } from "../../types/cart";

// const copy = [...products]
const original = { name: 'teclado', price: 80 }
const other = original //esta copia puede mutar el original
other.price = 0
console.log(original.price)
//original -------
//                | ------ { name: 'teclado',price:0}
//other -------
const copy { ...original }

export type NewProduct = Omit<Product, 'id'>
//crea un nuevo tipo igual ques products pero si
//crear una funcion que me actualice el precio de los productos, le pao id y el nuevo precio
export function updatePrice(list: Product[], id: number, price: number): Product[] {
  return list.map(p => p.id === id ? { ...p, price } : p
  )
}

export type ProductChanges = Partial<Omit<Product, 'id'>>
//quita el id de producto, y lo que queda hazlo opcional
//
//crear un tipo llamdo Cartline que tenga el id del producto y la cantidad a comprar
//recuerda exportarlo
//
//añadir elmentos al carrito
function updateProduct(list: Product[], id: number, changes: ProductChanges): Product[] {
  return list
    .map(p => {
      return p.id === id ? { ...p, ...changes } : p
    })
}
//borrar elementos del carrito
function deleteProduct(list: Product[], id: number): Product[] {
  return list.filter(p => p.id !== id)
}
//obtener el total del carrito
export function cartTotal(cart: Cart): number {
  return cart
    .map(line => {
      const product = products.find(p => p.id === line.productId)
      return product ? product.price * line.quantity : 0
    })
    .reduce((acc, subtotal) => acc + subtotal, 0)
}

