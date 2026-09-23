let arr = [2,5,8,3,4,6,14,13]
let arr2=[]
function filtrarPares(arr){
  for  (let i = 0; i<arr.length;i++){
      if(arr[i]%2==0){
        arr2.push(arr[i])
      }
    }
  return arr2
}
console.log(filtrarPares(arr))
