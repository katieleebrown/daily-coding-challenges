// Exclamation Marks Series #2
// https://www.codewars.com/kata/57faece99610ced690000165

function remove (string) {  
    let lastChar = string.charAt(string.length - 1)
    
    while(lastChar == '!') {
      string = string.slice(0, -1) 
      lastChar = string.charAt(string.length - 1)
    }
    
    return string
  }