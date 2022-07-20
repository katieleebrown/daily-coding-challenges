// Mexican Wave
// https://www.codewars.com/kata/58f5c63f1e26ecda7e000029

function wave(str) {
    let wave = []
    let letters = str.split('')

    for (let i = 0; i < letters.length; i++) {
        if (letters[i] != ' ') {
            letters[i] = letters[i].toUpperCase()
            wave.push(letters.join(''))
            letters[i] = letters[i].toLowerCase()
        }
    }
    return wave
}