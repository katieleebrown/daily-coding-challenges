// Split in Parts
// https://www.codewars.com/kata/5650ab06d11d675371000003/

var splitInParts = function(s, partLength){
    let count = Math.ceil(s.length / partLength)
    let newStr = []
    s = s.split('')
    
    for(let i = count; i > 0 ; i--) {
      let x = s.slice(0, partLength)
      newStr.push(x)
      s.splice(0, partLength)
    }
    
    return newStr.map(y => y.join('')).join(' ')
  }