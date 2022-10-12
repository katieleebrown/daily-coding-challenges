// Multiples of Three or Five
// https://www.codewars.com/kata/514b92a657cdc65150000006

function solution(number){
    let newArr = []
    for (let i = 0; i < number; i++) {
      if ( i % 3 == 0 || i % 5 == 0) {
        newArr.push(i)
      }
    }
    return newArr.reduce((a, b) => a + b, 0)
  }