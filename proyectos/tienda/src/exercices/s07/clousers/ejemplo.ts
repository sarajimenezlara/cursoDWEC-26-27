// Enunciado: Ejemplos del profe
// Autor: Sara Jimenez Lara
// Investigación: Fuentes consultadas
//

const greaterThan10 = (n: number): boolean => n >= 10
const greaterThan20 = (n: number): boolean => n >= 20

//fabriquemos una funcion que pueda generar a otras

//1.- typemos una funcion: type nombre_funcion =(parametros typados) => tipo_valor_devuelto

type NumberCheck = (n: number) => boolean;

export function greaterThan(limit: number): NumberCheck {
  function check(n: number): boolean {
    return n >= limit
  }
  return check
}
const greaterThan_10 = greaterThan(10);
const greaterThan_20 = greaterThan(20);
const greaterThan_30 = greaterThan(30);

console.log(greaterThan_20(40))

const nums = [-2, 3, 4, -5, 6];
const greaterThan_3 = greaterThan(3)
console.log(nums.filter(greaterThan_3)) //[3,4,6]

//crear una funcion fabrica que le pase 2 valores y genere verdadero o falso si el valor pedido esta entre esos dos valores sin incluir
//
//between10and20 --> createrBetween(zzz,xxx)
//type NumberCheck = (n: number) => boolean;


export function createBetween(min: number, max: number): NumberCheck {
  return (n: number): boolean => n > min && n < max;
}
const between10and20 = createBetween(10, 20)

console.log(between10and20(5)) //false


