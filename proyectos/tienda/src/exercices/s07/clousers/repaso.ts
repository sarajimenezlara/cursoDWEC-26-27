//funcion fabrica que genere saludos

function makeGreeter(greeting: string): (name: string) => string {
  return (name) => `${greeting}, ${name}`
}

const morning = makeGreeter("Buenos dias");
const evening = makeGreeter("Buenas noches");

console.log(['Ana', 'Luis', 'Pablo'].map(morning))

// un conversor de diferentes unidades
function makeConverter(factor: number): (value: number) => number {
  return (value) => value * factor;
}

const kmToMiles = makeConverter(0.621)
const eurosToDollars = makeConverter(1.08)

console.log(kmToMiles(10).toFixed(2)) // 6.21 millas son 10 km
console.log(eurosToDollars(100).toFixed(2)) // 108 dolares son 100 euros

//vanos a crear un marcador de cualquier competicion
function makeScoreBoard(): { scoreHome: () => void; scoreAway: () => void; result: () => string } {
  //declaro las variables que acumulan las puntuaciones del home y del away
  let home = 0;
  let away = 0;
  return {
    scoreHome: () => { home += 1 },
    scoreAway: () => { away += 1 },
    result: () => `${home} --- ${away}`
  }
}

const granadaToMalaga = makeScoreBoard()
const finalChamp = makeScoreBoard()

granadaToMalaga.scoreHome()
granadaToMalaga.scoreHome()
granadaToMalaga.scoreAway()

console.log(granadaToMalaga.result())
console.log(finalChamp.result())
