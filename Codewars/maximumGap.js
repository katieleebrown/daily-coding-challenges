// Maximum Gap
// https://www.codewars.com/kata/5a7893ef0025e9eb50000013

function maxGap(numbers) {
    let maxGap = 0
    numbers.sort((a, b) => a - b)

    for (let i = 1; i < numbers.length; i++) {
        let gap = Math.abs(numbers[i - 1] - numbers[i])
        if (gap > maxGap) {
            maxGap = gap
        }
    }

    return maxGap
}