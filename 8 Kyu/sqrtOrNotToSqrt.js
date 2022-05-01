// To Square(root) or Not to Square(root)
// https://www.codewars.com/kata/57f6ad55cca6e045d2000627

function squareOrSquareRoot(array) {
    return array.map((num) => Number.isInteger(Math.sqrt(num)) ? num = Math.sqrt(num) : num = num ** 2)
}