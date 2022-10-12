// Two to One
// https://www.codewars.com/kata/5656b6906de340bd1b0000ac

function longest(s1, s2) {
    s1 = s1.split('')
    s2 = s2.split('')
    let letters = new Set([
        ...s1,
        ...s2
    ])
    let uniqueArray = [...letters].sort()
    return uniqueArray.join('')
}