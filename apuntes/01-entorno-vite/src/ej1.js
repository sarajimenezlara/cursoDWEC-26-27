
let arr1 = [1,2,3]
let arr2 = [9,8,7]

function sumaArrays(arr1,arr2) {
  let arr3 =[]
 for (let i = 0; i<arr1.length;i++){
    arr3=[arr1[i]+arr2[i]]
 }
  return arr3
}
console.log(sumaArrays(arr1,arr2))
