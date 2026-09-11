//How to check whether a string is palindrome or not ?

let str = "madamT";

//Approach 1
function checkPalindrome(string=null){
  if(!string) return
  let newStr = ''

  for(let i=string.length-1; i>=0;i--){
    newStr += string[i]
  }
  return newStr;
}

let newStr = checkPalindrome(str)
let isTrue = (str.localeCompare(newStr)===0)
console.log(isTrue ? "String is palindrome" : "String is not palindrome")

//Approach 2

function checkPalindromeX(string=null){
  if(!string) return
  let newStr = string.split("").reverse().join("")
  return newStr
}


let newStrX = checkPalindromeX(str)
let isTrueX = (str.localeCompare(newStr)===0)
console.log(isTrueX ? "String is palindrome" : "String is not palindrome")

console.log(newStr, newStrX)


