// Sum of the First Nth Term of Series
// https://www.codewars.com/kata/555eded1ad94b00403000071

function SeriesSum(n) {
    let total = 0
    for (let i = 0; i < n; i++) {
        total += (1 / ((3 * i) + 1).toFixed(2))
    }
    return total.toFixed(2)
}