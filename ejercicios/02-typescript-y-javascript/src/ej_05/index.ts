function precioFinal(precio: number, descuento: number): number | null {
  if (!Number.isFinite(precio) || !Number.isFinite(descuento)) {
    return null
  }
  if (precio < 0 || descuento < 0 || descuento > 100) {
    return null
  }
  return precio * (1 - descuento / 100)
}

export function ejercicio05(): void {
  const casos: Array<[number, number]> = [
    [80, 25],
    [0, 20],
    [80, 100],
    [-1, 10],
    [80, 120],
    [NaN, 10],
    [50, 0]
  ]

  for (const [precio, descuento] of casos) {
    const resultado = precioFinal(precio, descuento)
    const etiqueta = resultado !== null ? `Precio: ${resultado}` : 'Datos inválidos'
    console.log(`precio ${precio}, descuento ${descuento}% → ${etiqueta}`)
  }
}
