//  Write a JavaScript function to check if a given number is prime.
//13, 7, 11, 18, 9
let num = 14

console.log(Math.sqrt(num))

//Approach 1
function checkEvenNumber(number=0){
  if(number <= 0){
    return `Function not accept negative of less than 0 number`
  }

  let count = 0

  for(let i=2; i<=number;i++){
    if(number%i === 0){
      count++
    }
  }
  return (count===1) ? `Yes, is prime number` : `Not a prime number`
}

console.log(`${num} prime number? ${checkEvenNumber(num)}`)

//Approach 2
function checkPrimeNumberX(number = 0) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(`${num} prime number? ${checkPrimeNumberX(num)}`)
