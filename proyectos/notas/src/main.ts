import "./style.css"
import { createCard, etiquetas, getElement } from "./components/dom";
import { products } from "./services/products";
import type { Product } from "./types/Product";

const h1Product = document.createElement("h1");
h1Product.classList.add("h1Product")
h1Product.textContent = "Productos"

//un li con todos los productos que tengo
//


const app = getElement("#products", HTMLDivElement)
const ulProducts = document.createElement("ul");
ulProducts.append(...products.map(p => createCard(p)))

const liTotal = document.createElement("li")
liTotal.classList.add("card", "total")

const totalStrongText = document.createElement("strong")
totalStrongText.textContent = `Total productos :`
liTotal.append(totalStrongText)

const totalStrong = document.createElement("strong")
totalStrong.classList.add("card-price")
totalStrong.textContent = String(products.reduce((acc, p) => acc += p.price, 0))
liTotal.append(totalStrong)

ulProducts.append(liTotal)
const spanEtiquetas = etiquetas("hola mundo", ["card-price", "total"])
ulProducts.append(spanEtiquetas)
app.append(ulProducts)

//.append --> guarda al final
//.prepend --> guarda al principio
//.before --> guarda justo antes de 
//.after --> guarda justo despues de
//.replaceWith(nuevo) --> guarda en lugar de



// EJERCICIO
// crear un contador de clicks usando button y etiqueta
//nivel 2
const section = document.createElement("section")
const btnClicks = document.createElement("button")
btnClicks.textContent = `Clicks: 0`
section.append(btnClicks)
const hr = document.createElement("hr")
app.append(hr)
app.append(section)
// crear un boton para reiniciar el contador
//nivel 2.5

