// Swap Values
// https://www.codewars.com/kata/5388f0e00b24c5635e000fc6

function swapValues(arguments) {
    let temp = arguments.shift()
    return arguments.push(temp)
}