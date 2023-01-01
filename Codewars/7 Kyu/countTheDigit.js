// Count the Digit
// https://www.codewars.com/kata/566fc12495810954b1000030/

function nbDig(n, d) {
    console.log(n, d)
    let nums = []
      
    for(let i = 0; i <= n; i++) {
      nums.push(i**2)
    }
    
    nums = nums.map(x => x.toString()).join('').split('')
    let includesD = nums.filter(x => x.includes(d.toString()))
    
    return includesD.length
  }