// Vowel Count
// https://www.codewars.com/kata/54ff3102c1bad923760001f3

function getCount(str) {
    let vowelsCount = 0;
    let arr = str.split('')
    
    for (let i = 0; i <= arr.length; i++) {
      if(arr[i] == 'a' || arr[i] == 'e' || arr[i] == 'i' || arr[i] == 'o' || arr[i] == 'u') {
        vowelsCount++
      }
    }
    
    return vowelsCount;
  }