// Heads and Legs
// https://www.codewars.com/kata/574c5075d27783851800169e

function animals(heads, legs) {
    let cows = (legs - (heads * 2)) / 2
    let chickens = heads - cows

    if (heads === 0 && legs === 0) {
        return [0, 0]
    } else if (legs % 2 !== 0 || heads < 1 || legs < 2 || heads * 4 < legs || heads > legs * 2 || chickens < 0 || cows < 0) {
        return 'No solutions'
    } else {
        return [chickens, cows]
    }
}