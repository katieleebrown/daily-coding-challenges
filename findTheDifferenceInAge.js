// Find the Difference In Ages
// https://www.codewars.com/kata/5720a1cb65a504fdff0003e2

function differenceInAges(ages) {
    let min = Math.min(...ages)
    let max = Math.max(...ages)

    return [min, max, max - min]
}