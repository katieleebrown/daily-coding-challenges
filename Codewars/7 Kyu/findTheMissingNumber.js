// Find the Missing Number
// https://www.codewars.com/kata/57f5e7bd60d0a0cfd900032d

function missingNo(nums) {
    let sorted = nums.sort((a, b) => a - b)
    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] == 100) {
            return 0
        } else if (sorted[i] + 1 !== sorted[i + 1]) {
            return sorted[i] + 1
        }
    }
}