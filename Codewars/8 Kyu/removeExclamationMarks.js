// Remove Exclamation Marks
// https://www.codewars.com/kata/57a0885cbb9944e24c00008e

function removeExclamationMarks(s) {
    let characters = s.split('')
    let noExclamation = []

    for (let i = 0; i < characters.length; i++) {
        if (characters[i] != '!') {
            noExclamation.push(characters[i])
        }
    }
    return noExclamation.join('')
}