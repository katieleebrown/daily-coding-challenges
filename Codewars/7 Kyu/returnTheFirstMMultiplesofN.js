// Return the First M Multiples of N
// https://www.codewars.com/kata/593c9175933500f33400003e

function multiples(m, n) {
    let nums = []

    for (let i = 1; i <= m; i++) {
        nums.push(n * i)
    }

    return nums
}