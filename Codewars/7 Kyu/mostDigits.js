// Most Digits
// https://www.codewars.com/kata/58daa7617332e59593000006

function findLongest(array) {
    let maxIndex = 0

    for (let i = 0; i < array.length; i++) {
        if (array[i].toString().length > array[maxIndex].toString().length) {
            maxIndex = i
        }
    }

    return array[maxIndex]
}