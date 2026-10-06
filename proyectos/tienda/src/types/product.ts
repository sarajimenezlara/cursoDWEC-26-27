//un tipo describe la forma de un da ¡tat
export type Category = 'monitors' | "audio" | 'gtu' | 'peripherals'

//una interface es como un contrato von los valores que dene temer y el tipo, typescript y si se rompe...
//se queja
//los elementos de una interface van separado por ; 
export interface Product {
  id: number
  name: string
  price: number
  category: Category
  stock: number
}
