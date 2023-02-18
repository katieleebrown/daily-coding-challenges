// Age Range Compatibility
// https://www.codewars.com/kata/5803956ddb07c5c74200144e

function datingRange(age){
    let min = age > 14 ? Math.floor(age/2) + 7 : age - Math.ceil(.1 * age)
    let max = age > 14 ? (age - 7) * 2 : age + Math.floor(.1 * age)
    
    return `${min}-${max}`
  }