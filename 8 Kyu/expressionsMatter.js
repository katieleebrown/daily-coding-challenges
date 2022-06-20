// Expressions Matter
// https://www.codewars.com/kata/5ae62fcf252e66d44d00008e

function expressionMatter(a, b, c) {
    let optionOne = a * (b + c)
    let optionTwo = a * b * c
    let optionThree = a + b * c
    let optionFour = (a + b) * c
    let optionFive = a + b + c
    
    let sorted = [optionOne, optionTwo, optionThree, optionFour, optionFive].sort((a,b) => a - b)
    return sorted[4]
  }