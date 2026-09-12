//Write a program to remove duplicates from an array ?
let arr = [1,2,3,2,4,1,8,7]

function removeDuplicate(array=[]){
  let arrayLen = array.length-1

  if(arrayLen===0){
    return `Array is an empty.`
  }

  let newArray = []
  let  k = 0

  for(let i=0; i<=arrayLen; i++){
    let isDuplicate = false
    for(let j=0; j<=arrayLen;j++){
      if(array[i] === newArray[j]){        
        isDuplicate = true;
        break;
      }
    }

    if(!isDuplicate){
      newArray[k] = array[i]
      k++
    }
  }
  return newArray
  
}

console.log(removeDuplicate(arr))
