import './style.css'

const profesor = 'Isaías FL'
const modulo = 'DWEC'

console.log(profesor)
console.log('Profesor:', profesor)
console.log({ profesor, modulo })

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h1>Hola TypeScript</h1>
`
console.log(typeof 7)//dira que es tipo number
console.log(typeof '7')//dira que es tipo string
console.log(typeof null)//dira que es null
console.log('7' + 2)//dira 72
console.log('7' - 2)//dara error ya que  si el + los junta el menos 
//los separaria y eso no se puede asi que da una advertencia
console.log(10 % 3)//divide
console.log(Number(''))//mostrara 0
console.log(Number('14px'))// pondra 14px en number

const nombre ='Sara'
const edad = '18'
const grupo = '2º DAW'
const haProgramadoAntes=true

console.log(`Hola soy ${nombre}, tengo ${edad} años, estoy en ${grupo} y he programado antes: ${haProgramadoAntes}`)
 console.log(typeof nombre)
 console.log(typeof edad)
 console.log(typeof grupo)
 console.log(typeof haProgramadoAntes)



