// Rot13
// https://www.codewars.com/kata/530e15517bc88ac656000716

function rot13(message) {
    let charCoded = message.split('').map(x => x.charCodeAt(0))
    let plus13 = charCoded.map(x => {
        if (x < 65 || (x > 90 && x < 97) || x > 122) {
            return x
        } else if (x < 78 || (x > 96 && x < 110)) {
            return x + 13
        } else {
            return x - 13
        }
    })

    return plus13.map(x => String.fromCharCode(x)).join('')
}