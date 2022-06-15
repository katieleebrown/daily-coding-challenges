// Flatten and Sort an Array
// https://www.codewars.com/kata/57ee99a16c8df7b02d00045f

function flattenAndSort(array) {
    let flattened = [].concat.apply([], array)
    return flattened.sort((a, b) => a - b);
}