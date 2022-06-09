// Persistent Bugger
// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec

function persistence(num) {
    let count = 0 
  
    while (num.toString().length > 1) {
      num = multiplyNums(num)
      console.log(num)
      count++
     }
    return count
  }
  
  function multiplyNums(number) {
    let nums = number.toString().split('')
    let total = 1
    for (let i = 0; i < nums.length; i++) {
      total *= parseInt(nums[i])
    }
    return total
  }