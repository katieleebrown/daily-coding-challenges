// Get the Mean of an Array
// https://www.codewars.com/kata/563e320cee5dddcf77000158

function getAverage(marks) {
    return Math.floor(marks.reduce((sum, current) => sum + current, 0) / marks.length)
}