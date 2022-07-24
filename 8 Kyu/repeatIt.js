// Repeat It
// https://www.codewars.com/kata/557af9418895e44de7000053

var repeatIt = function (str, n) {
    let newStr = str

    if (typeof str != 'string') {
        return 'Not a string'
    } else if (n == 0) {
        return ''
    } else {
        for (let i = 1; i < n; i++) {
            newStr += str
        }
    }
    return newStr
}