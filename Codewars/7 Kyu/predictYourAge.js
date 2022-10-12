// Predict Your Age
// https://www.codewars.com/kata/5aff237c578a14752d0035ae

function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
    let ages = [age1, age2, age3, age4, age5, age6, age7, age8]
    let reduced = ages.map(x => x * x).reduce((a, b) => a + b, 0)
    return Math.floor(Math.sqrt(reduced) / 2)
}