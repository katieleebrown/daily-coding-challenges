// Give Me A Diamond
// https://www.codewars.com/kata/5503013e34137eeeaa001648

function diamond(n){
    if (n % 2 == 0 || n < 1) {
      return null
    } else {
      let stars = '*'
      let spaces = ''
      let diamond = []
      
      //Sets up starting spaces
      for (let i = 0; i < ((n + 1)/2); i++) {
        spaces += ' '
      }
      
      spaces = spaces.slice(0, -1)
      // Adds increasing rows     
      for (let i = 0; i < ((n + 1) / 2); i++) {
        diamond.push(spaces + stars)
        stars += '**'
        spaces = spaces.slice(0, -1)
      }
      
      //Adds decreasing rows 
      stars = stars.slice(0, -2)
      for (let i = 0; i < ((n -1) / 2); i++) {
        spaces += ' '
        stars = stars.slice(0, -2)
        diamond.push(spaces + stars)
      }
      return `${diamond.join('\n')}\n`
    }
  }