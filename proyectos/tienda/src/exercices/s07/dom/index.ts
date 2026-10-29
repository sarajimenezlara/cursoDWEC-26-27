// Enunciado: ejemplos DOM
// Autor: Sara JImenez lara
// Investigación: Fuentes consultadas
//

/*
 * Dom --> Arbol de objetos construido con html
  <html>


 <body>
  <h1>Tienda </h1>
  <div id="category">
    <input id="search" type "search"/> //formulario basico de una lista
    <ul id="list"></ul>
  </div>

 </body
 </html>

 document
      body
          h1
          div#category
            input#search
            ul#list
 *
 *Node --> Todos los elementos del dom se denominan NODOS (Node)
 *Element --> Cualquier etiqueta
    HTMLElement --> textContent, classList, dataset, etc
      HTMLImputElement ..> -value, .checke, etc
      HTMLButtonElement -->disable

  Como se selecciona los elementos 
  document.querySelection(""#category") <-- metodo para selecionar por id o class
  ****** mucho ciudado que esa query puede devolver null Element

  ¿como se tipa en typescript?

  de peor a mejor forma

  const = search =document.querySelecction(#search) ! as HTMLInputElement
  !<-- la exclamacion dice que no te preocupes lo juro or snoopy que no es null y decir ! quita null de los posibles valores y me dice que te garatia

  const search = document.querySelection<HTMLInputElement>("search")
  un poco mejor pero sigo sin comprobar en ningun momoento si es null o no

  la forma correcta es :
  const searInput = document.querySelIector("#search")
  if(!(searchInput instanceOf HTMLInputElement)){
    //te lanzo un error o te redirecciono a los errores
    throw new Error("No se encuentra la etiqueta search o no es un input")
  }
  console.log(searchInput.value) //Mostraria en pantalla lo que ha escrito en el input
 *
 */

console.log("Estoy en index.ts")

//crear variables que apunten a cada uno de los elementos del dom que tengo diseñados en el html
const searInput = document.querySelIector("#search")! as HTMLInputElement


//seleccion de los elementos del dom

