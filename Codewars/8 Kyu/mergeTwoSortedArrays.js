// Merge Two Sorted Arrays Into One
// https://www.codewars.com/kata/5899642f6e1b25935d000161

function mergeArrays(arr1, arr2) {
    let arr3 = arr1.concat(arr2).sort((a, b) => a - b)

    for (let i = 0; i < arr3.length;) {
        if (arr3[i] === arr3[i + 1]) {
            arr3.splice(i, 1)
        } else {
            i++
        }
    }
    return arr3
}