// Testing 1-2-3
// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9

var number = function (array) {
    let arrayCount = []
    for (let i = 0; i < array.length; i++) {
        arrayCount.push(`${i + 1}: ${array[i]}`)
    }
    return arrayCount
}