// Stop Spinning My Words
// https://www.codewars.com/kata/5264d2b162488dc400000001

function spinWords(string){
    let arr = string.split(' ')
    
    for(let i = 0; i < arr.length; i++) {
      if (arr[i].length >= 5) {
        arr[i] = arr[i].split('').reverse().join('')
      }
    }
    
    return arr.join(' ')
  }