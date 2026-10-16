import { products } from "../../data/products";


products.map(p => p.category)

//solucion : usar un set para tener los valores
//no usa posiciones

//como se declara: new Set<tipo>()
//
const type = new Setzama
//como se añada
//
tags.add('ciencia ficcion')
tags.add('terror')
tags.add('terror')
//asi se quedaria el diseño de este set
//
tags.size //-2

//como se si un elemento esta dentro dek set
tags.has('Terror')//true muy rapido
//como se borra
//
tags.delete('Terrorrrrr') //<-- false porque no existe y por tanto no borra

const categoriasNoRepetidas = new Set<string>(...products.map(p => p.categoory)
//Crea una funcion que le pase como parametro un array de numeros y devuevlva true/false si hay repetido o no
 export function hasDuplicates(ids: number[]): boolean {
  return new Set(ids).size !== ids.length

}
hasDuplicates([3, 4, 2, 1, 3, 4, 5]) //true porque hay repetidos


//ejemplificamos con un set una lista de peliculas ya vistas
//crear una funcion que llamemos fistView que reciba un array de ids de peliculas y devuelva un number o undefined con la primera pelocula repetida o que e visto mas de una vez
export function firstView(ids: number[]): number | undefined {
  const see = new Set<number>()
  for (const id of ids) {
    // if(see.has(id))return ids
    //see.add(id)
    see.has(id) ? ids : see.add(id)
  }
  return undefined;
}

firstView([4, 3, 2, 6, 2, 7]) //<- 4
