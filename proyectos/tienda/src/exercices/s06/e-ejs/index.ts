// Enunciado: Closures
// Autor: Sara Jimenez Lara
// Investigación: Fuentes consultadas
//

//E-1 Turnos de la carniceria
export function createTurnDispenser(letter: string): () => string {
  let next = 1
  function number(): string {
    const turn = `${letter}-${String(next).padStart(3, '0')}`
    next++
    return turn
  }
  return number
}
const turnA = createTurnDispenser('A');
const turnB = createTurnDispenser('B');
console.log(turnA())
console.log(turnA())
console.log(turnB())
console.log(turnA())
//E-2 Semaforo
export type Light = 'rojo' | 'verde' | 'ambar';
export interface TrafficLight {
  current: () => Light;
  next: () => Light;
}
export function createTrafficLight(): TrafficLight {
  let colorPos = 0;
  const colors: Light[] = ['rojo', 'verde', 'ambar'];
  function next(): Light {
    colorPos = (colorPos + 1) % 3
    return colors[colorPos]
  }
  function current(): Light {
    return next()
  }
  return { current, next }
}

const light = createTrafficLight();
light.current();
light.next();
light.next();
light.next();

//E-3 Contraseña con intento
export type LoginAnswer = 'correcta' | 'incorrecta' | 'bloqueada'
export function createPasswordCheck(password: string, maxAttemps: number): (attempt: string) => LoginAnswer {
  let failures = 0
  return (attempt: string) => {
    if (failures === maxAttemps) {
      return 'bloqueada'
    }
    if (attempt === password) {
      failures = 0;
      return 'correcta'
    } else {
      failures++;
      if (failures === maxAttemps) {
        return 'bloqueada'
      } else {
        return 'incorrecta'
      }
    }
  }
}
const check = createPasswordCheck('1234', 3)
check('0000')
check('1111')
check('1234')
check('a')
check('b')
check('c')
check('1234')
