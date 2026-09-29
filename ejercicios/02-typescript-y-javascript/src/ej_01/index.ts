const lecturas = ['21.5', '19', '', '23.5', 'error', '20']

function analizarLecturas(lecturas: string[]): {
  validas: number
  descartadas: number
  media: string
} {
  let validas = 0
  let descartadas = 0
  let suma = 0

  for (const lectura of lecturas) {
    const numero = Number(lectura)
    if (lectura !== '' && Number.isFinite(numero)) {
      validas++
      suma += numero
      console.log(`${lectura} → ${numero >= 22 ? 'Caluroso':'Fresco'}`)
    } else {
      descartadas++
    }
  }

  const media = validas > 0 ? (suma / validas).toFixed(1) : 'Sin datos'

  return { validas, descartadas, media }
}

export function ejercicio01(): void {
  console.log('Lecturas:', lecturas)
  console.log(analizarLecturas(lecturas))
  console.log('Caso []:', analizarLecturas([]))
  console.log("Caso ['0']:", analizarLecturas(['0']))
}
