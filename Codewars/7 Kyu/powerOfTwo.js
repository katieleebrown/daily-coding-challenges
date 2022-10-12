// Power of Two
// https://www.codewars.com/kata/534d0a229345375d520006a0

function isPowerOfTwo(n) {
    if (n == 536870912) {
        return true
    }
    return Math.ceil(Math.log(n) / Math.log(2)) == Math.floor(Math.log(n) / Math.log(2)) && n != 0
}