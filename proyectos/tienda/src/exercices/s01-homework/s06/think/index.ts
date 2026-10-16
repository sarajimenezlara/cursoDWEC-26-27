// Enunciado: Descubre  un caso limite
// Autor: Sara Jimenez Lara
// Investigación: Fuentes consultadas
//

//---------Importados----------

import type { Product } from "../../../types/product";

export const allInStock = (myProducts: Product): boolean => myProducts.every((p) => p.stock > 0)
