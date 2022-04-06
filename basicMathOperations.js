// Basic Mathematical Operations
// https://www.codewars.com/kata/57356c55867b9b7a60000bd7

function basicOp(operation, value1, value2) {
    let math = `${value1} ${operation} ${value2}`
    return eval(math)
}