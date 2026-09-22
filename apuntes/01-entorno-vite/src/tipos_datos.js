//funcion que le pase como parametro un numero en grados celsius y lo transforma a grados celsius

//v1 (casi nunca usaremos algo tan explicativo)
function celsiousToken(celsius){
let kelvin = celsius +273.15
  return kelvin
}

//v2 (version donde prorizaremos el menor numero de lineas)
function celsiousToken(celsius){
  return celsius + 273.15
}

//v3 (modo pro usando arraw function)
const celToKel =(celsius) =>{
return celsius + 273.15
}

//v4 (modo dios pro max)
const cTok = (c) => c + 273.15

//funcion que le pase como parametro 2 numeros y me los ordene



//funcion que pase de celsius a kelvin pero comprobarndo que celsius es un numero, que la temperatura no puede estar  debajo del 0 absoluto.
//(-273) y el resultado ,me lo das con solo 2 cifras decimales
//is NaN <--- buscamos significado,
//¿como truncamos un numero a 2 cifras decimales??
