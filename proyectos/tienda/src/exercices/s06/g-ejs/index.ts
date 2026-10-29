// Enunciado: Uniones discriminadas
// Autor: Sara Jimenez Lara
// Investigación: Fuentes consultadas
//

//G-1 Pedido de comida a domicilio
export type FoodOrder =
  { state: 'preparing', restaurant: string } |
  { state: 'onTheWay', rider: string, minutes: number } |
  { state: 'delivered', at: string } |
  { state: 'cancelled', reason: string };
export function describedFood(order: FoodOrder): string {

}
