// Summing A Numbers Digits
// https://www.codewars.com/kata/52f3149496de55aded000410

function sumDigits(number) {
    let arr = (Math.abs(number)).toString().split('')
    arr = arr.map(x => parseInt(x))
    console.log(arr)
    return arr.reduce((a, b) => a + b, 0)
}