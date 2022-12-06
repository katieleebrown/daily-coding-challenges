// Minimize Sum of Array
// https://www.codewars.com/kata/5a523566b3bfa84c2e00010b

function minSum(arr) {
    arr.sort((a, b) => a - b)
    let sums = []

    for (let i = 0; i < arr.length / 2; i++) {
        sums.push(arr[i] * arr[arr.length - 1 - i])
    }

    return sums.reduce((a, b) => a + b)
}