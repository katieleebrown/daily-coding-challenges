// Is This a Triangle?
// https://www.codewars.com/kata/56606694ec01347ce800001b

function isTriangle(a,b,c) {
    let nums = [a, b, c]
    let sorted = nums.sort((a, b) => a - b)
    return (sorted[0] + sorted[1]) > sorted[2] 
 }