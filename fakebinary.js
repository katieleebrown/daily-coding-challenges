// Fake Binary
// https://www.codewars.com/kata/57eae65a4321032ce000002d

function fakeBin(x) {
    x = x.split('')

    x.forEach((item, index) => {
        item < 5 ? x.splice(index, 1, 0) : x.splice(index, 1, 1)
    })

    return x.join('')
}