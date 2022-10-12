// Reverse Words
// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4

function reverseWords(str) {
    let newArr = str.split(' ')
    return newArr.map(x => x.split('').reverse().join('')).join(' ')
  }