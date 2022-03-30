// Count the Positives and Sum the Negatives
// https://www.codewars.com/kata/576bb71bbbcf0951d5000044

function countPositivesSumNegatives(input) {
    let positives = 0
    let negatives = []

    if (input == null || input == '') {
        return []
    }

    input.forEach(num => {
        num > 0 ? positives++ : negatives.push(num)
    })

    return [positives, negatives.reduce((a, b) => a + b, 0)]
}