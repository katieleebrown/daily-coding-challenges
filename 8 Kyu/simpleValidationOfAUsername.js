// Simple Validation of a Username
// https://www.codewars.com/kata/56a3f08aa9a6cc9b75000023

function validateUsr(username) {
    if(username.includes('!') || username.includes(' ') || username.includes('@')) {
      return false
    } else if (username.toLowerCase() != username) {
      return false
    } else if (username.length < 4 || username.length > 16) {
      return false
    }
    return true
  }