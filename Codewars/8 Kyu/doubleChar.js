// Double Char
// https://www.codewars.com/kata/56b1f01c247c01db92000076

function doubleChar(str) {
    let list = str.split('')
    let newStr = []

    for (let i = 0; i < list.length; i++) {
        newStr.push(list[i])
        newStr.push(list[i])
    }

    return newStr.join('')
}