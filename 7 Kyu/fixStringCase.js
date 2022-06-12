// Fix String Case
// https://www.codewars.com/kata/5b180e9fedaa564a7000009a

function solve(s) {
    let upperCase = 0
    let lowerCase = 0

    for (let i = 0; i < s.length; i++) {
        s.charAt(i) == s.charAt(i).toUpperCase() ? upperCase++ : lowerCase++
    }

    return upperCase > lowerCase ? s.toUpperCase() : s.toLowerCase()
}