// How Many Stairs...
// https://www.codewars.com/kata/56fc55cd1f5a93d68a001d4e/

function stairsIn20(s){
    let dayTotals = s.map(day => day.reduce((a,b) => a + b, 0))
    return dayTotals.reduce((a,b) => a + b, 0) * 20
  }