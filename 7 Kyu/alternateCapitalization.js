// Alternate Capitalization
// https://www.codewars.com/kata/59cfc000aeb2844d16000075

function capitalize(s) {
    let evens = []
    let odds = []
    let letters = s.split('')

    for (let i = 0; i < letters.length; i++) {
        if (i % 2 == 0) {
            evens.push(letters[i].toUpperCase())
            odds.push(letters[i])
        } else {
            evens.push(letters[i])
            odds.push(letters[i].toUpperCase())
        }
    }

    return [evens.join(''), odds.join('')]
};