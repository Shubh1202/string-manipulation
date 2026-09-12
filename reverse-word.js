//Write a javascript function that reverses the order of words in a sentence without using the built-in reverse() method.
let string = "the quick brown fox jumps over a lazy dog"

function reverseWord(str=''){
  if(!str){
    return `String not found`
  }

  let spilitWord = str.split(' ')
  let len = spilitWord.length-1
  let revWord = []
  for(let i=len; i>=0; i--){
    revWord.push(spilitWord[i])
  }

  return revWord.join(" ")
  
}

console.log(reverseWord(string))
