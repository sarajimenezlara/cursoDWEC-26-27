import { products } from "./data/products";
import type { Product } from "./types/product";

//repaso de metodo filter, find, findIndex, some, every e includes

const donde(products: Product[]): number{
  return products
    .filter(product => product.stock > 3)
    .map(product => product.name)
    .indexOf(n => n === 'Auriculares')
}
products
  .find(product => product.category === 'peripherals')

//reduce
console.log(products[0]?.vat ?? " 'No existe la clave'")

//si lo de la izquierda es null o undefined ?? entonces devuelve esto

//calcular el valor total de todos mis productos (suma de precio*stock
let total = 0
for (const p of products) {
  total += p.price * p.stock
}
//[ ].reduce((Acumulador, elementoQueItera, posicion, elArrayDEPartida) =>  , valor_inicial)
products.reduce((totalProductsValue, product) => totalProductsValue + product.price * product.stock, 0)

//sort() <- ordenar (muta)
[...products].sort()
//toSorted() no muta, ascendente
// slice() <-Bueno y splice()<- malo

