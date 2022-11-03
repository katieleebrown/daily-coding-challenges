// Ordered Count of Characters
// https://www.codewars.com/kata/57a6633153ba33189e000074

const orderedCount = function (text) {
    let arr = text.split('')
    let uniques = [...new Set(arr)]
    let count = []

    for (let i = 0; i < uniques.length; i++) {
        let letters = arr.filter(x => x == uniques[i])
        count.push([uniques[i], letters.length])
    }

    return count
}