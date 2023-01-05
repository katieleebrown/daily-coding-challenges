// Product of Maximums of Array
// https://www.codewars.com/kata/5a63948acadebff56f000018/

function maxProduct(numbers, size) {
    let orderedArr = numbers.sort((a, b) => a - b)
    let maximums = []

    for (let i = 0; i < size; i++) {
        maximums.push(orderedArr[orderedArr.length - 1 - i])
    }

    return maximums.reduce((a, b) => a * b, 1)
}