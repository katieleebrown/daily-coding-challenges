// Grasshopper - Summation
// https://www.codewars.com/kata/55d24f55d7dd296eb9000030

var summation = function (num) {
    let numbers = []

    for (let i = 1; i <= num; i++) {
        numbers.push(i)
    }

    return numbers.reduce((a, b) => a + b, 0)
}