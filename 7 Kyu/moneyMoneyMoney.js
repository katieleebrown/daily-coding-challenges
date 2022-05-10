// Money, money, money
// https://www.codewars.com/kata/563f037412e5ada593000114

function calculateYears(principal, interest, tax, desired) {
    let total = principal
    let numYears = 0
    
    for(let i = 1; desired >+ total; i++) {
      total = (total + (total * interest)) - ((total * interest) * tax)
      numYears++
    }
  return numYears
}