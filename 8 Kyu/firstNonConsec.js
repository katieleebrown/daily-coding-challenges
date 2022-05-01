// Find the First Non-Consecutive Number
// https://www.codewars.com/kata/58f8a3a27a5c28d92e000144

function firstNonConsecutive(arr) {

    for (let i = 1; i < arr.length;) {
        if (arr[i - 1] !== (arr[i] - 1)) {
            return arr[i]
        } else {
            i++
        }
    }

    return null
}