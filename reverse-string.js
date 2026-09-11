//Program to find Reverse of a string without using built-in method?

let str = "Hello User";

function reverseString(string=""){
  let reverseStr = ''

  if(string){
    for(let i=string.length-1; i>=0; i--){
      reverseStr += string[i]
    }
  }  
  return reverseStr
}

let reverseStr = reverseString()
console.log(`Reverse string is: ${reverseStr}`)
