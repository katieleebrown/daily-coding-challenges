// Sum of Differences In Array
// https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e

function sumOfDifferences(arr) {
    arr.sort((a, b) => b - a)

    let sum = 0

    for (let i = 1; i < arr.length; i++) {
        sum += (arr[i - 1] - arr[i])
    }

    return sum
}