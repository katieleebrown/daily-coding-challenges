// Find the Middle Element
// https://www.codewars.com/kata/545a4c5a61aa4c6916000755

function gimme (triplet) {
    let original = triplet.map(x => x).sort((a,b) => a - b)
    let middle = original[1]
    return triplet.indexOf(middle)
   }