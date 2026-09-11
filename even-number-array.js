// Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.

let arr = [3,1,4,7,11,5,16]

function evenNumberArray(array = []){
  let newArray = []
  let arrayLength = array.length-1
  if(arrayLength <=0){
    return newArray
  }

  let j=0
  for(let i=0;i<=arrayLength;i++){
    if(array[i]%2 === 0){
      newArray[j] = array[i];
      j++
    }
  }

  return newArray
}

let newArray = evenNumberArray(arr)
console.log(newArray)
