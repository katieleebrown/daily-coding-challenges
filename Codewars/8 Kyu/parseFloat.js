// Parse Float
// https://www.codewars.com/kata/57a386117cb1f31890000039/

function parseF(s) {
    let num = parseFloat(s)
    let isItNaN = isNaN(num)
    return isItNaN ? null : num
}