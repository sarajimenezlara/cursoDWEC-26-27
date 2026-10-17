// Enunciado: set sin repetidos
// Autor: Sara Jimenez Lara
// Investigación: Fuentes consultadas
//

// A-1 etiquetas del blog
export function uniqueTags(posts: string[][]): string[] {
  return [...new Set(posts.flat())]
}

//A-2 votacion
export function firstRepeated(votes: string[]): string | undefined {
  const set = new Set<string>()
  for (const vote of votes) {
    if (set.has(vote)) {
      return vote
    }
    set.add(vote)
  }
  return undefined
}

//A-3 canciones en las dos playlists
export function inBoth(a: string[], b: string[]): string[] {
  const bSet = new Set(b)
  const set = new Set<string>()
  for (const canA of a) {
    if (bSet.has(canA)) {
      set.add(canA)
    }
  }
  return [...set]
}
