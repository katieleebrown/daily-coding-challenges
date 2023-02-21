// Folding Your Way to the Moon
// https://www.codewars.com/kata/58f0ba42e89aa6158400000e

function foldTo(distance) {
    if (distance < 0) return null

    let count = 0
    for (let i = .0001; i < distance; i *= 2) {
        count += 1
    }

    return count
}