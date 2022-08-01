// Thinkful - String Drills: Repeater
// https://www.codewars.com/kata/585a1a227cb58d8d740001c3/

function repeater(string, n) {
    let arr = []

    for (let i = 0; i < n; i++) {
        arr.push(string)
    }
    return arr.join('')
}