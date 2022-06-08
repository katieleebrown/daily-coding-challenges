// Simple Fun #176: Reverse Letter
// https://www.codewars.com/kata/58b8c94b7df3f116eb00005b

function reverseLetter(str) {
    let arr = str.split('').filter(char => /[a-zA-Z]/.test(char))
    
    return arr.reverse().join('') 
  }