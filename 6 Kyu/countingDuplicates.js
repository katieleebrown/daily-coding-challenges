// Counting Duplicates
// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1

function duplicateCount(text) {
    let letters = text.toLowerCase().split('')
    let uniques = []
    let duplicatesList = []
    let duplicates = 0

    for (let i = 0; i < letters.length; i++) {
        if (!uniques.includes(letters[i])) {
            uniques.push(letters[i])
        } else if (uniques.includes(letters[i]) && !duplicatesList.includes(letters[i])) {
            duplicatesList.push(letters[i])
            duplicates++
        }
    }
    return duplicates
}