// Find Multiples of a Number
// https://www.codewars.com/kata/58ca658cc0d6401f2700045f

function findMultiples(integer, limit) {
    let arr = []
    for (let i = integer; i <= limit; i++) {
        if (i % integer === 0) {
            arr.push(i)
        }
    }
    return arr
}