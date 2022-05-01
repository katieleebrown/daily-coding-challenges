// Square(n) Sum
// https://www.codewars.com/kata/515e271a311df0350d00000f

function squareSum(numbers) {
    return numbers.map(item => item * item).reduce((sum, current) => sum + current, 0)
}