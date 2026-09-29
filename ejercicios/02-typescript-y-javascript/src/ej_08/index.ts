const entradas = ['7', '4.5', '9', '3', '5.5', 'hola']

function mediaNotas(entradas: string[]): {
  validas: number
  media: string | null
} {
  let validas = 0
  let suma = 0

  for (const entrada of entradas) {
    const numero = Number(entrada)
    if (Number.isFinite(numero) && numero >= 0 && numero <= 10) {
      validas++
      suma += numero
    }
  }

  const media = validas > 0 ? (suma / validas).toFixed(1) : null

  return { validas, media }
}

export function ejercicio08(): void {
  console.log(mediaNotas(entradas))
  console.log('Caso []:', mediaNotas([]))
  console.log("Caso ['10', '0']:", mediaNotas(['10', '0']))
  console.log("Caso ['11', '-1', 'x']:", mediaNotas(['11', '-1', 'x']))
}
