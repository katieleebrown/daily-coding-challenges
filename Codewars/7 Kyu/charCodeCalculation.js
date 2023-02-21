// Char Code Calculation
// https://www.codewars.com/kata/57f75cc397d62fc93d000059

function calc(x) {
    let nums = x.split('').map(x => x.charCodeAt(0).toString()).join('')
    let nums2 = nums.replaceAll('7', '1')

    return Math.abs(reduceNums(nums) - reduceNums(nums2))
}

function reduceNums(y) {
    let numbers = y.split('').map(x => +x)
    return numbers.reduce((a, b) => a + b, 0)
}