// Replace With Alphabet Position
// https://www.codewars.com/kata/546f922b54af40e1e90001da

function alphabetPosition(text) {
    let nums = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let arr = text.toLowerCase().split('')
    
    let numberArr = arr.map(x => {
      if (nums.includes(x)) {
        return (nums.indexOf(x) + 1)
      } 
    })
    
    return numberArr.filter(x => typeof x === 'number').join(' ')  
  }