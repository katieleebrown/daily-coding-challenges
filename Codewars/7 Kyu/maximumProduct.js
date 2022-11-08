// Maximum Product
// https://www.codewars.com/kata/5a4138acf28b82aa43000117

function adjacentElementsProduct(array) {
    let max = Number.NEGATIVE_INFINITY

    for (let i = 1; i < array.length; i++) {
        let prod = array[i - 1] * array[i]

        if (prod > max) {
            max = prod
        }
    }

    return max
}