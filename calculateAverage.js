// Calculate Average
// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921

function find_average(array) {
    return array.length > 0 ? array.reduce((a, b) => a + b, 0) / array.length : 0
}