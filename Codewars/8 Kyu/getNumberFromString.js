// Get Number from String
// https://www.codewars.com/kata/57a37f3cbb99449513000cd8

function getNumberFromString(s) {
    return Number(s.replace(/\D+/g, ''))
}
