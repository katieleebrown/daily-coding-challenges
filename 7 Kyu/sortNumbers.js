// Sort Numbers
// https://www.codewars.com/kata/5174a4c0f2769dd8b1000003

function solution(nums) {
    let sorted = []

    nums === null ? sorted = [] : sorted = nums.sort((a, b) => a - b)

    return sorted
}
