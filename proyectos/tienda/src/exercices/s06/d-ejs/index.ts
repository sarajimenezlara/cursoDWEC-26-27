// Enunciado: Funciones que reciben y devuelven funciones
// Autor: Sara Jimenez Lara
// Investigación: Fuentes consultadas
//

//D-1 Aplicar una regla a todos los precios
export type PriceRule = (price: number) => number;

const addVat: PriceRule = (price) => price * 1.21

export function applyToAll(prices: number[], rule: PriceRule): number[] {
  return prices.map(rule)
}

//D-2 Fabrica de descuentos
export function createDiscount(percent: number): PriceRule {
  return (price) => price - price * percent / 100
}

//D-3 Ordenar peliculas
export interface Movie {
  title: string,
  year: number,
  rating: number,
}
export type MovieOrder = (a: Movie, b: Movie) => number;
export const byYear: MovieOrder = (a, b) => a.year - b.year
export const byRatingDesc: MovieOrder = (a, b) => b.rating - a.rating
export function sortMovies(movies: readonly Movie[], order: MovieOrder): string[] {
  return movies.toSorted(order).map(movie => movie.title)
}
