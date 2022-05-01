// Find Numbers Which Are Divisible By Given Number
// https://www.codewars.com/kata/55edaba99da3a9c84000003b

function divisibleBy(numbers, divisor) {
    return numbers.filter(num => num % divisor === 0)
}