// Consecutive Items
// https://www.codewars.com/kata/5f6d533e1475f30001e47514

function consecutive(arr, a, b) {
    let index = arr.indexOf(a)
    return (arr[index - 1] == b || arr[index + 1] == b)
  }