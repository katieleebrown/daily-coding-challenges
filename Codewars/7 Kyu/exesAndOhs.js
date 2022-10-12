// Exes and Ohs
// https://www.codewars.com/kata/55908aad6620c066bc00002a

function XO(str) {
    let letters = str.toLowerCase().split('')
    let NumX = 0
    let NumO = 0
    
    for (let i = 0; i < letters.length; i++){
      if (letters[i] == 'x') {
        NumX++
      } else if (letters[i] == 'o') {
        NumO++
      }
    }
  return NumX == NumO
}