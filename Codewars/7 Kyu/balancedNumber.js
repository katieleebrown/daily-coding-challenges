// Balanced Number
// https://www.codewars.com/kata/5a4e3782880385ba68000018

function balancedNum(number) {
    if (number < 100 && number > -100) {
      return 'Balanced'
    }
    
    let numList = number.toString().split('')
    let half = Math.floor((numList.length - 1)/2)
    let left = numList.slice(0, half).reduce((a,b) => Number(a) + Number(b))
    let right = numList.slice(-1 * half).reduce((a,b) => Number(a) + Number(b))
  
    return left == right ? 'Balanced' : 'Not Balanced'
  }