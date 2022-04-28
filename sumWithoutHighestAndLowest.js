// Sum Without Highest and Lowest Numbers
// https://www.codewars.com/kata/576b93db1129fcf2200001e6

function sumArray(array) {
    if (array == null || array.length <= 2) {
        return 0
    } else {
        let sorted = array.sort((a, b) => a - b)
        sorted.shift()
        sorted.pop()
        return sorted.reduce((a, b) => a + b, 0)
    }
}