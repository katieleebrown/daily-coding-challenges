// Array Helpers
// https://www.codewars.com/kata/525d50d2037b7acd6e000534

let array = Array.prototype

array.square = function () {
    return this.map(x => x ** 2)
}

array.cube = function () {
    return this.map(x => x ** 3)
}

array.average = function () {
    return this.reduce((a, b) => a + b, 0) / this.length
}

array.sum = function () {
    return this.reduce((a, b) => a + b, 0)
}

array.even = function () {
    return this.filter(x => x % 2 == 0)
}

array.odd = function () {
    return this.filter(x => x % 2 != 0)
}