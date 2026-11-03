import type { Product } from "../types/Product";

export function getElement<T extends Element>(selector: string, type: new () => T): T {
  const element = document.querySelector(selector);
  if (!(element instanceof type)) {
    throw new Error(`no se encuentra el selector ${selector} o no es del tipo esperado`)
  }
  return element
}

export function createCard(p: Product): HTMLElement {
  const li = document.createElement("li")
  li.classList.add("card")
  if (p.stock === 0) li.classList.add("card-agotado")
  const name = document.createElement("span")
  name.textContent = p.name
  const price = document.createElement("span")
  price.classList.add("card-price")
  price.textContent = `${p.price} €`

  li.append(name, price)
  return li
}
// crear una funcion que genere etiquetas con el texto que le paso como parametro y con un array de clases
//nivel 1

export function etiquetas(text: string, classArray: string[]): HTMLSpanElement {
  const span = document.createElement("span")
  span.classList.add(...classArray)
  span.textContent = text
  return span
}


