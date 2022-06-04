// Find the Unique Number
// https://www.codewars.com/kata/585d7d5adb20cf33cb000235

function findUniq(arr) {
    if (arr[0] == arr[1]) {
      for (let i = 1; i < arr.length; i++) {
        if (arr[0] !== arr[i]) {
          return arr[i]
        }
      }
    } else {
      return arr[0] == arr[2] ? arr[1] : arr[0]
    } 
  }