import './style.css'

const profesor = 'Isaías FL'
const modulo = 'DWEC'

console.log(profesor)
console.log('Profesor:', profesor)
console.log({ profesor, modulo })

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h1>Hola TypeScript</h1>
`
