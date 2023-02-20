// Compare Strings by Sum of Chars
// https://www.codewars.com/kata/576bb3c4b1abc497ec000065/

function compare(s1, s2) {
    return findValue(s1) == findValue(s2)
  }
  
  function findValue(x) {
    return /[^a-z]/i.test(x) || x == null ? 0 : x.split('').map(x => x.toUpperCase().charCodeAt(0)).reduce((a,b) => a + b,0)
  }