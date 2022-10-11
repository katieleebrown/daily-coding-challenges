// Build a Square
// https://www.codewars.com/kata/59a96d71dbe3b06c0200009c

function generateShape(integer){
    let rows = []
    let plus ='+'
    
    for(let i = 0; i < integer; i++) {
      rows.push(plus.repeat(integer))
    }
    
    return rows.join('\n')
  }