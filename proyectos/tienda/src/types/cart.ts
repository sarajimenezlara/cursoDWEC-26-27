//crear un tipo llamdo Cartline que tenga el id del producto y la cantidad a comprar
//recuerda exportarlo

import type { Product } from "../../types/product";

export interface CartLine {
  productId: number
  quantity: number
}

export type Cart = CartLine[]

