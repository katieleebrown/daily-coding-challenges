// Split Strings
// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/

function solution(str){
    let pairs = []
    str = str.split('')
    while(str.length > 0) {
      if (str.length >= 2) {
       pairs.push(str[0] + str[1])
        str.splice(0, 2)
      } else if (str.length = 1) {
        pairs.push(str[0] + '_')
        str.splice(0, 1)
      }
      
    }
   return pairs
 }