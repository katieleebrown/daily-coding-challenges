// Array Plus Array
// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151

function arrayPlusArray(arr1, arr2) {
    let sum1 = arr1.reduce((sum, current) => sum + current, 0)
    let sum2 = arr2.reduce((sum, current) => sum + current, 0)

    return sum1 + sum2;
}