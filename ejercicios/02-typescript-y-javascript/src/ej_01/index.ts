const lecturas = ['21.5', '19', '', '23.5', 'error', '20']

function analizarLecturas(lecturas: string[]):{validas:  number; descartadas: number; media: string;}{
  let validas= 0
  let descartadas= 0
  let suma=0 
    for (const lectura of lecturas ){ 
        const num = Number(lectura)
        if(lectura===''||!Number.isFinite(num)){
            descartadas++;
        }else{
            validas++
              suma+=num;
            console.log(num>=22?'Caluroso':'Fresco');
        }
    }
    const media = suma + validas >0 ?(suma/validas).toFixed(1) : 'Sin datos';
    return {validas, descartadas,media}
}

export function ejercicio01(): void{
  console.log(analizarLecturas(lecturas))
}
