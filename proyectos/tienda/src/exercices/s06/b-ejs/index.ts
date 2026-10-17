// Enunciado:  Map para cada X su Y
// Autor: Sara Jimenez Lara
// Investigación: Fuentes consultadas
//

//B-1 goles por jugador
export function goalsByPlayer(goals: string[]): Map<string, number> {
  const map = new Map<string, number>()
  for (const goal of goals) {
    map.set(goal, (map.get(goal) ?? 0) + 1)
  }
  return map
}

//B-2 maximo goleador
export function topScorer(count: ReadonlyMap<string, number>): string | undefined {
  let mejorGoleador = undefined
  let goles = 0
  for (const [player, goals] of count) {
    if (goals > goles) {
      goles = goals
      mejorGoleador = player
    }
  }
  return mejorGoleador
}

//B-3 Libros por autor
export interface Book {
  title: string
  author: string
}
export function titlesByAuthor(books: Book[]): Map<string, string[]> {
  const map = new Map<string, string[]>()
  for (const book of books) {
    const current = map.get(book.author) ?? []
    map.set(book.author, [...current, book.title])
  }
  return map
}

//B-4 Capitales
export function capitalOf(capitals: ReadonlyMap<string, string>, country: string): string {
  const map = capitals.get(country)
  if (map === undefined) {
    return `No conozco ${country}`
  }
  return `La capital de ${country} es ${map}`
}
