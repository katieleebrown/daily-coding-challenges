// Find Nearest Square Number
// https://www.codewars.com/kata/5a805d8cafa10f8b930005ba

function nearestSq(n) {
    let lower = Math.floor(Math.sqrt(n))
    let higher = Math.ceil(Math.sqrt(n))
    return (n - (lower * lower)) < ((higher * higher) - n) ? lower * lower : higher * higher
}