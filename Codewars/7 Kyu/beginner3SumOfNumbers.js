// Beginner #3 Sum of Numbers
// https://www.codewars.com/kata/55f2b110f61eb01779000053

function getSum(a, b) {
    let sum = 0

    if (a == b) {
        return a
    } else if (a < b) {
        for (let i = a; i < b; i++) {
            sum += i
        }
        sum += b
        return sum
    } else if (a > b) {
        for (let i = b; i < a; i++) {
            sum += i
        }
        sum += a
        return sum
    }
}