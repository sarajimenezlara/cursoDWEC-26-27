import { students } from "./services/students"
import { average, isPassed } from "./utils/grades"

const averageText = document.querySelector('#average');

const listU = document.querySelector("#student-list");

//input de busqueda
const inputSearch = document.createElement("input");
inputSearch.placeholder = "Escriba nombre para buscar";
inputSearch.style.backgroundColor = "gray";


if (!(averageText instanceof HTMLParagraphElement)) {
  throw new Error('Falta <p id="average"> en el HTML');
}

if (!(listU instanceof HTMLUListElement)) {
  throw new Error("Falta la etiqueta <ul>")
}
const media = average(students)
averageText.textContent = `Media: ${average(students).toFixed(2)}`;
averageText.style.color = media >= 5 ? 'green' : 'red'

averageText.appendChild(inputSearch)
//boton de enviar la busqueda
const btnSearch = document.createElement("button")
btnSearch.textContent = "Buscar"

averageText.appendChild(btnSearch)

for (const student of students) {
  const item = document.createElement("li")
  item.textContent = `Estudiante: ${student.name} --- Nota: ${student.grade}`
  item.style.color = isPassed(student) ? 'green' : 'red'
  listU.appendChild(item)
}



