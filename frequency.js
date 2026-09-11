let str = "a2b3c1d5"

function stringFrequency(string=''){
  if(!string){
    return `Please enter your sring`
  }

  let char = ''
  let newStr = ''
  let num = ''

  for(let i=0;i<=string.length-1;i++){
    let ch = string[i]

    console.log(/[a-zA-Z0-9]/.test(ch))
    console.log(ch.match(/[a-zA-Z0-9]/g))

    if((ch>='a' && ch<='z') || (ch>='A' && ch <= 'Z')){
      if(char && num){
        for(let j=0; j<Number(num); j++){
          newStr += char
        }
      }
      char = ch;
      num = ''
    }else if(ch>= '0' &&  ch <= '9'){
      num = ch
    }
  }
    if(char && num){
      for(let j=0; j<num; j++){
        newStr += char
      }
    }

  return newStr
}

console.log(stringFrequency(str))

