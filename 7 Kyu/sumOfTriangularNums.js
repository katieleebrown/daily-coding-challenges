// Sum of Triangular Numbers 
// https://www.codewars.com/kata/580878d5d27b84b64c000b51/

function sumTriangularNumbers(n) {
    let row = 1
    let lastNum = 0
    let sum = 0

    for (let i = 1; i <= n; i++) {
        lastNum += row
        sum += lastNum
        row++
    }
    return sum
}