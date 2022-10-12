// Training On String Repeat
// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e

function repeatStr(n, s) {
    let newStr = ''
    for (let i = 1; i <= n; i++) {
        newStr = newStr + s
    }
    return newStr
}