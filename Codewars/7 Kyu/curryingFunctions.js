// Currying Functions
// https://www.codewars.com/kata/586909e4c66d18dd1800009b

function multiplyAll(arr) {
    return function (num) {
        return arr.map(x => x * num)
    }
}