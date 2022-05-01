// Shortest Word
// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9

function findShort(s) {
    let newArr = s.split(' ')
    let short = Number.POSITIVE_INFINITY

    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i].length < short) {
            short = newArr[i].length
        }
    }
    return short
}