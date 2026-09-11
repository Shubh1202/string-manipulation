// Find the factorial of given number?

let num = -5;

function findFactorial(number=0){
  let factorial = 1;

  if(number < 0){
    return `Factorial is not defined for negative numbers`
  }
  
  if(number){
    for(let i=number; i>1;i--){
      factorial *= i
    }
  }
  return factorial
}

console.log(`Factorial of ${num} is: ${findFactorial(num)}`)
