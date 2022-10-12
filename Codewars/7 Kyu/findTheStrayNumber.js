// Find The Stray Number
// https://www.codewars.com/kata/57f609022f4d534f05000024

function stray(numbers) {
    let first = numbers[0]
    let odd = 0
    numbers.forEach(x => {
      if (x !== first) {
        odd = x
      }
    })
    return first == numbers[1] ? odd : first
  }