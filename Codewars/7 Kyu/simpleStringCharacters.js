// Simple String Characters
// https://www.codewars.com/kata/5a29a0898f27f2d9c9000058/

function solve(s) {
    let codes = s.split('').map(x => x.charCodeAt(0))
    let uppercase = codes.filter(x => x > 64 && x < 91).length
    let lowercase = codes.filter(x => x > 96 && x < 123).length
    let numbers = codes.filter(x => x > 47 && x < 58).length
    let specialChars = codes.length - uppercase - lowercase - numbers

    return [uppercase, lowercase, numbers, specialChars]
}