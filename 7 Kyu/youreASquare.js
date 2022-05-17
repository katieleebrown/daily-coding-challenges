// You're A Square
// https://www.codewars.com/kata/54c27a33fb7da0db0100040e

var isSquare = function(n){
    return ((Math.sqrt(n) === Math.ceil(Math.sqrt(n))) && (Math.sqrt(n) === Math.floor(Math.sqrt(n)))) ? true : false
  }