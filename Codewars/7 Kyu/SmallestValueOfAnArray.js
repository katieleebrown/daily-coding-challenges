// Smallest Value of An Array
// https://www.codewars.com/kata/544a54fd18b8e06d240005c0/

function min(arr, toReturn) {
    let sorted = [...arr].sort((a, b) => a - b)

    return toReturn == 'value' ? sorted[0] : arr.indexOf(sorted[0])
}