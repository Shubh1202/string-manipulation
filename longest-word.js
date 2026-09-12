//Program to find longest word in a given sentence ?

let str = "The quick brown fox jumps over a lazy dog"

function longestWork(string=""){
  if(!string){
    return `Sentence not found`
  }

  let wordArray = string.split(" ")
  let len = wordArray.length-1
  let firstLongest = lastLongest = wordArray[0]
  let words = []
  let k=0

  for(let i=0; i<=len;i++){
    if(wordArray[i].length > firstLongest.length){
      firstLongest = wordArray[i]
    }
    if(wordArray[i].length >= lastLongest.length){
      lastLongest = wordArray[i]
    }
  }

  return `First Longest word is: ${firstLongest} & Last Longest word is: ${lastLongest}`
}

console.log(longestWork(str))
