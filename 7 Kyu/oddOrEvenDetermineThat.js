// Odd or Even? Determine That!
// https://www.codewars.com/kata/619f200fd0ff91000eaf4a08

function oddOrEven(n) {
    if (n % 2 !== 0) {
        return 'Either'
    } else if ((n / 2) % 2 === 0) {
        return 'Even'
    } else {
        return 'Odd'
    }
}