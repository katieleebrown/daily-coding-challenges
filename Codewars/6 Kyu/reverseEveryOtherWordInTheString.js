// Reverse Every Other Word in the String
// https://www.codewars.com/kata/58d76854024c72c3e20000de

function reverse(str) {
    let words = str.split(' ')
    words = words.map((x, i) => {
        if (i % 2 != 0) {
            return x.split('').reverse().join('')
        } else {
            return x
        }
    })

    return words.join(' ').trim()
}