// Sum of Minimums
// https://www.codewars.com/kata/5d5ee4c35162d9001af7d699

function sumOfMinimums(arr) {
    let mins = []
    arr.forEach(arr => {
      let sorted = arr.sort((a, b) => a - b)
      mins.push(sorted[0])
    })
  
    return mins.reduce((a,b) => a + b, 0)
  }