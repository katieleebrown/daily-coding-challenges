// Square Every Digit
//https://www.codewars.com/kata/546e2562b03326a88e000020

function squareDigits(num){
    return Number(num.toString().split('').map(x => x ** 2).join(''))
  }