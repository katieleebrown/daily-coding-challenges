// Equal Sides of an Array
// https://www.codewars.com/kata/5679aa472b8f57fb8c000047

function findEvenIndex(arr) {
    for (let i = 0; i < arr.length; i++) {
      let firstHalf = arr.slice(0, i).reduce((a,b) => a + b, 0)
      let secondHalf = arr.slice(i + 1).reduce((a,b) => a + b, 0)
      
      if (firstHalf === secondHalf) {
        return i
      }
    } 
    return -1
  }