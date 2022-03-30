// Sum Mixed Array
// https://www.codewars.com/kata/57eaeb9578748ff92a000009

function sumMix(x) {
    let nums = x.map((item) => Number(item))
    return nums.reduce((a, b) => a + b, 0)
}