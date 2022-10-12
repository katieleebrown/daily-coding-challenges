// Sum of Odd Numbers
// https://www.codewars.com/kata/55fd2d567d94ac3bc9000064

function rowSumOddNumbers(n) {
    let row = []
    let start = (n * (n - 1)) + 1

    for (let i = 0; i < n; i++) {
        row.push(start)
        start += 2
    }

    return row.reduce((a, b) => a + b)
}