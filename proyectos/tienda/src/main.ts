// Enunciado: Proyecto creacion de uan tienda
// Autor: Sara Jimenez Lara
//

//------------Importaciones-----------
import type { Product } from "./types/product"
import { products } from './data/products'
import { pricesWithVat } from "./exercices/s01/prices_with_vat"
import { soldOut } from "./exercices/s02/soldOut"
import { byCategory } from "./exercices/s03/forCategory"
import { priceOf } from "./exercices/s04/priceOf"
import { canBuy } from "./exercices/s05/canBuy"
import { totalUnits } from "./exercices/s02-homework/s01"
import { cheapestAvailable } from "./exercices/s02-homework/s02"
import { catalog } from "./exercices/s02-homework/s03"
import { summary } from "./exercices/s02-homework/s04"
//mostrar todos los productos
console.log("Catalogo de productos TechStore", products)

// mostrar el primer producto
const first: Product | undefined = products[0]
console.log("Primer producto: ", first)

//mostrar del primer producto precio.
console.log("Precio del primer producto", first.price)

console.log(pricesWithVat(products))
console.log(soldOut(products))
console.log(byCategory(products, 'audio').map((p) => p.name))
console.log(byCategory(products, 'monitors').map((p) => p.name))
console.log(priceOf(products, 3))
console.log(priceOf(products, 99))
console.log(canBuy(products, 1, 2))
console.log(canBuy(products, 1, 6))
console.log(canBuy(products, 2, 1))
console.log(canBuy(products, 99, 1))
console.log(canBuy(products, 1, 0))

console.log("Bateria de ejer 2")
console.log(totalUnits(products), totalUnits([]))
const cheapest = cheapestAvailable(products)
if (cheapest !== undefined) {
  console.log(cheapest.name)
}

console.log(cheapestAvailable([]))

console.log(catalog(products))

console.log(summary(products))
console.log(summary([]))

