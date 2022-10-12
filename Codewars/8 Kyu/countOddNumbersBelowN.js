// Count Odd Numbers Below N
// https://www.codewars.com/kata/59342039eb450e39970000a6

function oddCount(n) {
    if (n % 2 === 0) {
        return n / 2
    } else {
        return n / 2 - .5
    }
}