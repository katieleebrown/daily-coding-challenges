// Switcheroo
// https://www.codewars.com/kata/57f759bb664021a30300007d

function switcheroo(x){
    let swap = []
    let str = x.split('')
    
    for(let i = 0; i < str.length; i++) {
      if(str[i] == 'a') {
        swap.push('b')
      } else if (str[i] == 'b') {
        swap.push('a')
      } else {
        swap.push(str[i])
      }
    }
    return swap.join('')
  }