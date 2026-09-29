const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

function analizarMatriz(matriz: number[][]): {
  suma: number
  maximo: number | null
} {
  let suma = 0
  let maximo: number | null = null

  for (const fila of matriz) {
    for (const num of fila) {
      suma += num
      if (maximo === null || num > maximo) {
        maximo = num
      }
    }
  }

  return { suma, maximo }
}

export function ejercicio06(): void {
  console.log('Matriz:', matriz)
  console.log(analizarMatriz(matriz))
  console.log('Caso []:', analizarMatriz([]))
  console.log('Caso [[]]:', analizarMatriz([[]]))
  console.log('Caso [[-5, -2], [-9]]:', analizarMatriz([[-5, -2], [-9]]))
}
