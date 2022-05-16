// The Highest Profit Wins
// https://www.codewars.com/kata/559590633066759614000063

function minMax(arr){
    let sorted = arr.sort((a,b) => a - b)
    let max = sorted[sorted.length - 1]
    let min = sorted[0]
    return [min, max]
  }