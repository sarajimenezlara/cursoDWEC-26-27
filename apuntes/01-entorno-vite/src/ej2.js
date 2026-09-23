let arr = [2,5,2,7,5,6]
let arr2=[]
function eliminarDuplicados(arr){
  for (let i = 0; i <arr.length; i++){
    if(!arr2.includes(arr[i])){
        arr2.push(arr[i])
    }
  }
  return arr2
}
arr2 =eliminarDuplicados(arr)
console.log(eliminarDuplicados(arr2))



