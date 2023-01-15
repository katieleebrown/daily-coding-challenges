// Indexed Capitalization
// https://www.codewars.com/kata/59cfc09a86a6fdf6df0000f1/

function capitalize(s, arr) {
    let letters = s.split('')
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= letters.length) {
            letters[arr[i]] = letters[arr[i]].toUpperCase()
        }
    }

    return letters.join('')
};