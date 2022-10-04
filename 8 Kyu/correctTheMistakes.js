// Correct the Mistakes of the Character Recognition Software
// https://www.codewars.com/kata/577bd026df78c19bca0002c0 

function correct(string) {
    string.split('')
    let correctedString = []
    
    for(let i = 0; i < string.length; i++) {
      if(string[i] == '5') {
        correctedString.push('S')
      } else if (string[i] == '0') {
        correctedString.push('O')
      } else if (string[i] == '1') {
        correctedString.push('I')
      } else {
        correctedString.push(string[i])
      }
    }
    
    return correctedString.join('')
  }