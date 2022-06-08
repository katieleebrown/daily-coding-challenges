// Is it A Palindrome?
// https://www.codewars.com/kata/57a1fd2ce298a731b20006a4

function isPalindrome(x) {
    let str = x.toLowerCase().split('')
    
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== str[str.length - 1 - i]) {
        return false
      }
    }
    return true
  }