//  Write a JavaScript program to find the maximum number in an array.

let arr = [3,1,4,7,11,5,16]

function findMaxNumber(array = []){
  let max = array[0];
  let arrayLength = array.length-1

  if(arrayLength === 0){
    return `Data not found in array.`
  }

  for(let i=1; i<=arrayLength; i++){
    if(array[i] > max){
      max = array[i]
    }
  }

  return max

}

let maxNumber = findMaxNumber(arr)
console.log(`maxium number in array is: ${maxNumber}`)
