// Sort the Odd
// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d

function sortArray(array) {
    let odds = array.slice(0)
    odds = odds.filter((x) => x % 2 !== 0).sort((a,b) => a - b)
    console.log(odds)
    
    let index = 0
    
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 !== 0) {
        array[i] = odds[index]
        index++
      }
    }
    return array
  }