// Count the Divisors of a Number
// https://www.codewars.com/kata/542c0f198e077084c0000c2e

function getDivisorsCnt(n) {
    let numDivisors = 0

    for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
            numDivisors++
        }
    }
    return numDivisors
}