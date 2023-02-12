// To Leet Speak
// https://www.codewars.com/kata/57c1ab3949324c321600013f/

function toLeetSpeak(str) {
    let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ' ']
    let leet = ['@', '8', `(`, 'D', '3', 'F', '6', '#', '!', 'J', 'K', '1', 'M', 'N', '0', 'P', 'Q', 'R', '$', '7', 'U', 'V', 'W', 'X', 'Y', '2', ' ']
    let leeted = str.split('').map(x => leet[letters.indexOf(x)])

    return leeted.join('')
}