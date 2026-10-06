// Enunciado: Proyecto creacion de uan tienda
// Autor: Sara Jimenez Lara
//

//------------Importaciones-----------
import type { Product } from "./types/product"
import { products } from './data/products'
//mostrar todos los productos
console.log("Catalogo de productos TechStore", products)

// mostrar el primer producto
const first: Product | undefined = products[0]
console.log("Primer producto: ", first)

//mostrar del primer producto precio.
console.log("Precio del primer producto", first.price)
