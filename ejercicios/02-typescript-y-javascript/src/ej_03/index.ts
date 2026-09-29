const stock: Record<string, number> = {
  teclados: 12,
  ratones: 0,
  monitores: 5,
  cables: 8
}

function resumenStock(stock: Record<string, number>): {
  total: number
  sinStock: number
} {
  let total = 0
  let sinStock = 0

  for (const clave in stock) {
    if (Object.hasOwn(stock, clave)) {
      total += stock[clave]
      stock[clave] === 0 ? sinStock++ : null
    }
  }

  return { total, sinStock }
}

export function ejercicio03(): void {
  console.log('Stock:', stock)
  console.log(resumenStock(stock))
  console.log('Caso {}:', resumenStock({}))
  console.log('Caso { a: 0, b: 0 }:', resumenStock({ a: 0, b: 0 }))
}
