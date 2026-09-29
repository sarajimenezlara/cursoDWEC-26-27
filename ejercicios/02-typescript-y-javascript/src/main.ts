import { ejercicio01 } from './ej_01'
import { ejercicio02 } from './ej_02'
import { ejercicio03 } from './ej_03'
import { ejercicio04 } from './ej_04'
import { ejercicio05 } from './ej_05'
import { ejercicio06 } from './ej_06'
import { ejercicio07 } from './ej_07'
import { ejercicio08 } from './ej_08'
import { ejercicio09 } from './ej_09'
import { ejercicio10 } from './ej_10'

const ejercicios: Array<() => void> = [
  ejercicio01,
  ejercicio02,
  ejercicio03,
  ejercicio04,
  ejercicio05,
  ejercicio06,
  ejercicio07,
  ejercicio08,
  ejercicio09,
  ejercicio10
]

for (let i = 0; i < ejercicios.length; i++) {
  console.log(`\n===== Ejercicio ${i + 1} =====`)
  ejercicios[i]()
}
