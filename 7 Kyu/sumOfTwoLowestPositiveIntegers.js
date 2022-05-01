// Sum of Lowest Positive Integers
// https://www.codewars.com/kata/558fc85d8fd1938afb000014/

function sumTwoSmallestNumbers(numbers) {
    let lowest = Number.POSITIVE_INFINITY
    let secondLowest = Number.POSITIVE_INFINITY

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] <= lowest && numbers[i] <= secondLowest) {
            secondLowest = lowest
            lowest = numbers[i]
        } else if (numbers[i] <= lowest && numbers[i] > secondLowest) {
            lowest = numbers[i]
        } else if (numbers[i] <= secondLowest) {
            secondLowest = numbers[i]
        }
    }
    return lowest + secondLowest
}